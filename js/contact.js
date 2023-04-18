window.onload = function(){
    declareEvents();
}
function declareEvents(){

    let id_form = document.querySelector("#id_form");
    id_form.addEventListener("submit",function(e){
        e.preventDefault();
        
    })
}