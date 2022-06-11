// Chick Icons
let check = document.querySelector('.check-icons');

let check_func = () =>{
    let innerHeightNum = check.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.3 // 2
    if(innerHeightNum < constNumber){ // 3 
        check.style.opacity = "1"
        check.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    check_func();
})


// DEMO PAGES
let demoOne = document.querySelector('.demos-pages-section-two');

let demo_two = () =>{
    let innerHeightNum = demoOne.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoOne.style.opacity = "1"
        demoOne.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_two();
})
///////////////////////
let demoTwo = document.querySelector('.demos-pages-section-one');

let demo_func = () =>{
    let innerHeightNum = demoTwo.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoTwo.style.opacity = "1"
        demoTwo.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_func();
})

/////////////////////////////
let demoThree = document.querySelector('.demos-pages-section-three');

let demo_three = () =>{
    let innerHeightNum = demoThree.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoThree.style.opacity = "1"
        demoThree.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_three();
})

//////////////////
let demoFour = document.querySelector('.demos-pages-section-four');

let demo_four = () =>{
    let innerHeightNum = demoFour.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoFour.style.opacity = "1"
        demoFour.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_four();
})


///////////////////////
let demoFive = document.querySelector('.demos-pages-section-five');

let demo_five = () =>{
    let innerHeightNum = demoFive.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoFive.style.opacity = "1"
        demoFive.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_five();
})

//////////////////////////////
let demoSex = document.querySelector('.demos-pages-section-sex');

let demo_sex = () =>{
    let innerHeightNum = demoSex.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoSex.style.opacity = "1"
        demoSex.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_sex();
})

//////////////////////////
let demoSeven = document.querySelector('.demos-pages-section-seven');

let demo_seven = () =>{
    let innerHeightNum = demoSeven.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoSeven.style.opacity = "1"
        demoSeven.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_seven();
})

////////////////////////////////
let demoEight = document.querySelector('.demos-pages-section-eight');

let demo_eight = () =>{
    let innerHeightNum = demoEight.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoEight.style.opacity = "1"
        demoEight.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_eight();
})

/////////////////////////
let demoNine = document.querySelector('.demos-pages-section-nine');

let demo_nine = () =>{
    let innerHeightNum = demoNine.getBoundingClientRect().top // 1
    let constNumber = window.innerHeight / 1.4 // 2
    console.log(innerHeightNum)
    if(innerHeightNum < constNumber){ // 3 
        demoNine.style.opacity = "1"
        demoNine.style.transform = "translate(0px)"
        
    }
}

window.addEventListener('scroll', ()=>{
    demo_nine();
})



// scroll to top
let btn = document.getElementById("btn-scroll");

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
};

btn.addEventListener("click", function(){
    window.scrollTo({
        top : 0,
        left :0,
        behavior : "smooth"
    })
})