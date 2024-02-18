const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return `<p>${pregunta.titulo}</p>`
}

function imprimeTodasLasRespuestas(pregunta) {
  

  let resultado = "";
  let longitudObjeto = Object.keys(pregunta.respuestas).length;
  

  for (let i = 0; i < longitudObjeto; i++) {
    let result= pregunta.respuestas[i];
    resultado += imprimeUnaRespuesta(result)
  }

return resultado;
}

function imprimeUnaRespuesta(respuesta) {
  return ` ${imprimeLabel(respuesta)}  ${imprimeInput(respuesta)}`

}

function imprimeLabel(respuesta) {
  return `<label for= ${respuesta.id} > ${respuesta.label} </label>`;
  

}

function imprimeInput(respuesta) {

  return `<input type="radio" id="${respuesta.id}" name="${respuesta.name}" value="${respuesta.value}"></input>`
}


document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);

