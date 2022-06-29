var student = {
    name: " Priyam",
    age: 18,
    phone: 999999,
    city: "satna"
};
console.log(student);
console.log(student.age);
student.state = "MP";
student.id = 11;
student.city = "Rewa";
console.log(student);
delete student.age;
console.log(student);