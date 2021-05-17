var contar = document.querySelector('span')
var original = document.querySelector('#original')
var modificar = document.querySelector('#modificar')
var efeito = document.querySelector('#efeito')

original.addEventListener('keyup', () => {
    contar.innerHTML = original.value.length
    if(efeito.value == "uppercase") modificar.value = original.value.toUpperCase()
    else modificar.calue = original.value.toLowerCase()
  
  efeito.addEventListener('change', function() {
    if(efeito.value == "uppercase") modificar.value = original.value.toUpperCase()
  })
