// variables for the checkout buttons (close, Checkout, Submit)
var checkoutCloseEl = document.querySelector('#close-btn');
var checkoutBtnEl = document.querySelector('.checkout-btn');
var checkoutSubmit = document.querySelector("button[type='submit']");

// container for products in cart
var cartContainer = document.querySelector("#cart-rows");

// variables for checkout inputs
var firstName = document.querySelector('#validationDefault01');
var lastName = document.querySelector('#validationDefault02');
var username = document.querySelector('#validationDefaultUsername');
var city = document.querySelector('#validationDefault03');
var state = document.querySelector('#validationDefault04');
var zip = document.querySelector('#validationDefault05');
var checkAgreement = document.querySelector('#invalidCheck2');

var formArray = [firstName, lastName, username, city, state, zip];

var removeBtn;
var checkoutCloseEl;
var homepageBtnEl;
var productsExtractedFromLocalStorage = JSON.parse(localStorage.getItem("cart-products"));

//Pulls the chosen products from local storage and dynamically generates them to a form
function generateCart() {
    if (productsExtractedFromLocalStorage == null) {
        return;
    }
    for (var x = 0; x < productsExtractedFromLocalStorage.length; x++) {
        // creates cart elements
        var productInCart = productsExtractedFromLocalStorage[x];
        var productCart= document.createElement("tr")
        var productImage= document.createElement("td")
        var icon= document.createElement("img")
        var productName= document.createElement("td")
        var productPrice= document.createElement("td")
        var productBtn= document.createElement("td")
        var remove= document.createElement("button")

        // sets cart elements
        icon.setAttribute("id", "product-image")
        icon.setAttribute ("src", productInCart.image)

        const title = productsExtractedFromLocalStorage[x].title;

        productName.textContent = productInCart.title;
        productPrice.textContent = priceFormatUSD(productInCart.price); // priceFormatUSD in script.js
        remove.textContent = "Remove";

        // appends product info to cart
        cartContainer.appendChild(productCart)
        productCart.appendChild(productImage)
        productImage.appendChild(icon)
        productCart.appendChild(productName)
        productCart.appendChild(productPrice)
        productCart.appendChild(productBtn)
        productBtn.appendChild(remove)
        
        //removes corresponding product from the cart and local storage when clicked
        remove.addEventListener("click", function(event) {
            event.preventDefault();
            this.parentElement.parentElement.innerHTML = "";
            removeItemFromStorage(title);
        })   
    }
}

generateCart();


// checks if form has been fully filled out
function formCheck() {
    if (firstName.value === "" || lastName.value === "" || username.value === "" || city.value === "" || state.value === "" || zip.value === "" || checkAgreement.checked === false) {  
        return false;
    } else {
        return true;
    }
}

// appends "thank you" message beneath cart
function thankYouMessage() {
    var thankYouContainer = document.createElement("div");
    var message = document.createElement("h2");

    var pawIcon = document.createElement('i');
    var pawIcon2 = document.createElement('i');

    // new tech via Font Awesome
    // adds animated paw icons
    pawIcon.setAttribute('class', "fa-solid fa-paw fa-bounce fa-2xl");
    pawIcon2.setAttribute('class', "fa-solid fa-paw fa-bounce fa-2xl");
    pawIcon.setAttribute('style', 'margin: 4px; margin-top: 24px; margin-bottom: 60px')
    pawIcon2.setAttribute('style', 'margin: 4px; margin-top: 24px; margin-bottom: 60px')

    thankYouContainer.className = "text-center";
    message.textContent = "Thank you for shopping!";

    document.body.appendChild(thankYouContainer);
    thankYouContainer.appendChild(message);

    thankYouContainer.appendChild(pawIcon);
    thankYouContainer.appendChild(pawIcon2);
}

// after 3 seconds, automatically return to homepage
function returnToHomepage() {
    var seconds = 7;

    var timerInterval = setInterval(function() {
        seconds--;

        if(seconds === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            document.location.href = "./index.html";
        }
    }, 1000);
}

 //event listener to close the checkout form
checkoutCloseEl.addEventListener('click', function() {
    document.getElementById('card-form').style.display = "none";
});

// event listener to pull up form when clicking checkout button
checkoutBtnEl.addEventListener('click', function() {
    document.getElementById("card-form").style.display = "block"; 
});

// once form is filled out, removes the local cart's contents, sends a "Thank You!" message, and redirects to the home page after 3 seconds
checkoutSubmit.addEventListener('click', function(event) {
    event.preventDefault();

    if (formCheck() === true) {
        localStorage.removeItem("cart-products");
        document.getElementById('card-form').style.display = "none";
        thankYouMessage();
        returnToHomepage();
    }
});