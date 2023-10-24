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



//add article to the cart

const addBtn = document.querySelector(".add-btn");
const cartSectionProduct = document.querySelector(".cart-section-product");
const articleName = document.querySelector(".article-name");
const priceDiscounted = document.querySelector(".price-discounted");
const priceDiscountedNumber = document.querySelector(".price-discounted-number")



addBtn.addEventListener("click", addToCart);

function addToCart(){
    if(productCounter !== 0 ){
        console.log(productCounter);
        
        cartSectionProduct.innerHTML = "";
        cartSectionProduct.style.display = "flex";
        cartSectionProduct.style.textAlign = "left";
        cartSectionProduct.style.padding = "20px";
        cartSectionProduct.style.alignItems = "center";

        const productThumbnail = document.createElement("img");
        productThumbnail.src =  "images/image-product-1-thumbnail.jpg";
        productThumbnail.classList.add("product-thumbnail");

        const cartDescriptionProduct = document.createElement("div");

        const cartProductName = document.createElement("p");
        cartProductName.classList.add("cart-product-name");
        cartProductName.textContent = `${articleName.textContent}`;

        const cartProductPrice = document.createElement("p");
        cartProductPrice.classList.add("cart-product-price");
        const cartTotalPrice = document.createElement("span");
        cartTotalPrice.classList.add("cart-total-price");
        console.log(Number(priceDiscountedNumber.textContent) * productCounter);
        cartTotalPrice.textContent = Number(priceDiscountedNumber.textContent) * productCounter;

        cartProductPrice.textContent = `${priceDiscounted.textContent} x ${productCounter} $${cartTotalPrice.textContent}`;

        const trash = document.createElement("img");
        trash.src = "images/icon-delete.svg";
        trash.classList.add("trash");

        const checkoutBtnContainer = document.createElement("div");
        checkoutBtnContainer.classList.add("checkout-btn-container");

        const checkoutBtn = document.createElement("button");
        checkoutBtn.classList.add("checkout-btn");
        checkoutBtn.textContent = "Checkout";
        checkoutBtnContainer.appendChild(checkoutBtn)

        cartDescriptionProduct.appendChild(cartProductName);
        cartDescriptionProduct.appendChild(cartProductPrice);
        cartSectionProduct.appendChild(productThumbnail);
        cartSectionProduct.appendChild(cartDescriptionProduct);
        cartSectionProduct.appendChild(trash);
        cart.appendChild(checkoutBtnContainer);

    }
}