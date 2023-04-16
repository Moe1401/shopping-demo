
//TODO:
//Dynamically generate products in the cart (form)
//Make a delete button for each product
//Make a checkout/finalize purchase button
//Make a return to homepage button?
//link this file to cart.html (and maybe index.html?)


var checkoutCloseEl;
var checkoutBtnEl = document.querySelector('.checkout-btn');
var homepageBtnEl;

var productsExtractedFromLocalStorage = localStorage.getItem("cart-products");




//Pulls the chosen products from local storage and dynamically generates them to a form
function generateCart() {

    for (var x = 0; x < productsExtractedFromLocalStorage.length; x++) {
        var productInCart = productsExtractedFromLocalStorage[x];
        
    }
}



//removes corresponding product from the cart and local storage when clicked
addEventListener("click", function(event) {
    event.target.id;
    localStorage.removeItem("cart-products");
})



//event listener for when the checkout/finalize purchase button is clicked
//Pulls up a form for shipping info???
checkoutBtnEl.addEventListener("click", function(event) {

})



//homepage button sends the user to the index.html page
homepageBtnEl.addEventListener("click", function(){
    // make href = index.html
})