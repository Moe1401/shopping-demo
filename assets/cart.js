var checkoutCloseEl = document.querySelector('#close-btn');
var checkoutBtnEl = document.querySelector('.checkout-btn');
var cardFormEl = document.querySelector('#card-form')
var cartContainer = document.querySelector("#cart-rows");

//TODO:
//Make a checkout/finalize purchase button
//Make a return to homepage button?


var removeBtn;
var checkoutCloseEl;
var homepageBtnEl;
var productsExtractedFromLocalStorage = JSON.parse(localStorage.getItem("cart-products"));
    console.log(productsExtractedFromLocalStorage)

//Pulls the chosen products from local storage and dynamically generates them to a form
function generateCart() {
    
    for (var x = 0; x < productsExtractedFromLocalStorage.length; x++) {
        
        var productInCart = productsExtractedFromLocalStorage[x];
        var productCart= document.createElement("tr")
        var productImage= document.createElement("td")
        var icon= document.createElement("img")
        var productName= document.createElement("td")
        var productPrice= document.createElement("td")
        var productBtn= document.createElement("td")
        var remove= document.createElement("button")

        productCart.setAttribute("id", "product-row")
        icon.setAttribute("id", "product-image")
        icon.setAttribute ("src", productInCart.image)
        productName.setAttribute("id", "product-name")
        productPrice.setAttribute("id", "product-price")
        productBtn.setAttribute("id", "product-Btn")
        remove.setAttribute("id", "remove") //localStorage.removeItem()
        const title = productsExtractedFromLocalStorage[x].title

        productName.textContent= productInCart.title;
        productPrice.textContent= productInCart.price;
        remove.textContent= "remove"

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
            this.parentElement.parentElement.innerHTML = ""
            console.log(title)
            removeItemFromStorage(title);
        })   
    }
}

generateCart()





 //TODO ** when we close form, get rid of values entered
 //event listener to close the checkout form
 checkoutCloseEl.addEventListener('click', function() {
  document.getElementById('card-form').style.display = "none";
});

// event listener to pull up form when clicking checkout button
checkoutBtnEl.addEventListener('click', function() {
document.getElementById("card-form").style.display = "block"; 
});

// **DEBUGGING** cart products dont stay on page when navigating to homepage