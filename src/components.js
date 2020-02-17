import ko from 'knockout'

let isFunction = ( input ) => {
    return input instanceof Function
}

export const KnockoutComponents =  {
    install: function( App, config ){
        App.Components = {
            create: function( name, VM, tpl ){
                if( ko.components.isRegistered(name) ){
                    throw new Error(`Pollon: [knockout-components] cannor redeclare ${name}. A component with that name already exists`)
                }
                App.loadText(tpl)
                    .then( template =>{
                        ko.components.register(name, { viewModel: VM, template: template })
                    })
            }
        }

        config = isFunction(config)? config(App.name) : config

        var names = Object.keys(config)
        var all = names.map(function( name ){
            if( !config[name] ){
                throw new Error('Pollon: [knockout-components] cannot create a component without a module')
            }

            if( ko.components.isRegistered(name) ){
                throw new Error(`Pollon: [knockout-components] cannor redeclare ${name}. A component with that name already exists`)
            }


            const module = config[name]

            return App.loadText(module.Template)
                .then( template =>{
                    console.info(`Pollon: [knockout-components] ${name} component installed`)
                    ko.components.register(name, { viewModel: module.ViewModel, template: template })
                })

        })

        return Promise.all(all)
    }
}
