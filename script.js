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