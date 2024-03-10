let leftbtn = document.querySelector("#leftbtn")
let rightbtn = document.querySelector("#rightbtn")
let carousel = document.querySelector(".carousel")

leftbtn.addEventListener("click",()=>{
    carousel.scrollLeft+=200
})
rightbtn.addEventListener("click",()=>{
    carousel.scrollLeft-=200
})

carousel.addEventListener("wheel",(event)=>{
    event.preventDefault()
    carousel.scrollLeft+=event.deltaY
})