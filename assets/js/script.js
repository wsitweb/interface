const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const blocks = document.querySelectorAll('.blocks .block');
const block = document.querySelectorAll('.block');
const toggle = document.querySelector('.sidebar .toggle');
const main = document.querySelector('main');
let numTwo = 0;

if(window.innerWidth <= 768){
      toggle.addEventListener('click', () => {
      
            if(sidebar.className === 'sidebar')
                  sidebar.classList.add('open-mobil'), main.style.filter = 'blur(2px)';
            else
                  sidebar.classList.remove('open-mobil'), main.style.filter = 'blur(0px)';

      });


}else{
      toggle.addEventListener('click', () => {
      
            if(sidebar.className === 'sidebar')
                  sidebar.classList.add('open');
            else
                  sidebar.classList.remove('open');

      });
}

var navItem;
navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
            navItems.forEach(navItem => {
                  navItem.classList.remove('active');
            });
            navItem.classList.add('active');
      });
});
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
