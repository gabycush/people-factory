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
  const details = document.querySelector('#details')
  const person = {
    name: f.personName.value,
    age: f.personAge.value,
    color: colorStyles(f).outerHTML,
  }
  details.appendChild(lists(person))
}

function colorStyles(f){
  const color = f.personColor.value
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '7rem'
  colorDiv.style.height= '3rem'
  return colorDiv
}

function lists(person){
  const ul = document.createElement('ul')
  Object.keys(person).map(function(fieldName){
    const li = listItems(fieldName, person[fieldName])
    ul.appendChild(li)
  })
  return ul
}

function listItems(fieldName, value){
  const li = document.createElement('li')
  li.innerHTML = `${fieldName}: ${value}`
  return li
}
