const navigation = document.getElementsByTagName("nav")
const intro = document.getElementById("intronav")
const projects = document.getElementById("projectsnav")
const contact = document.getElementById("contactnav")
const arr = [null , intro , projects , contact]
const firstProject = document.getElementById("first")
const end = document.getElementById("end")
let body = document.body
let html = document.documentElement
let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
let navState = 2;
let mobile = false;
updateNavState(1)

window.addEventListener("scroll", ()=>{
    if(window.scrollY < 600){
        updateNavState(1)
    }else if(window.scrollY > height - window.innerHeight - end.clientHeight){
        updateNavState(3)      
    }else{
        updateNavState(2)
    }
    
})
function updateNavState(stateUpdate){
    if(stateUpdate !== navState){
        arr[navState].className = ""
        arr[stateUpdate].className= "accent-nav"
        navState = stateUpdate
    }
}

function handleNavClick(event){
    let obj = event.target.id
    
    switch(obj){
        case "intronav":
            if(window.scrollY < 10){
                
                document.location.reload()
                
            }else{
                
                window.scrollTo(0,0)
            }
            break


        case "projectsnav":
            firstProject.scrollIntoView()
            console.log(firstProject)
            break


        case "contactnav":
            end.scrollIntoView()
            break


        default:
            alert("something went wrong")
    }
}


window.addEventListener("resize" , () =>{
     height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
})