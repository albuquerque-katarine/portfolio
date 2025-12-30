
/**
 * API para Lista de Trabalhos
 */

var ul_trabalhos = document.getElementById('main-list-trabalhos');
var ul_estudos = document.getElementById('main-list-estudos');

/**
 * Trabalhos
 */

async function getApiTrabalhos() {

    const response = await fetch( './trabalhos.json' )
    .then( res => res.json() )
    .catch( e => console.log(e) );

    if( !response ) {
        throw new Error( "Erro na requisição!" ); 
    }    

    response.trabalhos.map( item => {
        let li = document.createElement('li');

        li.innerHTML = `
            <a target="_blank" href="${ item.url }">${ item.name.toUpperCase() }</a>
        `;

        ul_trabalhos.appendChild(li);
    });
}

getApiTrabalhos();
