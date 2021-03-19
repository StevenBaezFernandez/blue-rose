window.addEventListener("load", ()=>{
    const carousel_muestra1 = new Glider(document.querySelector(".muestra_carousel1"),{
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        dots: '.carousel_muestra_bodas_indicadores',
        arrows: {
            prev: '.carousel_muestra_bodas_anterior',
            next: '.carousel_muestra_bodas_siguiente'
        }
    })
});