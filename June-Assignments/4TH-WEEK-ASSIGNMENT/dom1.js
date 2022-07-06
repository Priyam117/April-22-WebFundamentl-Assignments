var user = [{
        image: "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Priyam Gautam",
        gender: "Male",
        email: "Priyam@gmail.com",
        city: "Pune",
        phone: 7067205017,
        descripition: "Full Stack Developer"
    },
    {
        image: "",
        name: "dame",
        gender: "",
        email: "",
        city: "",
        phone: 0,
        descripition: ""
    },
    {
        image: "",
        name: "dame",
        gender: "",
        email: "",
        city: "",
        phone: 0,
        descripition: ""
    },
    {
        image: "",
        name: "dame",
        gender: "",
        email: "",
        city: "",
        phone: 0,
        descripition: ""
    }
]

function showTable() {
    var divTable = document.getElementById('tableDiv');
    var showBtn = document.getElementById('show');
    var hideBtn = document.getElementById('hide');
    var tbody = document.getElementById('tbody');

    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var img = document.createElement('img');

    img.src = user[0].image;
    img.width = 50
    img.height = 40

    td2.innerText = user[0].name
    td3.innerText = user[0].gender
    td4.innerText = user[0].email
    td5.innerText = user[0].city


    tbody.appendChild(tr1);
    td1.appendChild(img);
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)
    tr1.appendChild(td5)




    divTable.style.display = "block";
    showBtn.disabled = true;
    hideBtn.disabled = false;
}

function hideTable() {
    var divTable = document.getElementById('tableDiv');
    divTable.style.display = "none";
    var showBtn = document.getElementById('show');
    var hideBtn = document.getElementById('hide');
    divTable.style.display = "none";
    showBtn.disabled = false;
    hideBtn.disabled = true;
}