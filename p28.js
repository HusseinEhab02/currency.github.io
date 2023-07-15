let le = document.querySelector(".le")
let euro = document.querySelector(".euro")
let dollar = document.querySelector(".dollar")
let btnel = document.querySelector(".btn")
let clearbtn = document.querySelector(".clear")
let inpbox = document.querySelector(".inputbox")
let msg = document.querySelector(".msg")


btnel.addEventListener("click" , ()=>{
    if(le.value){
        euro.value = le.value / 33
        dollar.value = le.value /30
    }
    if(euro.value){
        le.value=euro.value*33
        dollar.value = euro.value*1.10
    }
    if(dollar.value){
        le.value= dollar.value*30
        euro.value= dollar.value/1.10
    }   
    else{
        text = document.createElement("div")
        txt = document.createTextNode("please enter a value")
        text.classList.add("text")
        text.appendChild(txt)
        msg.appendChild(text)
    }
}
)
clearbtn.addEventListener("click" , ()=>{
    le.value=0
    euro.value=0
    dollar.value=0
})
// 
