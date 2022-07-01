var product = [{
        brand: "apple",
        pname: "iphone12pro",
        price: 120000
    },
    {
        brand: "apple",
        pname: "iphone11pro",
        price: 110000
    },
    {
        brand: "apple",
        pname: "iphone11",
        price: 100000
    },
    {
        brand: "samsung",
        pname: "Galaxy note 10",
        price: 100000
    },
    {
        brand: "vivo",
        pname: "v23",
        price: 70000
    }
];
var filteredProduct = product.filter(function(e) {
    return e.price <= 100000;
})
console.log(filteredProduct);