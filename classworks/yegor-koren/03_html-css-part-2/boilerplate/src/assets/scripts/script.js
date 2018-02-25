const intro = document.getElementById('intro');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const actionButton = document.getElementById('actionButton');
let isSidebarHidden = true;

actionButton.onclick = function(event) {
  if (isSidebarHidden) {
  intro.classList.add('section--show-sidebar');
  portfolio.classList.add('section--show-sidebar');
  contact.classList.add('section--show-sidebar');
  actionButton.classList.add('action-button--show-sidebar');
  isSidebarHidden = false;
  } else {
    intro.classList.remove('section--show-sidebar');
    portfolio.classList.remove('section--show-sidebar');
    contact.classList.remove('section--show-sidebar');
    actionButton.classList.remove('action-button--show-sidebar');
    isSidebarHidden = true;
  }
}
