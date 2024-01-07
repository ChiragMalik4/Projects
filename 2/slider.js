const slidercontainer = document.querySelector('.slider-container')
const leftslide = document.querySelector('.left-slide')
const rightslide = document.querySelector('.right-slide')
const upbutton = document.querySelector('.up-button')
const downbutton = document.querySelector('.down-button')
const slidelength = rightslide.querySelectorAll('div').length
const pankh = document.querySelector('.pankh')


let currentslideindex = 0

leftslide.style.top = `-${(slidelength-1)*100}vh`

const changeslide = (direction) =>{
    const sliderheight = slidercontainer.clientHeight
    if(direction==='up'){
        currentslideindex++
        if(currentslideindex > slidelength-1){
            currentslideindex = 0
        }
    }else if(direction==='down'){
        currentslideindex--
        if(currentslideindex<0){
            currentslideindex = slidelength-1
        }
    }
    rightslide.style.transform = `translateY(-${currentslideindex*sliderheight}px)`
    leftslide.style.transform = `translateY(${currentslideindex*sliderheight}px)`
    pankh.style.transform = `rotate(-${currentslideindex*90}deg)`
    
}

upbutton.addEventListener('click', ()=>changeslide('up'))
downbutton.addEventListener('click', ()=>changeslide('down'))


