
$(window).scroll(function() {
    if($(this).scrollTop()>126){
     $('#header .navbar').addClass('active');
     $('#header .navbar .nav-item .nav-link').addClass('active');
     $('#header .navbar .nav-item .nav-link').addClass('otheractive');
    }
    else{
        $('#header .navbar').removeClass('active');
        $('#header .navbar .nav-item .nav-link').removeClass('active');
    }
});
$("#header .navbar").on("mouseleave",function() {
    $("#header .navbar .nav-item").removeClass("item-hover");
})
$("#header .navbar .nav-item").on("mouseover",function(){
$("#header .navbar .nav-item").addClass("item-hover");
$(this).removeClass("item-hover");
})
document.querySelector('.contact-button').addEventListener('click',function() {
   document.querySelector('#contact').classList.add('active')   
   document.querySelector('body').classList.add('active');
})
document.querySelector('#close-contact').addEventListener('click',function() {
   document.querySelector('body').classList.remove('active')    
   document.querySelector('.contact-section').classList.remove('active')    
 })
document.querySelector('.allteam').addEventListener('click',function(){
    document.querySelectorAll('.resp-part').forEach(ele=>{
        document.querySelector('.allteam').classList.add('active')
        ele.style.display="block";
    })
})
document.querySelector('.allproduct').addEventListener('click',function() {
    document.querySelectorAll('.resp-blog').forEach(ele=>{
        document.querySelector('.allproduct').classList.add('active')
        ele.style.display="block";
    })
})
