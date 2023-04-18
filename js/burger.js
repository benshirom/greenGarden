// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו
let isNavOpen = false;


function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click",function(){
    if(!isNavOpen){
      // קודם דואג שיוצג
      nav_open.style.display = "block";
      setTimeout(function(){
        // מכיוון שאחנו רוצים להוסיף לו קלאס
        // ושזה יתבצע באנימציה נצטרך כמה מאיות שניה
        // אחרי התצוגה להוסיף את הקלאס
        nav_open.classList.add("nav_open");
      },100);
      isNavOpen = true;
    }
    else{
      // מוריד קלאס מסי אס אס 
      nav_open.classList.remove("nav_open");
      setTimeout(function(){
        // ורק לאחר זמן האנימציה אחרי שהיא מסתיימת אנחנו 
        // נעלים את התגית עצמה לחלוטין כדי 
        // שלא נוכל ללחוץ עליה
        nav_open.style.display = "none";

      },800)
      isNavOpen = false;
    }
    //
    // (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
    // if(nav_open.style.display != "block"){
    //   nav_open.style.display = "block";
    // }
    // else{
    //   nav_open.style.display = "none";
    // }
  })
}

declareBtns();



