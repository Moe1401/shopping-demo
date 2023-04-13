var checkoutBtnEl = document.querySelector('.checkout-btn');

////nav bar
 //location
  //**assign to local storage for cart
 //name of site
 //cart (icon top right ish.. or link)
 
//body
 //products (look into using a bootstrap form )
  // button that adds product to cart.
  //description of product
  //**two rows of cards. 4-6 items (more if needed, not using a form)
//**store items in storage


//API -

//variables going to HTML tags
var requestUrl = 'https://fakestoreapi.com/products';
var cardBox = document.getElementById('.all-cards');


var allFetchedProducts = [];
var productList = [];
var shoppingCart = [];
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
    generateCards()

  });
}

getApi(requestUrl);

function generateCards(){
    var sectionContainer = document.createElement("section")
    sectionContainer.setAttribute("class", "all-cards")

    for(var i = 0; i < 6; i++){ 
      var productName = document.createElement()
    }
      
    
    
    /*for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');   creating tags for product name, price, image, discription
        var issueTitle = document.createElement('p');   to display dynamically.
        userName.textContent = data[i].user.login;    
        issueTitle.textContent = data[i].title;
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }*/


    // for the objects in the allFetchedProducts array
    // i < 6
    // set details about the product based on the object at allFetchedProducts[i]
    // productList.push(allFetchedProducts[i])
    
  
}


// event listener to pull up form when clicking checkout button
checkoutBtnEl.addEventListener('click', function() {
  document.getElementById("card-form").style.display = "block";
});


//function weatherAPI(){
    //weather API info
//}


//submitToCartBtn.eventlistener('click',  function(){ //sending to page 2
  //put into variables to local storage to pass to second page
  //sent to second HTML "href= URL or second page"
  //dynamically gen page(depending on HTML)
    //display cart items (from local storage)
    //display form for customer shipping/payment info 
    //call weatherAPI()  **possibly pass through info from form to select data from API;
    //call function to submitBtn() to display display "thank you for perchase" AND potential "home screen"/"continue shopping" button/link
    //finalizePerchase();



  //})
  //addToCartBtn.eventlistener ('click', function(){
    //are things in the cart?
    //push item into an array
    //add item to cart. (shoppingCart and product var.. maybe...)
    


  //} );