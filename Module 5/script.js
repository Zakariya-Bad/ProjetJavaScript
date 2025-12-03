/*************************************************
 * EXERCICE 4 - Fonctions de prix
 * Notions : function, paramètres, return, toFixed
 *************************************************/

/* --- Correction Exercice 1, 2 & 3 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

const TVA = 0.2;
let examplePriceHT = 20;
let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
let salesCount = 2;

/* --- Nouveautés Exercice 4 --- */

// Fonction qui calcule un prix TTC à partir d'un prix HT
function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

// Fonction qui formate un prix en "xx,xx €"
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

// Tests dans la console
console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
console.log(
  "Prix TTC pour 19,99€ HT :",
  formatPrice(calculatePriceTTC(19.99))
);

/* --- Rendu visuel Exo 4 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
}

console.log("Exercice 4 chargé ✅");

//Exo 5
// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)

// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)

// - Définir une fonction (createFeaturedProductCard()) qui :
//     • crée un conteneur pour la carte  
//       (indice : il existe une méthode du DOM pour créer un élément HTML)
//     • crée une image :
//         - lui donner la source de l'image
//       (indice : pensez aux propriétés des balises <img>)
//     • crée un titre et lui mettre le nom du produit  
//       (indice : une propriété permet d’écrire du texte dans un élément)
//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
//     • formate ce prix TTC avec la fonction prévue pour ça
//     • crée un paragraphe pour afficher le prix TTC
//     • crée un autre paragraphe pour la description
//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)

// - Appeler la fonction pour créer la carte

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)

let featuredProductName= "Tshirt incroyable";
let featuredProductPriceHT= 40.877;
let featuredProductDescription= "Tshirt incroyable à seulement 40 €!" ;
let featuredProductImage = "https://shop.lesjoiesducode.fr/cdn/shop/products/unisex-staple-t-shirt-black-heather-front-63913b993fb91.jpg?v=1670462383&width=1445";
// let featuredProductPriceTTC=  featuredProductPriceHT + featuredProductPriceHT * TVA;

const productList = document.getElementById("product-list");
function createFeaturedProductCard() {
    let article= document.createElement("article");
    article.classList.add("product-card"); // class pour css
    productList.appendChild(article);

    let image = document.createElement("img");
    image.src = featuredProductImage;
    image.alt = featuredProductName;
    article.appendChild(image);
    image.classList.add("product-image");

    let h3= document.createElement("h3");
    h3.textContent = featuredProductName;
    article.appendChild(h3);
    h3.classList.add("product-name");

    let priceTTC= calculatePriceTTC(featuredProductPriceHT);
    let formate= formatPrice(priceTTC);
    
    let prix= document.createElement("p");
    prix.textContent= formate;
    article.appendChild(prix);
    p.classList.add("product-price");

    let para= document.createElement("p");
    para.textContent= featuredProductDescription;
    article.appendChild(para);
    p.classList.add("product-desc");
    
    return article;
}
productList.innerHTML = "";

createFeaturedProductCard();
createFeaturedProductCard();