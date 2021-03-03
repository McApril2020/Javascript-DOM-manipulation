
// const btns = document.querySelectorAll('#animal-list .delete');
// const names = document.querySelectorAll('#animal-list .name');

// Array.from(btns).forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })

// names.forEach((name) => {
//     name.addEventListener('click', (e) => {
//         console.log(e.target)
        
//     })
// })

const list = document.querySelector('#animal-list ul');
const addAnimal = document.forms['add-animal'];

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }

});

addAnimal.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = document.querySelector('#added-animal').value;
    //let value = addAnimal.querySelector('input[type="text"]').value;
    console.log(value);

    // create HTML elements
    const li = document.createElement('li');
    const animalName = document.createElement('span');
    const deleteAnimal = document.createElement('span');

    // append the created HTML elements
    li.appendChild(animalName);
    li.appendChild(deleteAnimal);
    list.appendChild(li);

    // adding the actual content/value into the dom
    animalName.textContent = value;
    deleteAnimal.textContent = "delete";
    

    //adding classes
    animalName.classList.add('name');
    deleteAnimal.classList.add('delete');
    
})








