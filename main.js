const companies = [
{name: "Company One", category: "Finance", start: 1981, end: 2003},
{name: "Company Two", category: "Retail", start: 1981, end: 2003},
{name: "Company Three", category: "Auto", start: 1981, end: 2003},
{name: "Company Fpur", category: "Retail", start: 1981, end: 2003},
{name: "Company Five", category: "Technology", start: 1981, end: 2003},
{name: "Company Six", category: "Finance", start: 1981, end: 2003},
{name: "Company Seven", category: "Auto", start: 1981, end: 2003},
{name: "Company Eight", category: "Technology", start: 1981, end: 2003},
{name: "Company Nine", category: "Retail", start: 1981, end: 2003},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(company => {
//     console.log(company[]);
// })
// const canDrink = [];
// for(let i =0; i <= ages.length; i++){
//     if(ages[i] >= 21 ) {
//         canDrink.push(ages[i])
//     }
// }

// console.log(canDrink);
//filter
const canDrink = ages.filter(age => {
    if(age >= 21){
        return age
    }
})

console.log(canDrink);
//map
//sort
//reduce