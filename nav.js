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
let width = body.clientWidth
console.log(width)
//navstate[highlighted , showOnlyFirstLetter]
let showOnlyFirstLetter = false;
let navState = 2;
updateHighlightState(1)

window.addEventListener("scroll", ()=>{
    updateNavAppearance()
    if(window.scrollY < 600){
        updateHighlightState(1)
    }else if(window.scrollY > height - window.innerHeight - end.clientHeight){
        updateHighlightState(3)      
    }else{
        updateHighlightState(2)
    }
    
})
function updateHighlightState(highlight){
    if(highlight !== navState){
        arr[navState].className = ""
        arr[highlight].className= "accent-nav"
        navState = highlight
    }
}

function handleNavClick(event){
    let obj = event.target.tagName === "SPAN"? event.target.parentElement.id : event.target.id
    
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


const spans = document.getElementsByClassName("nav-span")
function updateNavAppearance(){
    if(!showOnlyFirstLetter && (width < 874) && (scrollY > 10)){
        showOnlyFirstLetter = true
        for(span of spans){
            span.style.display = "none"
            document.documentElement.style.setProperty('--mobile-nav-align' , 'center')
        }
    }else{
        if(showOnlyFirstLetter && (width > 874) || (scrollY < 10)){
            for(span of spans){
                span.style.display = ""
            }
            document.documentElement.style.setProperty('--mobile-nav-align' , 'right')
            showOnlyFirstLetter = false
        }
        
    }
}



window.addEventListener("resize" , () =>{
    width = body.clientWidth
     height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
     updateNavAppearance()
})