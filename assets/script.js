var requestUrl = 'https://fakestoreapi.com/products';
var products = document.querySelector('#products');
var addToCartBtn;

var userInputLocal;
var cardBox = document.getElementById('.all-cards');

var allFetchedProducts = [];
var productList = [];
var shoppingCartLocal;
var product;

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


//TODO:
// polish checkout? ("Field is required" prompt does not appear)
// polish product cards (constrain card size, limit image size, keep button & description at the bottom...)


// Save ONE ITEM to local storage
function saveToLocalStorage(event){
//store prod info then trans to 2nd page.
 //are things in the cart? appending to array or push
    //push item into an array then,
    //add item to cart. (shoppingCart and product var.. maybe...)
  event.preventDefault();

  // upon clicking "Add to Cart", obtains ID of the product to search in allFetchedProducts catalogue
  var parentElement = event.target.parentElement.id;
  // console.log(parentElement)
  // console.log(allFetchedProducts)
  // searches allFetchedProducts for the chosen ID value; saves the corresponding product
  var productToBeSaved = allFetchedProducts.find(product => product.id == parentElement)

  // console.log(productToBeSaved)

  // obtains currently stored local cart, appends the new value, & sends it to the local cart
  shoppingCartLocal = JSON.parse(localStorage.getItem("cart-products"))
  if (shoppingCartLocal == null) {
    shoppingCartLocal = [];
  }
  shoppingCartLocal.push(productToBeSaved)
  saveNewArrayToLocal(shoppingCartLocal)
  // console.log(shoppingCartLocal)
}

function saveNewArrayToLocal(array) {
  localStorage.setItem('cart-products', JSON.stringify(array))
}

function removeItemFromStorage(itemName) {
  var cartChanger = JSON.parse(localStorage.getItem("cart-products"));
  const newArray = cartChanger.filter(item => {
    console.log(item.title, itemName)
    return item.title !== itemName
  });
  saveNewArrayToLocal(newArray)
}

// [1, 2, 3, 4]
// remove 3
// [1, 2, 4]

getApi(requestUrl);

function generateCards(){

    for(var i = 0; i < 6; i++){ 
      var productCard = document.createElement("section");      
      var detailContainer = document.createElement("article");     
      var productTitle = document.createElement("h5");     
      var productImage = document.createElement("img");      
      var productDescription = document.createElement("p");
      var productPrice = document.createElement("p");
      var btn = document.createElement('a');
      

      productCard.setAttribute("class", "card col-12 col-md-4 col-lg-4 m-2 mx-auto");
      detailContainer.setAttribute('class', 'card-body');
      productTitle.setAttribute('class', 'card-title mb-4');
      productImage.setAttribute('class', 'img-thumbnail');
      /* productImage.setAttribute('width', '256');
      productImage.setAttribute('height', '256'); */
      productDescription.setAttribute('class', 'card-text');
      productPrice.setAttribute('class', 'card-text')
      btn.setAttribute('class', 'btn btn-primary');
      btn.setAttribute('id', 'add-to-cart');

      
      
      productTitle.textContent = allFetchedProducts[i].title;
      productImage.setAttribute('src', allFetchedProducts[i].image);
      productDescription.textContent = allFetchedProducts[i].description;
      productPrice.textContent = priceFormatUSD(allFetchedProducts[i].price); // price text = price number formatted in USD
      detailContainer.setAttribute('id', allFetchedProducts[i].id)
      btn.textContent = 'Add to Cart';


      // appends product info 'i' times
      products.appendChild(productCard)
      productCard.appendChild(detailContainer)
      detailContainer.appendChild(productTitle)
      detailContainer.appendChild(productImage)
      detailContainer.appendChild(productDescription)
      detailContainer.appendChild(productPrice)
      detailContainer.appendChild(btn)
      btn.addEventListener('click', saveToLocalStorage); //single product to cart
    }
}

// converts product's price to USD format
function priceFormatUSD(price) {
  // Intl.NumberFormat() - method variable that gives currency formatting to numbers
  const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return usd.format(price); // formats the price to USD
}

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
