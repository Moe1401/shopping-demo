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


//API - link https://bestbuyapis.github.io/api-documentation/#response-format

//variables going to HTML tags
var cardBox = document.getElementById('.all-cards');

var shoppingCart = [];
var product;

//function start(){}
  //call other functions....

//function finalizePerchase(){
    //display thank you/continue shopping.

//};
fetch('https://fakestoreapi.com/products') //API for data
            .then(res=>res.json()) 
            .then(json=>console.log(json))



function generateCards(){
    var sectionContainer = document.createElement("section")
    sectionContainer.setAttribute("class", "all-cards")
    
  
}
generateCards();

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