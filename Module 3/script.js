//Exo 1 
// - Créer une variable pour le nom de la boutique (shopName)
// - Créer une variable pour la ville (city)
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
// - Créer une variable pour le nombre de produits (productCount)
// - Créer une variable pour le slogan ( slogan)

// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)

// - Afficher le slogan dans la console

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)

let shopName= "Shopy";
let city= "Lyon";
let isOpen= false;
let productCount= 22;
let slogan= "Vive Shopy !";
console.log("Bienvenue sur " +shopName);
console.log(slogan);

if (isOpen==true) {
    console.log("ouverte");
    
}
else{
    console.log("fermé");
    
}

//Exo 2
// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})

// - Calculer la longueur du slogan

// - Créer une version en majuscules du slogan

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console


let message= "Bienvenue sur " +shopName +" " +"situé à "+ city;
let message2= `Bienvenue sur ${shopName} situé à ${city}`;
let sloganlong= slogan.length;
let sloganMaj= slogan.toUpperCase();
let sloganReplace= slogan.replace("Vive","C'est cool");
// console.log(message+" "+message2+" "+sloganlong+" "+sloganMaj+" "+sloganReplace);
console.log(message);
console.log(message2);
console.log(sloganlong);
console.log(sloganMaj);
console.log(sloganReplace);

// Exo3
// - Créer une variable contenant un prix HT d’exemple

// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)

// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)

// - Afficher le prix HT et le prix TTC dans la console

// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)

// - Simuler une nouvelle vente en augmentant ce compteur
//   (indice : utiliser l’opérateur pour ajouter 1)

// - Afficher la nouvelle valeur du compteur dans la console

let prixHT= 240;
const tauxTVA= 0.2;
let prixTTC= prixHT +(prixHT*tauxTVA);
console.log("Le prix HT est de "+ prixHT);
console.log("Le prix TTC est de "+prixTTC);

let salesCount = 0;
salesCount++;
salesCount++;

console.log("Nombre de ventes :", salesCount);

