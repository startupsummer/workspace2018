const sidebar = document.querySelector('.sidebar'); 
const toggleButton = document.querySelector('.toggle-button');
const contentElements = document.querySelectorAll('.content-list__element');
const arrowIcon = document.querySelector('.toggle-button__icon');
toggleButton.addEventListener('click', toggleHandler);

function toggleHandler() {
    if(sidebar.classList.contains('sidebar--flow-right')) {
        sidebar.classList.add('sidebar--flow-left');
        sidebar.classList.remove('sidebar--flow-right');
        toggleButton.classList.add('toggle-button--flow-left');
        toggleButton.classList.remove('toggle-button--flow-right');
        contentElements.forEach((item) => {
            item.classList.add('content-list__element--flow-left');
            item.classList.remove('content-list__element--flow-right');
        });
        arrowIcon.classList.add('toggle-button__icon--rotate-right');
        arrowIcon.classList.remove('toggle-button__icon--rotate-left');
    } else {
        sidebar.classList.add('sidebar--flow-right');
        sidebar.classList.remove('sidebar--flow-left');
        toggleButton.classList.add('toggle-button--flow-right');
        toggleButton.classList.remove('toggle-button--flow-left');
        contentElements.forEach((item) => {
            item.classList.add('content-list__element--flow-right');
            item.classList.remove('content-list__element--flow-left');
        });
        arrowIcon.classList.add('toggle-button__icon--rotate-left');
        arrowIcon.classList.remove('toggle-button__icon--rotate-right');
    }
}

const sidebarElement = document.querySelector('.menu-list__element');
sidebarElement.classList.add('menu-list__element--focus');
sidebarElement.getElementsByTagName('i')[0].classList.add('i--active');
sidebarElement.getElementsByTagName('span')[0].classList.add('span--active');

const elements = document.querySelectorAll('.menu-list__element');

elements.forEach((item) => {
    item.addEventListener('click', sidebarClickhandler);
});

const contentWrapper = document.querySelector('.content-list');
function sidebarClickhandler(event) {
    const classList = event.currentTarget.classList;
    elements.forEach((item) => {
        item.classList.remove('menu-list__element--focus');
        item.getElementsByTagName('span')[0].classList.remove('span--active');
    });
    event.currentTarget.classList.add('menu-list__element--focus');
    event.currentTarget.getElementsByTagName('i')[0].classList.add('i--active');
    event.currentTarget.getElementsByTagName('span')[0].classList.add('span--active');
    classList.forEach((item) => {
        switch(item) {
            case 'menu-list__intro': 
                contentWrapper.scrollTop = '0';
                break;
            case 'menu-list__portfolio': 
                contentWrapper.scrollTop = window.innerHeight * 1 + 1;
                break;
            case 'menu-list__about': 
                contentWrapper.scrollTop = window.innerHeight * 2.2 + 1;
                break;  
            case 'menu-list__contact': 
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
                item.classList.remove('menu-list__element--focus');
                item.getElementsByTagName('i')[0].classList.remove('i--active');
                item.getElementsByTagName('span')[0].classList.remove('span--active');
            });
            elements[index].classList.add('menu-list__element--focus');
            elements[index].getElementsByTagName('i')[0].classList.add('i--active');
            elements[index].getElementsByTagName('span')[0].classList.add('span--active');
        }
    } 
}
