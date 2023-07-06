let burger = document.querySelector(".burger")
let ul1 = document.querySelector(".headerName")
let menu = document.querySelector(".menu")
let ul2 = document.querySelector(".headerUl2")
let close = document.querySelector(".close")
let lists = document.querySelectorAll(".headerUl2 li")

function func(){
    let ok = true ;
    burger.addEventListener("click" , function(){
        ok = !ok
        menu.style.display = "flex"
        ul2.classList.toggle("show")
    
        if(ok === false){
            burger.setAttribute("src","images.png");
            ul1.style.borderBottom = "1px solid red" ;
        }if(ok === true){
            burger.setAttribute("src","hamburger-icon-white-16-removebg-preview (1).png")
            ul1.style.borderBottom = "none" ;
        }
    })
    
    
    for (let i = 0; i < lists.length; i++) {
        const element = lists[i];
        element.addEventListener("click",function(){
            ul2.classList.toggle("show");
            burger.setAttribute("src","hamburger-icon-white-16-removebg-preview (1).png")
        })
    }
}
func()