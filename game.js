let player = prompt('Quel est ton nom ?');
const rightPrice = Math.ceil(Math.random() * 100);

let playerPrice = parseInt(prompt('Choisi un nombre entre 1 et 100'));

console.log( rightPrice); 

while (playerPrice !== rightPrice) {
    if (playerPrice > rightPrice) {
        console.log('C\'est moins');
    } else {
        console.log("C'est plus")
    }
    playerPrice = parseInt(prompt('Choisi un nombre entre 1 et 100'));
}

console.log("Bravo " + player + ", tu as gagné !");