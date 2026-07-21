


document.addEventListener("DOMContentLoaded", () => {



    console.log("Luxury Wool cargado correctamente");



});






function changeImage(){


image.style.opacity="0";



setTimeout(()=>{


image.src=images[current];

image.style.opacity="1";


},500);



}







next.addEventListener("click",()=>{


current++;


if(current>=images.length){

current=0;

}


changeImage();


});








prev.addEventListener("click",()=>{


current--;


if(current<0){

current=images.length-1;

}


changeImage();


});




