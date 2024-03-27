var tl = gsap.timeline({
    repeat: -1
    /*-1 means to repeat infinte*/ 
});




tl
.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    
    stagger:2
},'a')

.to(".text h1",{
    
    ease:Expo.easeInOut,
    stagger:2,
    top : 0,
    
    
},'a')

.to(".text h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top : "-100%",
    
    
},'a')

/*The point of 'a' is that without 'a', images will scroll
first. Then only after the 3rd image is up, the text will 
start changing. It is not simultaneous. So by giving
the FLAG 'a', any part with 'a'  will all work together */
