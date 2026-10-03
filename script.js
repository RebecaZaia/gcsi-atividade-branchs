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