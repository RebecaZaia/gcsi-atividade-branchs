const app = document.querySelector('#app')

const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const btnCadastrar = document.querySelector('#btnCadastrar')

btnCadastrar.addEventListener('click', () => {
    if (!nome.value || !email.value) {
        alert('Preencha todos os campos.')
        return
    }

    alert(`Usuário ${nome.value} cadastrado!`)
})