const personForm = document.querySelector('#personForm')

personForm.addEventListener('submit', handleSubmit)

function handleSubmit(ev){ //stop the form from submitting and call the functions to change things
  ev.preventDefault()
  const f = ev.target
  hChange(f)
  createElements(f)
}

function hChange(f){ //change the h1 to include the name and age
  name = f.personName.value
  age = f.personAge.value
  document.querySelector('h1').textContent = `Profile: ${name}, ${age}`
}


function createElements(f){
  color = f.personColor.value
  const details = document.querySelector('#details')
  const ul = document.createElement('ul')
  const liOne = document.createElement('li')
  const liTwo = document.createElement('li')
  const liThree = document.createElement('li')

  const lis = lists(f, liOne, liTwo, liThree)
  appendChildren(details, ul, lis)
}

function colorStyles(color){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '7rem'
  colorDiv.style.height= '3rem'
  return colorDiv
}

function lists(f, one, two, three){
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.personColor.value
  one.textContent = `Name: ${name}`
  two.textContent = `Favorite Color:`
  two.appendChild(colorStyles(color))
  three.textContent = `Age: ${age}`
  const lis = [one, two, three]
  return lis
}

function appendChildren(div, ul, lis){
  for(var i=0; i<lis.length; i++){
    ul.appendChild(lis[i])
  }
  div.appendChild(ul)
}
