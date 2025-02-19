import name, { add, multiply } from "./cal.js";

const product = {
    name: "laptop",
    price: 2000,
    brand: "HP",
    details: function () {
        return `${this.brand} ${this.name} costs ${this.price}`;
},
};
console.log(product.details());

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`My name is ${this.name}`);
};

const tannu = new Person("tannu", 10);
tannu.greet();




const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Error fetching data");
        }
    }, 2000);
});

getData
.then((response) => console.log(response))
.catch((error) => console.log(error));



















async function fetchProducts() {
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let date = await response.json();
        console.log(date);

    }catch (error){
        console.log("error fetching data:",error);
    }
    
}
fetchProducts();