const nomePerfil = document.querySelector('#nomePerfil')
const editarPerfil = document.querySelector('#editarPerfil')

editarPerfil.addEventListener('click', () => {
    const novoNome = prompt('Digite seu novo nome:')

    if (novoNome) {
        nomePerfil.textContent = `Nome: ${novoNome}`
    }
})