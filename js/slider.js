/* ==========================================================
                    LUXURY WOOL
                     SLIDER JS
========================================================== */


/*
    Imágenes que utilizará
    el slider principal.
*/


const images = [

    "images/fondo-luxury-1.jpeg",

    "images/fondo-luxury-2.jpeg",

    "images/fondo-luxury-3.jpeg"

];





/*
    Seleccionamos la imagen
    principal del HTML.
*/


const sliderImage = document.querySelector("#slider-image");





/*
    Índice de imagen actual.
*/


let currentImage = 0;







/*
    Cambio automático
    cada 5 segundos.
*/


function changeImage() {


    currentImage++;


    if (currentImage >= images.length) {


        currentImage = 0;


    }



    sliderImage.style.opacity = 0;



    setTimeout(() => {


        sliderImage.src = images[currentImage];


        sliderImage.style.opacity = 1;


    }, 500);



}






/*
    Ejecutamos el cambio
*/


setInterval(changeImage, 5000);