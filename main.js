
// ByTagName
const name1 = document.getElementsByTagName(`h1`);
console.log(name1);

const name2 = document.getElementsByTagName(`h2`);
console.log(name2);

const name3 =document.getElementsByTagName(`h3`);
console.log(name3);


// ByClassName
const name4 =document.getElementsByClassName(`sss`);
console.log(name4);

const name5 =document.getElementsByClassName(`sss1`);
console.log(name5);


// ByIdName
const name6 =document.getElementById(`submit`);
console.log(name6);

const name7 = document.getElementById(`email`).getAttribute(`placeholder`);
console.log(name7);

const name8 = document.getElementById(`surname`).getAttribute(`placeholder`);
console.log(name8);

const nav3 =document.getElementById(`sss2`);
console.log(nav3);


                        // DOM-Selector

// querySelector
const firstTitle = document.querySelector('h3');
console.log(firstTitle);

const firstTitle1 =document.querySelector(`ul`);
console.log(firstTitle1);


// querySelectorAll
const allTitles = document.querySelectorAll('h2')
console.log(allTitles);
console.log(allTitles.length);
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}



                    //DOM-Navigate
const nav1 =document.getElementById(`email`).parentNode;
console.log(nav1);

const nav2 =document.getElementById(`surname`).previousSibling;
console.log(nav2);

const nav5 = document.getElementById("nav8").firstElementChild;
console.log(nav5);

const nav6 = document.getElementById("nav8").lastElementChild;
console.log(nav6);
 

