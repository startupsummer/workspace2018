


document.querySelector('.content-wrapper').scrollTop = '0';
document.querySelector('.sidebar-element').classList.add('sidebar-element-focus');
document.querySelector('.sidebar-element').getElementsByTagName('i')[0].classList.add('i-active');
document.querySelector('.sidebar-element').getElementsByTagName('span')[0].classList.add('span-active');

const elements = document.querySelectorAll('.sidebar-element');

elements.forEach((item) => {
    item.addEventListener('click', sidebarClickhandler);
});

const contentWrapper = document.querySelector('.content-wrapper');
function sidebarClickhandler(event) {
    const classList = event.currentTarget.classList;
    elements.forEach((item) => {
        item.classList.remove('sidebar-element-focus');
        item.getElementsByTagName('span')[0].classList.remove('span-active');
    });
    event.currentTarget.classList.add('sidebar-element-focus');
    event.currentTarget.getElementsByTagName('i')[0].classList.add('i-active');
    event.currentTarget.getElementsByTagName('span')[0].classList.add('span-active');
    classList.forEach((item) => {
        switch(item) {
            case 'sidebar-intro': 
                contentWrapper.scrollTop = '0';
                break;
            case 'sidebar-portfolio': 
                contentWrapper.scrollTop = window.innerHeight * 1 + 1;
                break;
            case 'sidebar-about': 
                contentWrapper.scrollTop = window.innerHeight * 2.4 + 1;
                break;  
            case 'sidebar-contact': 
                contentWrapper.scrollTop = window.innerHeight * 4.4 + 1;
                break;      
            default:
                break;    
        }
    });
}


document.querySelector('.content-wrapper').onscroll = function() {
    changeElementFocus(0, 0, 1)
    changeElementFocus(1, 1, 2.4)
    changeElementFocus(2, 2.4, 3.4)
    changeElementFocus(3, 3.4, 4.4)
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
                item.classList.remove('sidebar-element-focus');
                item.getElementsByTagName('i')[0].classList.remove('i-active');
            });
            elements[index].classList.add('sidebar-element-focus');
            elements[index].getElementsByTagName('i')[0].classList.add('i-active');
        }
    } 
}