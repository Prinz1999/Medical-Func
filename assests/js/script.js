const btnHamburger=document.querySelector('#btnHamburger');
console.log(btnHamburger);
btnHamburger.addEventListener('click', function(){
console.log('click btnHamburger');
    if(btnHamburger.classList.contains('open')){
     btnHamburger.classList.remove('open');
}
    else{
        btnHamburger.classList.add('open');
    }
});

// const btnHamburger = document.querySelector('#btnHamburger');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const fadeElems = document.querySelectorAll('.has-fade');

// btnHamburger.addEventListener('click', function(){
//   console.log('click btnHamburger');

//   if(header.classList.contains('open')){ // Close Hamburger Menu
//     body.classList.remove('noscroll');
//     header.classList.remove('open');    
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-in');
//       element.classList.add('fade-out');
//     });
    
//   }
//   else { // Open Hamburger Menu
//     body.classList.add('noscroll');
//     header.classList.add('open');
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-out');
//       element.classList.add('fade-in');
//     });

//   }  
// });



// console.log('Helloworld!')