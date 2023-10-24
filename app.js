// Open and close the menu

const hambugerIcon = document.querySelector(".menu-icon");
const crossIcon = document.querySelector(".cross-icon");
const menuContainer = document.querySelector(".menu-container");

hambugerIcon.addEventListener("click", openMenu);

function openMenu(){
    menuContainer.style.display = "block";
}

crossIcon.addEventListener("click", closeMenu);

function closeMenu(){
    menuContainer.style.display = "none";
}


//Open and close the cart

const cartIcon = document.querySelector(".cart-icon")
const cart = document.querySelector(".cart");
let cartOpen = false;

cartIcon.addEventListener("click", displayCart);

function displayCart(){
    if(cartOpen === false){
        cart.style.display = "block";
        cartOpen = true;
    }
    else{
        cart.style.display = "none";
        cartOpen = false;
    }
}

//caroussel

const previousIcon = document.querySelector(".previous-icon");
const nextIcon = document.querySelector(".next-icon");
const productImages = document.querySelectorAll(".product-img");

let index = 0;

productImages.forEach((img, i) =>{
    if(i !== index){
        img.style.display = "none";
    }
})

nextIcon.addEventListener("click", nextImage);

function nextImage(){
    productImages[index].style.display = "none";
        index = (index + 1) % productImages.length;
        productImages[index].style.display = "block"
}

previousIcon.addEventListener("click", previousImage);

function previousImage(){
    productImages[index].style.display = "none";
        index = (index - 1 + productImages.length) % productImages.length;
        productImages[index].style.display = "block";
}


//Counter Number of product

const minusIcon = document.querySelector(".minus-icon");
const plusIcon = document.querySelector(".plus-icon");
const productNumber = document.querySelector(".product-number");

let productCounter = 0;

minusIcon.addEventListener("click", minusNumber);

function minusNumber(){
    if(productCounter === 0){
        productNumber.textContent = 0;
    }
    else{
        productCounter -= 1;
        productNumber.textContent = productCounter; 
    }
}

plusIcon.addEventListener("click", plusNumber);

function plusNumber(){
    productCounter += 1;
    productNumber.textContent = productCounter;
}