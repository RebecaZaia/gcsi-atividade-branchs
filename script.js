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
const loginEmail = document.querySelector('#loginEmail')
const loginSenha = document.querySelector('#loginSenha')
const btnLogin = document.querySelector('#btnLogin')

btnLogin.addEventListener('click', () => {
    if (!loginEmail.value || !loginSenha.value) {
        alert('Preencha email e senha.')
        return
    }

    alert('Login realizado com sucesso!')
})
app.innerHTML = '<p>Aplicação iniciada.</p>'