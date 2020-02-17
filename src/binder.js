import { KnockoutPartialsLoader } from './partial-loader'

let isObject = ( input ) => {
    return 'object' == Object.prototype.toString.call(input).match(/^\[object\s(.*)\]$/)[1].toLowerCase()
}

let isString = ( input ) =>{
    return 'string' == Object.prototype.toString.call(input).match(/^\[object\s(.*)\]$/)[1].toLowerCase()
}

let installKnockoutExtensions = (ko, App) =>{
    if( !ko.bindingHandlers.excludeFromBinding ){
        ko.bindingHandlers.excludeFromBinding = {
            init: function( element, valueAccessor, allBindingsAccessor ) {
                return { controlsDescendantBindings: true }
            }
        }

        ko.virtualElements.allowedBindings.excludeFromBinding = true
    }

    ko.bindingHandlers.stopBubble = {
        init: function (element) {
            ko.utils.registerEventHandler(element, "click", function (event) {
                event.cancelBubble = true;
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
            });
        }
    };


    let getValueAccessor = function( element, valueAccessor, allBindings, viewModel, context ){
        return function(){
            return function(){
                var options, route, data
                options = ko.utils.unwrapObservable(valueAccessor())
                data = null

                if( isString(options) ){
                    route = options
                    App.navigate(route)
                    return
                }

                if( isObject(options) ){
                    route = ko.utils.unwrapObservable(options.to)
                    data = ko.utils.unwrapObservable(options.data)

                    if( !route && ('' !== route) ){
                        console.warn('Pollon [router:invalid-parameter]: cannot navigate to route. Invalid parameter passed in binding')
                        return
                    }

                    if( (null === data) || (undefined === data) ){
                        App.navigate(route)
                        return
                    }

                    App.navigate(route, data)
                    return
                }
            }
        }
    }
    if( !ko.bindingHandlers.navigate ){
        ko.bindingHandlers.navigate = {
            init: function( element, valueAccessor, allBindings, viewModel, context ){
                var newValueAccessor = getValueAccessor(element, valueAccessor, allBindings, viewModel, context)
                ko.bindingHandlers.click.init(element, newValueAccessor, allBindings, viewModel, context)
            }
        }
    }

    if( !ko.bindingHandlers.afterHtmlRender ){
        ko.bindingHandlers.afterHtmlRender = {
            update: function(element, valueAccessor, allBindings){
                // check if element has 'html' binding
                if (!allBindings().html) return
                // get bound callback (don't care about context, it's ready-to-use ref to function)
                var callback = valueAccessor()
                // fire callback with new value of an observable bound via 'html' binding
                callback(allBindings().html)
            }
        }
    }
}

export class KnockoutBinder{
    constructor( config ){
        this.modules = []
        this.ko = null
    }

    init( App ){
        if( this.ko  ){
            return
        }
        return App.load('knockout')
            .then(module =>{
                this.ko = module
                installKnockoutExtensions(module, App)
                App.Templates.KnockoutPartials = new KnockoutPartialsLoader(App.name)
            })
    }

    applyBindings( App, DOM, module ){
        let ViewModel

        ViewModel = module && module.View && module.View.Model
        ViewModel = ViewModel || {}
        let promise = Promise.resolve()

        return promise.then(() =>{
            if( !this.modules[App.name+':'+module.ID] ){
                module.Runtime.FSM.on('statemachine.state_entered', 'disposed', (sender, ev) =>{
                    this.ko.cleanNode(ev.args[0])
                })
            }
            this.modules[App.name+':'+module.ID] = true

            let data = this.ko.dataFor(DOM)

            if( !data || data !== ViewModel ){
                this.ko.applyBindings(ViewModel, DOM)
            }

            return DOM
        })
    }
}
