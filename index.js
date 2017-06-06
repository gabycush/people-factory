const personForm = document.querySelector('#personForm')

personForm.addEventListener('submit', handleSubmit)

function handleSubmit(ev){ //stop the form from submitting and call the functions to change things
  ev.preventDefault()
  const f = ev.target
  hChange(f)
  pChange(f)
  const details = document.querySelector('#details')
  const name = f.personName.value
  //details.innerHTML = `<em>${name}</em>`
  const em = document.createElement('em')
  em.textContent = name
  details.appendChild(em)
}

function hChange(f){ //change the h1 to include the name and age
  name = f.personName.value
  age = f.personAge.value
  document.querySelector('h1').textContent = 'Profile: ' + name + ', ' + age
}

function pChange(f){ //change the empty paragraph to have the name and age with the selected color text.
  color = f.personColor.value
  name = f.personName.value
  age = f.personAge.value
  document.querySelector('.results').textContent = 'Hello, ' + name + '! You are ' + age + ' years old!'
  document.querySelector('.results').style.color = color

}
