


document.querySelector('.content-wrapper').scrollTop = '0';
document.querySelector('.sidebar-element').classList.add('sidebar-element-focus');
let iconClassList = document.querySelector('.sidebar-element').getElementsByTagName('i')[0].classList;
iconClassList.add('i-active');
const elements = document.querySelectorAll('.sidebar-element');

elements.forEach((item) => {
    item.addEventListener('click', sidebarClickhandler);
});

function sidebarClickhandler(event) {
    const classList = event.currentTarget.classList;
    elements.forEach((item) => {
        item.classList.remove('sidebar-element-focus');
        item.getElementsByTagName('i')[0].classList.remove('i-active');
    });
    event.currentTarget.classList.add('sidebar-element-focus');
    event.currentTarget.getElementsByTagName('i')[0].classList.add('i-active');
    classList.forEach((item) => {
        let state = 0;
        switch(item) {
            case 'sidebar-intro': 
                document.querySelector('.content-wrapper').scrollTop = '0';
                break;
            case 'sidebar-portfolio': 
                document.querySelector('.content-wrapper').scrollTop = window.innerHeight * 1;
                break;
            case 'sidebar-about': 
                document.querySelector('.content-wrapper').scrollTop = window.innerHeight * 2;
                break;  
            case 'sidebar-contact': 
                document.querySelector('.content-wrapper').scrollTop = window.innerHeight * 3;
                break;      
            default:
                break;    
        }
    });
}