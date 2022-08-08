const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')
const imgContainerEl = document.querySelector('.image-container')
const imgsEl = document.querySelectorAll('img')

let currentImg = 1
let timeout;

const updateImg = () => {
    if (currentImg > imgsEl.length){
        currentImg = 1
    }
    if (currentImg <= 0){
        currentImg = imgsEl.length
    }
    imgContainerEl.style.transform = `translateX(-${(currentImg-1)*500}px)`

    timeout = setTimeout(()=>{
        currentImg++
        updateImg()
    }, 3000)
}

nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeout)
    updateImg()
})

prevEl.addEventListener('click', () => {
    currentImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()
