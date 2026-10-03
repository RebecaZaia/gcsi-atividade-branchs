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
const nomePerfil = document.querySelector('#nomePerfil')
const editarPerfil = document.querySelector('#editarPerfil')

editarPerfil.addEventListener('click', () => {
    const novoNome = prompt('Digite seu novo nome:')

    if (novoNome) {
        nomePerfil.textContent = `Nome: ${novoNome}`
    }
})
const campoBusca = document.querySelector('#campoBusca')
const btnBuscar = document.querySelector('#btnBuscar')
const resultadoBusca = document.querySelector('#resultadoBusca')

btnBuscar.addEventListener('click', () => {
    const busca = campoBusca.value.trim()

    if (!busca) {
        resultadoBusca.textContent = 'Digite um nome.'
        return
    }

    resultadoBusca.textContent = `Buscando por: ${busca}`
})
const notificacao = document.querySelector('#notificacao')
const lerNotificacao = document.querySelector('#lerNotificacao')

lerNotificacao.addEventListener('click', () => {
    notificacao.textContent = 'Nenhuma notificação nova.'
})
const modoEscuro = document.querySelector('#modoEscuro')

modoEscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
app.innerHTML = '<p>Aplicação iniciada.</p>'