let list_one = document.querySelector('.list-one');

let list_one_func = () =>{
    let innerHeightNum = list_one.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.3 // 2
    if(innerHeightNum < constNumber){ // 3 
        list_one.style.opacity = "1"
        list_one.style.transform = "translateX(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    list_one_func();
})

//////////////////////////
let two = document.querySelector('.list-two');

let two_func = () =>{
    let innerHeightNum = two.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.3 // 2
    if(innerHeightNum < constNumber){ // 3 
        two.style.opacity = "1"
        two.style.transform = "translateX(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    two_func();
})