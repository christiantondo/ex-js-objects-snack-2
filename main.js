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

////////////////////////////////////////////////////////////
// Code Question 4

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

// const chefCopy = { ...chef };
// const restaurantCopy = structuredClone(restaurant);

// console.log(chefCopy);
// console.log(restaurantCopy);
////////////////////////////////////////////////////////////

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Il metodo migliore per copiare l'oggetto chef è lo spread operator: {...chef} in quanto è in grado di copiare le funzioni.

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// Il metodo migliore per copiare l'oggetto restaurant è lo structuredClone in quanto può effettuare una deep copy e può copiare oggetti annidati e complessi.

////////////////////////////////////////////////////////////
// Code Question 5 (Bonus)

const hamburger = {
	name: "Cheese Burger",
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?
////////////////////////////////////////////////////////////

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Verranno stampati due volte Chef Hyur e Hyur's II.

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// In memoria in totale ci sono 5 oggetti.