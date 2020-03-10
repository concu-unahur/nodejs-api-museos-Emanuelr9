const superagent = require('superagent');
const fs = require('fs');

function imprimirMuseos(error, respuesta) {
  if (error) {
    throw new Error('algo se rompió', error);
  }

  const cantidad = respuesta.body.count;
  const museos = respuesta.body.results;

  console.log(`Se encontraron ${cantidad} museos.`);
  console.log(`El primer museo se llama ${museos[0].nombre}.`)
}

console.log('Antes de llamar a superagent')

superagent
  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end(escibirArchivo)

 function escibirArchivo(err, res) {
  const museos = res.body.results;  
  fs.writeFile('museos.txt',museos[3].nombre,terminar)

 }


 function terminar(err){
   console.log("Fin")
 }

console.log('Después de llamar a superagent')