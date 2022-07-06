var rows = [];
var user = [{
    image: "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Priyam Gautam",
    gender: "Male",
    email: "Priyam@gmail.com",
    city: "Pune",
    phone: 7067205017,
    descripition: "Full Stack Developer"
}, {
    image: "https://images.pexels.com/photos/2802368/pexels-photo-2802368.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Swati Singh",
    gender: "female",
    email: "Priyam@gmail.com",
    city: "Pune",
    phone: 7067205017,
    descripition: "Full Stack Developer"
}, {
    image: "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Akhil Shrivastava",
    gender: "Male",
    email: "Priyam@gmail.com",
    city: "Pune",
    phone: 7067205017,
    descripition: "Full Stack Developer"
}, {
    image: "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Aman singh",
    gender: "Male",
    email: "Priyam@gmail.com",
    city: "Pune",
    phone: 7067205017,
    descripition: "Full Stack Developer"
}, {
    image: "https://images.pexels.com/photos/2802368/pexels-photo-2802368.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Prince Pandey",
    gender: "female",
    email: "Priyam@gmail.com",
    city: "Pune",
    phone: 7067205017,
    descripition: "Full Stack Developer"
}]

function showTable() {
    var divTable = document.getElementById('tableDiv');
    var radioRow = document.getElementById('radio')
    var showBtn = document.getElementById('show');
    var hideBtn = document.getElementById('hide');
    var tbody = document.getElementById('tbody');

    user.map(function(ele, index) {
        var tr = document.createElement("tr");
        tr.id = "tr" + (index + 1);
        rows.push(tr.id)

        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")

        var img = document.createElement("img");

        img.src = ele.image;
        img.width = 50
        img.height = 40

        td1.appendChild(img)
        td2.innerText = ele.name
        td3.innerText = ele.gender
        td4.innerText = ele.email
        td5.innerText = ele.city



        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)

        tbody.appendChild(tr);
    })




    divTable.style.display = "block";
    radioRow.style.display = 'block'
    showBtn.disabled = true;
    hideBtn.disabled = false;
}

function removeRow() {
    rows.map(function(ele) {
        document.getElementById(ele).remove();
    });
    rows = [];
}


function hideTable() {
    var divTable = document.getElementById('tableDiv');
    var radioRow = document.getElementById('radio')

    var showBtn = document.getElementById('show');
    var hideBtn = document.getElementById('hide');

    divTable.style.display = "none";
    radioRow.style.display = 'none'


    showBtn.disabled = false;
    hideBtn.disabled = true;
    removeRow();

    // tr1.remove();
    // tr2.remove();
    // tr3.remove();
    // tr4.remove();
    // tr5.remove();

}

function fnFilter(value) {
    if (value === "male") {
        filteredArray = user.filter(function(ele) {
            return ele.gender === "male";
        });
    } else if (value === "female") {
        filteredArray = user.filter(function(ele) {
            return ele.gender("female");
        });
    } else {
        filteredArray = user;
    }
    removeRow();
    showTable();
}