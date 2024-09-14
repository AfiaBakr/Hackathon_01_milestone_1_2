const buttontoggle = document.getElementById("hideshow") as HTMLButtonElement;
const get = document.getElementById("Software") as HTMLElement
buttontoggle.addEventListener("click", ()=>{
    if (get.style.display==="none"){
        get.style.display="block"
    }
    else (get.style.display="none")
})