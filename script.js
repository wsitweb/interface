// debugger
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const blocks = document.querySelectorAll('.blocks .block');
const item = document.querySelectorAll('.gallery .gallery-item');
const toggle = document.querySelector('.sidebar .toggle');
let numTwo = 0;

toggle.addEventListener('click', () => {
     
      if(sidebar.className === 'sidebar')
            sidebar.classList.add('open'),  opacity();
      else
            sidebar.classList.remove('open'), opacity();

});
var navItem;
navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
            navItems.forEach(navItem => {
                  navItem.classList.remove('active');
            });
            navItem.classList.add('active');
      });
});
function opacity(){
      function notSee(){
            item.forEach(item => {
                  item.style.scale = 0;
            });
      }
      function seen(){
            item.forEach(item => {
                  item.style.scale = 1;
            });
      }
      notSee();
      setTimeout(seen, 500);
}
function switchTab(num){
            if(numTwo === num){
                  return;
            }
            if(numTwo >= 0){
                  setTimeout(function (){
                        blocks[numTwo].className = 'block';
                        blocks[num].className = 'block active';
                        numTwo = num;
                  }, 400)
            }
}
