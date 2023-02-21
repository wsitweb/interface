const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const blocks = document.querySelectorAll('.blocks .block');
const block = document.querySelectorAll('.block');
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
