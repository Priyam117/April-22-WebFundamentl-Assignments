let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let msg = document.getElementById('msg');
let add = document.getElementById('add');
let tasks = document.getElementById('tasks');


form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent to default work 
    formValidation();
});

let showTask = () => {
    let task = JSON.parse(localStorage.getItem('tasks'));

    tasks.innerHTML = '';
    data.map((item, index) => {
        return (tasks.innerHTML += `<div id="item">
        <span class="fw-bold">${item.text}</span>
        <span class="small text-secondary"> ${item.date}</span>
        <p>${item.description}</p>
        <span class="options">
            <i onclick="editTask(this)" class="bi bi-pencil-square"  data-bs-toggle="modal" data-bs-target="#form"></i>
            <i class="bi bi-trash-fill" onclick="deleteTask(this)"></i>
        </span>
    </div>`)
    });

    resetForm();
}
let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

// posting the data 

let data = [];

let accepctData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value
    });


    localStorage.setItem('tasks', JSON.stringify(data));
    (() => {
        data = JSON.parse(localStorage.getItem('tasks'));
        showTask();
    })();


    console.log(data);
}

//  form validation
let formValidation = () => {
    if (textInput.value === "") {

        msg.innerHTML = 'task can not be blank';

    } else {

        msg.innerHTML = "";
        accepctData();

        //  close the modal after submission
        add.setAttribute("data-bs-dismiss", 'modal')
        add.click();

        // IIFE : immeditely invoke a function 
        (() => {
            add.setAttribute("data-bs-dismiss", '')
        })
        (); // calling a anonumous function
    }
}

let deleteTask = (e) => {
    // removing the element from dom and from webpage
    e.parentElement.parentElement.remove();

    //   removing the element from data array
    data.splice(e.parentElement.parentElement.id, 1);

    localStorage.setItem('tasks', JSON.stringify(data));

}
let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
}