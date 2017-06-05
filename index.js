const personForm = document.querySelector('#personForm')

personForm.addEventListener('submit', handleSubmit)

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  hChange(f)
  pChange(f)
}

function hChange(f){
  name = f.personName.value
  age = f.personAge.value
  document.querySelector('h1').textContent = 'Profile: ' + name + ', ' + age
}

function pChange(f){
  color = f.personColor.value
  name = f.personName.value
  age = f.personAge.value
  document.querySelector('.results').textContent = 'Hello, ' + name + '! You are ' + age + ' years old!'
  document.querySelector('.results').style.color = color

}
