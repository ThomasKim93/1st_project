$(function(){

    let pos = {y:0,y2:0,status:true};

    window.addEventListener('scroll',function(){ 
        pos.y = window.pageYOffset;
        // 삼항연산자
        pos.status = (pos.y > pos.y2) ? true : false;
        pos.y2 = pos.y;


        if(pos.status){ header.classList.add('active')  }
        else{ header.classList.remove('active')  }
    })


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 400,
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,    
          
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });



    const elMenu = document.querySelector('.menu'),
        elS3Nav = document.querySelector('.h-2');

    elMenu.onclick = function(){
        if(elS3Nav.classList.contains('active')){
            elS3Nav.classList.remove('active'),
            $('body').css("overflow-y","scroll")
        } else {
            elS3Nav.classList.add('active'),
            $('body').css("overflow-y","hidden")
        }
    }



    

//  https://github.com/jschr/textillate

    let observer = new IntersectionObserver(function(entries){
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                $(entry.target).textillate({ in: { effect: 'fadeInUp',  delayScale: 0.5, delay: 10, } });
            }
        })
    });


    $('.txt-ani').each(function(i,v){
        observer.observe(v);    
    })


})