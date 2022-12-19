
function calcular1(){
  var strmedia = document.getElementById('media')
  var media = Number(strmedia.value)

  if( media < 0 || media > 10){
    alert('ERRO (Média inválida)')
  }
  else if( media >= 7){
    alert('Parabéns! Você foi APROVADO e não precisará de provas finais.')
  }
  else if(media < 2.5){
    alert('Infelizmente sua média não foi suficiente para ir para as proas finais! :( ')
  }
  else if(media < 7){
    var resultado = 15 - (media*2)
    alert(`Você precisará de ${resultado} pontos na prova final.`)
  }
}
  