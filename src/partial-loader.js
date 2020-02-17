import { TemplateLoader } from '@pollon/pollon'

let existsInDOM = ( name ) =>{
    return !!document.querySelector(`script[id="${name}"]`)
}

export class KnockoutPartialsLoader extends TemplateLoader{

    constructor( appName, extension ){
        super(appName)
        this.extension = extension || '.jpt'
    }

    get( name, input ){
        if( !this.canParse(input) ){
            return Promise.reject(`Pollon: [loader:knockout-partials] ${input} element is unparseable by a Partial template loader`)
        }

        if( existsInDOM(name) ){
            return Promise.resolve()
        }

        return new Promise(( resolve, reject ) =>{
            return super.get(input)
                .then( text =>{
                    let temp, frag
                    temp = document.createElement('template')
                    temp.innerHTML = `<script type="text/template" id="${name}">${text.trim()}</script>`
                    frag = temp.content

                    document.body.appendChild(frag)
                    resolve(text)
                }).catch(function( reason ){
                    console.warn(reason)
                    reject(reason)
                })
        })
    }

    onUnloadable( url, info, reason ){
        return super.onUnloadable(url, info, reason)
            .then(function( message ){
                console.warn('Pollon: [loader:knockout-partials] Partial Template loader: message')
                return ''
            }).catch(function( message ){
                console.warn('Pollon: [loader:knockout-partials] Partial Template loader: message')
                return ''
            })
    }
}
