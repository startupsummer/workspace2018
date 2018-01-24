


// document.querySelector('.content').scrollTop = '0';
// window.onresize = function() {
//     document.querySelector('.content').scrollTop = '0';
// }
const sidebarElement = document.querySelector('.sidebar-menu-list__element');
sidebarElement.classList.add('sidebar-menu-list__element--focus');
sidebarElement.getElementsByTagName('i')[0].classList.add('i--active');
sidebarElement.getElementsByTagName('span')[0].classList.add('span--active');

const elements = document.querySelectorAll('.sidebar-menu-list__element');

elements.forEach((item) => {
    item.addEventListener('click', sidebarClickhandler);
});

const contentWrapper = document.querySelector('.content-list');
function sidebarClickhandler(event) {
    const classList = event.currentTarget.classList;
    elements.forEach((item) => {
        item.classList.remove('sidebar-menu-list__element--focus');
        item.getElementsByTagName('span')[0].classList.remove('span--active');
    });
    event.currentTarget.classList.add('sidebar-menu-list__element--focus');
    event.currentTarget.getElementsByTagName('i')[0].classList.add('i--active');
    event.currentTarget.getElementsByTagName('span')[0].classList.add('span--active');
    classList.forEach((item) => {
        switch(item) {
            case 'sidebar-menu-list__intro': 
                contentWrapper.scrollTop = '0';
                break;
            case 'sidebar-menu-list__portfolio': 
                contentWrapper.scrollTop = window.innerHeight * 1 + 1;
                break;
            case 'sidebar-menu-list__about': 
                contentWrapper.scrollTop = window.innerHeight * 2.2 + 1;
                break;  
            case 'sidebar-menu-list__contact': 
                contentWrapper.scrollTop = window.innerHeight * 4.4 + 1;
                break;      
            default:
                break;    
        }
    });
}


document.querySelector('.content-list').onscroll = function() {
    changeElementFocus(0, 0, 1)
    changeElementFocus(1, 1, 2.2)
    changeElementFocus(2, 2.2, 3)
    changeElementFocus(3, 3, 4.4)
};

let newState = 0;
let oldState;
function changeElementFocus (index, minCoeff, maxCoeff) {
    if (contentWrapper.scrollTop >= minCoeff * window.innerHeight &&
        contentWrapper.scrollTop < maxCoeff * window.innerHeight) {
        oldState = newState;
        newState = index;
        if(newState !== oldState) {
            elements.forEach((item) => {
                item.classList.remove('sidebar-menu-list__element--focus');
                item.getElementsByTagName('i')[0].classList.remove('i--active');
                item.getElementsByTagName('span')[0].classList.remove('span--active');
            });
            elements[index].classList.add('sidebar-menu-list__element--focus');
            elements[index].getElementsByTagName('i')[0].classList.add('i--active');
            elements[index].getElementsByTagName('span')[0].classList.add('span--active');
        }
    } 
}