import './index.pcss'

if (module.hot) {
  module.hot.accept();
}

const windowTemplate = document.getElementById('cool-window')

document.getElementById('the-only-button').onclick = () => {
  if (!document.getElementById('window-instance')) {
    const modalWindow = windowTemplate.content.cloneNode(true)
    modalWindow.querySelector('.wrapper').id = 'window-instance'
    modalWindow.querySelector('.window__button--first').onclick = () =>
      document.body.removeChild(document.getElementById('window-instance'))
    document.body.appendChild(modalWindow)
  }
}
