var requestUrl = 'https://fakestoreapi.com/products';
var checkoutBtnEl = document.querySelector('.checkout-btn');
var checkoutCloseEl = document.querySelector('#card-form');
var products = document.querySelector('#products');
var addToCartBtn = document.querySelector('.btn');

var userInputLocal;
var cardBox = document.getElementById('.all-cards');

var allFetchedProducts = [];
var productList = [];
var shoppingCartLocal = [];
var product;

//function start(){}
  //call other functions....

//function finalizePerchase(){
    //display thank you/continue shopping.

//};
function getApi(requestUrl) {
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    allFetchedProducts = data;
    generateCards();

  });
}
function saveToLocalStorage(event){
//store pro info then trans to 2nd page.
event.preventDefault();
}

getApi(requestUrl);

function generateCards(){

    for(var i = 0; i < 6; i++){ 
      var productCard = document.createElement("section");
      productCard.setAttribute("class", "card col-12 col-md-4 col-lg-4 m-2 mx-auto");
      var detailContainer = document.createElement("article");
      detailContainer.setAttribute('class', 'card-body');
      var productTitle = document.createElement("h5");
      productTitle.setAttribute('class', 'card-title');
      var productImage = document.createElement("img");
      productImage.setAttribute('width', '256');
      productImage.setAttribute('height', '256');
      var productDescription = document.createElement("p");
      productDescription.setAttribute('class', 'card-text');
      var btn = document.createElement('a')
      btn.setAttribute('class', 'btn btn-primary');
      btn.setAttribute('id', 'add-to-cart');

      productTitle.textContent = 'product';
      productImage.setAttribute('src', '');
      productDescription.textContent = 'descr.';
      btn.textContent = 'add to cart';


      products.appendChild(productCard)
      
      productCard.appendChild(detailContainer)
      detailContainer.appendChild(productTitle)
      detailContainer.appendChild(productImage)
      detailContainer.appendChild(productDescription)
      detailContainer.appendChild(btn)
      
    }  
  
}



// ** TODO ** when we close form, get rid of values entered
// event listener to close the checkout form
checkoutCloseEl.addEventListener('click', function() {
  document.getElementById('card-form').style.display = "none";
});

// event listener to pull up form when clicking checkout button
checkoutBtnEl.addEventListener('click', function() {
  document.getElementById("card-form").style.display = "block";
 
});


//function weatherAPI(){
    //weather API info
//}


//goToCartBtn.eventlistener('click', saveToLocalStorage);  //sending to page 2
  
  //put into variables to local storage to pass to second page
  //sent to second HTML "href= URL or second page"
  
    //display cart items (from local storage)
    //display form for customer shipping/payment info 
    //call weatherAPI()  **possibly pass through info from form to select data from API;
    //call function to submitBtn() to display display "thank you for perchase" AND potential "home screen"/"continue shopping" button/link
    //finalizePerchase();



  
  addToCartBtn.eventlistener ('click', saveToLocalStorage); //single product to cart
    //are things in the cart?
    //push item into an array
    //add item to cart. (shoppingCart and product var.. maybe...)
    


  //} );