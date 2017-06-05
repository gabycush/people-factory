const personForm = document.querySelector('#personForm')
const personName =

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  console.log(f.personName.value)
}

personForm.addEventListener('submit', handleSubmit)
