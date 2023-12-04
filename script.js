let add = document.getElementById("add")
let overlay = document.getElementById("overlay")
let popup = document.getElementById("popup")
add.addEventListener("click",() => {
    overlay.style.display = "block"
    popup.style.display = "block"
})

let del = document.getElementById("delete")
del.addEventListener("click",()=> {
    overlay.style.display = "none"
    popup.style.display = "none"
})

let addb = document.getElementById("addb")
let bookt = document.getElementById("bookt")
let auth = document.getElementById("auth")
let tarea = document.getElementById("tarea")
let content = document.querySelector(".content")
let container = document.getElementById("container")

addb.addEventListener("click", () => {
    let div = document.createElement("div")
    div.setAttribute("class","content")
    div.innerHTML = `<h2>${bookt.value}</h2>
            <h3>${auth.value}</h3>
            <p>${tarea.value}</p>
            <button id="del" onclick="erase(event)">Delete</button>`
    overlay.style.display = "none"
    popup.style.display = "none"
    container.appendChild(div)
})


function erase(event){
    event.target.parentElement.remove()
}