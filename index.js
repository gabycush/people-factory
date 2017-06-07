
const PeopleFactory = {
  init: function(formSelector){
    const theForm = document.querySelector('form#personForm')
    theForm.addEventListener('submit', this.handleSubmit)
  },

  handleSubmit: function(ev){ //stop the form from submitting and call the functions to change things
    ev.preventDefault()
    const f = ev.target
    PeopleFactory.hChange(f)
    PeopleFactory.createElements(f)
  },

  hChange: function(f){ //change the h1 to include the name and age
    name = f.personName.value
    age = f.personAge.value
    document.querySelector('h1').textContent = `Profile: ${name}, ${age}`
  },

  colorStyles: function(f){
    const color = f.personColor.value
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '7rem'
    colorDiv.style.height= '3rem'
    return colorDiv
  },

  listItems: function(fieldName, value){
    const li = document.createElement('li')
    li.innerHTML = `${fieldName}: ${value}`
    return li
  },

  lists: function(person){
    const ul = document.createElement('ul')
    Object.keys(person).map(function(fieldName){
      const li = PeopleFactory.listItems(fieldName, person[fieldName])
      ul.appendChild(li)
    })
    return ul
  },

  createElements: function(f){
    const details = document.querySelector('#details')
    const person = {
      name: f.personName.value,
      age: f.personAge.value,
      color: PeopleFactory.colorStyles(f).outerHTML,
    }
    details.appendChild(PeopleFactory.lists(person))
  },

}

PeopleFactory.init('form#personForm')
