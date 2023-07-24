$(function(){

   

    let sec = 0;
    $(".btn-1").click(function(){
        $(".sss-6-1").eq(sec).toggleClass('active')
    })
    

    let vdoUrl = [
        './images/video_origin/pexels-michal-marek-1409899-3840x2160-25fps.mp4',
        './images/video_origin/pexels-ruvim-miksanskiy-2231485-3840x2160-24fps.mp4',
        './images/video_origin/pexels-ruvim-miksanskiy-1437396-3840x2160-24fps.mp4'
    ]
    $(".video").click(function(){
        let idx = $(this).index();        
        $(".s4-3-1").toggleClass('active')
        $('.s401').hide().eq(idx).show();
        
        $('.s401').eq(idx).find('video')
        .attr('src',vdoUrl[idx])
        .on('canplay',function(){
            $(this).get(0).play();
        })
        
        
        
    })

})

