const listaCompras = document.getElementById('lista-produtos')
let carrinho = {}
let total

limpar()
function adicionar() {
    const produto = document.getElementById('produto').value.split(' - ')[0].trim()
    const preco = parseInt(document.getElementById('produto').value.split('R$')[1])
    const quantidade = parseInt(document.getElementById('quantidade').value)

    
    if(carrinho[produto]) {
        carrinho[produto].quantidade += quantidade
    } else {
        carrinho[produto] = {
            preco,
            quantidade
        }
    }
    
    listaCompras.innerHTML = ''
    total = 0
    
    for (const [produto, detalhes] of Object.entries(carrinho)) {
        const subtotal = detalhes.preco * detalhes.quantidade

        listaCompras.innerHTML += /*html*/`
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${detalhes.quantidade}x</span> ${produto} <span class="texto-azul">R$${subtotal}</span>
            </section>
        `
        total += subtotal
        console.log(total)
    }
    const valorTotal = document.getElementById('valor-total')
    valorTotal.textContent = `R$${total}`
    document.getElementById('quantidade').value = ''
}

function limpar() {
    carrinho = {}
    total = 0
    document.getElementById('quantidade').value = ''
    document.getElementById('valor-total').textContent = 'R$0'
    listaCompras.innerHTML = ''
}