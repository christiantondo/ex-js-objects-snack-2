////////////////////////////////////////////////////////////
// Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name ); // ?
////////////////////////////////////////////////////////////

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Per entrambi i console.log verrà stampato il nuovo nome assegnato: "Double Cheese Burger"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Soltanto 1

////////////////////////////////////////////////////////////
// Code Question 2

// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?
////////////////////////////////////////////////////////////

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Viene stampata 2 volte la stringa all'indice 0, in quanto la stringa 29 va a modificare l'array originale. Quindi "Salad" x2.

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 3 in totale, anche se l'array ingredients all'interno di secondBurger fa riferimento all'array originale.

////////////////////////////////////////////////////////////
// Code Question 3

// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);
////////////////////////////////////////////////////////////

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Totale 9, 6 nuovi.