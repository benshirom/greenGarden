//Get the button:
mybutton = document.getElementById("myBtn");

let arrowUp='<i class="fa fa-arrow-up" aria-hidden="true"></i>';
let arrowDown='<i class="fa fa-arrow-down" aria-hidden="true"></i>';
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

let centerPage =(document.documentElement.scrollHeight)/3;
  //up
  if (document.body.scrollTop > centerPage || document.documentElement.scrollTop > centerPage ) {
    mybutton.style.display = "block";
    document.getElementById("myBtn").innerHTML =arrowUp;

    
  }
    //down

  else if((document.body.scrollTop < centerPage || document.documentElement.scrollTop < centerPage)){
    mybutton.style.display = "block";
    document.getElementById("myBtn").innerHTML =arrowDown;
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //up
  if(document.querySelector("#myBtn").innerHTML==arrowUp){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
  }
  //down
  if(document.querySelector("#myBtn").innerHTML==arrowDown){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = document.documentElement.scrollHeight; // For Chrome, Firefox, IE and Opera
    
  }
}