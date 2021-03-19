

// Navbar animation
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = ()=> {
    if(window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(()=>{
            navbar.style.transform = 'translateY(0)';
            scrolled  = true;
        }, 200)
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}







// Add animation to services icons
let servIcons = document.querySelectorAll("#services .row .column");
// Adding event listeners
servIcons.forEach(function(icon){
    icon.addEventListener('mouseenter',()=>{
        let ic = icon.firstElementChild;
        ic.classList.add("animate__animated");
        ic.classList.add("animate__pulse");
    })
});

servIcons.forEach(function(icon){
    icon.addEventListener('mouseleave',()=>{
        let ic = icon.firstElementChild;
        ic.classList.remove("animate__animated");
        ic.classList.remove("animate__pulse");
    })
}); 

// // Add about animation
// let scrollpos = window.scrollY; // window scroll position
// let wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
// let element = document.querySelector("#about"); //element

// window.addEventListener('scroll', function(){ 
//     if(scrollpos > (element.offsetTop - wh)){
//         console.log("here dude");
//         element.classList.add("animate__animated");
//         element.classList.add("animate__heartBeat");
//     } else {
//         console.log("Im here");
//         element.classList.remove("animate__animated");
//         element.classList.remove("animate__heartBeat");
//     }
// });

let scrollpos = window.scrollY
  const about = document.querySelectorAll("#about");
  const el_to_effect = document.querySelectorAll('.heart_beat');
  console.log(about[0].offsetHeight);
  const elementHeight = about[0].offsetHeight + 500;

  const add_class_on_scroll = () => {
      console.log("here");
      for(let i = 0; i < el_to_effect.length; i++){
          
            
            el_to_effect[i].classList.add("animate__animated");
            el_to_effect[i].classList.add("animate__heartBeat");
            
            console.log(el_to_effect[i]);
          
      }
      
    }
  const remove_class_on_scroll = () => {
      console.log("here i am");
    for(let i = 0; i < el_to_effect.length; i++){
        el_to_effect[i].classList.remove("animate__animated");
        el_to_effect[i].classList.remove("animate__heartBeat");
        el_to_effect[i].classList.remove("text-primary");
    }
    }

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= elementHeight) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })