const bg = document.querySelector('.bg')
const load_text = document.querySelector('.load_text')

let load = 0

function increment(){
    load++

    if(load>99){
        clearInterval(caller)
    }
    load_text.innerText = `${load}%`
    let revblur = 40-(load*0.4)
    let revopacity = (load*0.1)
    bg.style.filter = `blur(${revblur}px)`
    load_text.style.opacity = `${revopacity}`
}



let caller = setInterval(increment, 30)





