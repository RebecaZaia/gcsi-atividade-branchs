const notificacao = document.querySelector('#notificacao')
const lerNotificacao = document.querySelector('#lerNotificacao')

lerNotificacao.addEventListener('click', () => {
    notificacao.textContent = 'Nenhuma notificação nova.'
})