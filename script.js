
function calcular1(){
  var strmedia = document.getElementById('media')
  var media = Number(strmedia.value)

  if( media <= 0 || media > 10){
    alert('ERRO (Média inválida).')
  }
  else if( media >= 7){
    alert('Parabéns! Você foi APROVADO e não precisará de provas finais.')
  }
  else if(media < 2.5){
    alert('Infelizmente sua média não foi suficiente para ir para as proas finais! :( ')
  }
  else if(media < 7){
    var resultado = 15 - (media*2)
    alert(`Você precisará de ${resultado.toFixed(1)} pontos na prova final.`)
  }
}

function calcular2(){
  var strmedia1 = document.getElementById('media1')
  var media1 = Number(strmedia1.value)
  var strmedia2 = document.getElementById('media2')
  var media2 = Number(strmedia2.value)
  var strmedia3 = document.getElementById('media3')
  var media3 = Number(strmedia3.value)

  var media = (media1 + media2 + media3)/3


  if( media <= 0 || media > 10 || media1 <= 0 || media1 > 10 || media2 <= 0 || media2 > 10 || media3 <= 0 || media3 > 10){
    alert('ERRO (Verifique os valores preenchidos).')
  }
  else if( media >= 7){
    alert(`Media = ${media}.Parabéns! Você foi APROVADO e não precisará de provas finais.`)
  }
  else if(media < 2.5){
    alert('Infelizmente sua média não foi suficiente para ir para as proas finais! :( ')
  }
  else if(media < 7){
    var resultado = 15 - (media*2)
    alert(`Media = ${media}. Você precisará de ${resultado.toFixed(1)} pontos na prova final.`)
  }
}

function ocultar(value){
 
  var mediaunitaria = document.getElementById('media-unitaria')
  var mediageral = document.getElementById('media-geral')

  if(value == 0){
    mediaunitaria.style.display = "none"
    mediageral.style.display = "none"
  }
  if(value == 1){
    mediageral.style.display = "block"
  }else if(value != 1){
    mediageral.style.display = "none"
  }
  
  if(value == 2){
    mediaunitaria.style.display = "block"
  }else if(value != 2){
    mediaunitaria.style.display = "none"
  }
   
}