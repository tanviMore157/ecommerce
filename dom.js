// Selecting by ID
//const title = document.getElementById("title");
//console.log(title);
//console.log(title.textContent);

// Selecting by Class
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs);
console.log(paragraphs[0].textContent);

// Selecting by Tag Name
const listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[0].textContent);

// using querySelector
const firstParagraph = document.querySelector(".description");
console.log(firstParagraph);
console.log(firstParagraph.textContent);

// using querySelectorall
const allListItems = document.querySelectorAll("li");
console.log(allListItems);
allListItems.forEach((item) => console.log(item.textContent));

const tille1 = document.getElementById("title");
title.textContent = "Update DOM Title";
title.style.color = "white";
title.style.backgroundColor = "black";
title.classList.add("somthing");

const list=document.getElementById("list");
const newItem=document.createElement("li");
newItem.textContent="item 3";
list.appendChild(newItem);

const firstItem=document.querySelector("#list li");
list.insertBefore(newItem,firstItem);

const button = document.getElementById("btn");

function sayHello()  {
    let name = prompt("click me");
    console.log(name);

    if (name) {
        alert(`Hello ${name}`);
    }
    else{
        alert("no name entered");
    }
}


button.addEventListener("click",sayHello);

//button.removeEventListener("click",sayHello);

localStorage.setItem("username","tanuu");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
localStorage.clear();

sessionStorage.setItem("token","mustii");
console.log(sessionStorage.getItem("token"));
sessionStorage.removeItem("token");

const user= {name : "tannuu",age : "20"};
localStorage.setItem("user",JSON.stringify(user));

const storedUser=JHON.parse(localStorage.getItem("user"));
console.log(storedUser.name);
{
    let num=2;
    const num1=3;

    console.log(num);
    console.log(num1);
}
console.log(num);
console.log(num1);

