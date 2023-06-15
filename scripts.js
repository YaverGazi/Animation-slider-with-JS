// const continerslide=document.querySelector('.container-slide');
// const slideright=document.querySelector('.right-slide');
// const leftslide=document.querySelector('.left-slide');
// const downbutton=document.querySelector('.down-button');
// const upbutton=document.querySelector('.up-button');
// const slideslength=slideright.querySelectorAll('div').length;



// let activeslideIndex=0;

// leftslide.style.top=`-${(slideslength-1) * 100}vh`;
// //ES6
// upbutton.addEventListener('click',()=> changeSlide('up'));
// downbutton.addEventListener('click',()=> changeSlide('down'));
// //ES6
// const changeSlide=(direction)=>{
//     const sliderHight=continerslide.clientHeight;
// if(direction==='up'){
//     activeslideIndex++
//     if(activeslideIndex > slideslength - 1){
//         activeslideIndex=0
//     }
// }else if(direction==='down'){
//     activeslideIndex--
//     if(activeslideIndex < 0){
//         activeslideIndex=slideslength - 1
//     }
// }


// slideright.style.transform=`translateY(-${activeslideIndex * sliderHight}px)`
// leftslide.style.transform=`translateY(${activeslideIndex * sliderHight}px)`
// }

const container=document.querySelector('.container');
const rightslide=document.querySelector('.rigth-slide');
const leftslide=document.querySelector('.left-slide');
const upbutton=document.querySelector('.up-button');
const downbutton=document.querySelector('.down-button');
const slidelength=rightslide.querySelectorAll('div').length;

let SlideIndex=0;
// In the given code snippet, the expression (slidelength-1)*100 is used to calculate a value that represents a vertical distance
leftslide.style.top=`-${(slidelength-1)*100}vh`
upbutton.addEventListener('click',()=> changeSlide('up'));
downbutton.addEventListener('click',()=> changeSlide('down'));
//ES6
const changeSlide=(direction)=>{
    const sliderHight=continerslide.clientHeight;
if(direction==='up'){
    activeslideIndex++
    if(activeslideIndex > slidelength - 1){
        activeslideIndex=0
    }
}else if(direction==='down'){
    activeslideIndex--
    if(activeslideIndex < 0){
        activeslideIndex=slidelength - 1
    }
}


rightslide.style.transform=`translateY(-${activeslideIndex * sliderHight}px)`
leftslide.style.transform=`translateY(${activeslideIndex * sliderHight}px)`
}