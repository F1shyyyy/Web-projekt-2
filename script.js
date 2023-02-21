function addKoment(koment){
    let komentareDiv = document.getElementById("komentare")
    let komentarDiv = document.createElement("div")
    komentarDiv.classList.add("komentar")
    let kominfoDiv = document.createElement("div")
    kominfoDiv.classList.add("kominfo")
    let avatar = document.createElement("img")
    avatar.src = "avatar.png"
    let nameEL = document.createElement("p")
    nameEL.innerHTML = "Anonymous"
    kominfoDiv.appendChild(avatar)
    kominfoDiv.appendChild(nameEL)
    komentarDiv.appendChild(kominfoDiv)
    let komtextDiv = document.createElement("div")
    komtextDiv.classList.add("komtext")
    let textEL = document.createElement("p")
    textEL.innerHTML = koment
    komtextDiv.appendChild(textEL)
    komentarDiv.appendChild(komtextDiv)
    komentareDiv.appendChild(komentarDiv)
}
function submit(){
   let input = document.getElementById("kominput").value
   input = input.trim()
   if(input == ""){
    return
   }
   addKoment(input)
   document.getElementById("kominput").value = ""
}
