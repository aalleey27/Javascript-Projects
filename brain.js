
// TodoList code goes here 

let deletebtn = document.getElementById('btn-closed')
let addbtn = document.getElementById("add-btn")
addbtn.addEventListener('click', addfunc)
let add_list = document.getElementById('add-list')


function addfunc(e) {
    let currentbtn = e.currentTarget;
    let currentinput = currentbtn.previousElementSibling
    let value = currentinput.value;


    //below line is for checking upper code is working or not

    // console.log(currentinput.value)


    //ADD new li code here

    let newli = document.createElement('li');
    newli.classList.add('list-group-item');
    
    newli.innerHTML = `<li class="list-group-item list-group-item list-group-item-action"> ${value}  <button onclick="dltevent(this)" id="btn-closed" type="button" class="btn-close btn-closed" data-bs-dismiss="alert" aria-label="Close"></button></li>`

    add_list.appendChild(newli);
    if(newli){
        currentinput.value='';
    }
}

// deletebtn.addEventListener('click', dltevent)

function dltevent(currentElement){

    //checking event is working or not

    // console.log(currentElement.parentElement)

    currentElement.parentElement.remove();
    if(add_list.children.length<=0){
        alert('List is Empty')
    }
    
}
