const pizzas=[

const pizzas = [

{nome:"Calabresa I",descricao:"Sem cebola",preco:45},
{nome:"Calabresa II",descricao:"Com cebola",preco:47},
{nome:"Calabresa III",descricao:"Com catupiry",preco:50},

{nome:"Bigang",descricao:"Calabresa, ovo, cebola e pimentão",preco:50},

{nome:"Toscana I",descricao:"Calabresa, mussarela e tomate",preco:50},
{nome:"Toscana II",descricao:"Calabresa, mussarela e catupiry",preco:53},

{nome:"Mussarela",descricao:"Queijo e tomate",preco:48},

{nome:"Bacon",descricao:"Mussarela, bacon e tomate",preco:53},

{nome:"Nino",descricao:"Mussarela e tomate",preco:50},

{nome:"Napolitana",descricao:"Mussarela, tomate e parmesão",preco:53},

{nome:"Marguerita",descricao:"Mussarela, tomate e manjericão",preco:50},

{nome:"Portuguesa",descricao:"Presunto, ovo, mussarela e tomate",preco:50},

{nome:"Portuguesa II",descricao:"Presunto, ovo, cebola, mussarela e tomate",preco:51},

{nome:"Portuguesa III",descricao:"Presunto, ovo, milho, mussarela e tomate",preco:52},

{nome:"Alho",descricao:"Mussarela, parmesão e alho",preco:52},

{nome:"Bauru",descricao:"Presunto, mussarela e tomate",preco:50},

{nome:"Francesa",descricao:"Presunto, ervilha, tomate e bacon",preco:54},

{nome:"Gregor",descricao:"Presunto, palmito, ervilha e mussarela",preco:54},

{nome:"Baiana",descricao:"Calabresa, ovo, cebola, pimenta e mussarela",preco:55},

{nome:"Atum I",descricao:"Com cebola",preco:50},
{nome:"Atum II",descricao:"Com mussarela",preco:52},
{nome:"Atum III",descricao:"Com catupiry",preco:52},

{nome:"Siciliana",descricao:"Champignon, mussarela, tomate e bacon",preco:52},

{nome:"Siciliana II",descricao:"Champignon, catupiry e bacon",preco:52},

{nome:"Lombo",descricao:"Lombo e mussarela",preco:53},

{nome:"Lombo II",descricao:"Lombo e catupiry",preco:53},

{nome:"Stephan",descricao:"Calabresa, ovo, cebola e bacon",preco:58},

{nome:"Palio",descricao:"Mussarela e batata palha",preco:52},

{nome:"Peito de Peru I",descricao:"Peito de peru, mussarela e tomate",preco:53},

{nome:"Peito de Peru II",descricao:"Peito de peru e catupiry",preco:53},

{nome:"Frango I",descricao:"Frango, mussarela e tomate",preco:53},

{nome:"Frango II",descricao:"Frango e catupiry",preco:53},

{nome:"X Tudo",descricao:"Calabresa,presunto,ovo,milho,bacon",preco:58},

{nome:"Milho à Moda",descricao:"Champignon,palmito,milho,catupiry e bacon",preco:53},

{nome:"Pizzaiolo",descricao:"Calabresa, ovo,milho e catupiry",preco:54},

{nome:"Peruana",descricao:"Peito de peru, ovo,palmito e catupiry",preco:53},

{nome:"Escarola",descricao:"Escarola, alho,mussarela e bacon",preco:50},

{nome:"4 Queijos I",descricao:"Mussarela, parmesão,catupiry e gorgonzola",preco:60},

{nome:"4 Queijos II",descricao:"Mussarela, provolone,catupiry e gorgonzola",preco:55},

{nome:"4 Queijos III",descricao:"Mussarela e catupiry",preco:52},

{nome:"Caipira",descricao:"Frango, ovo,milho,bacon e catupiry",preco:58},

{nome:"Americana",descricao:"Presunto,ovo,mussarela e bacon",preco:52},

{nome:"Universitária",descricao:"Presunto,champignon,catupiry e bacon",preco:50},

{nome:"Brasileirinha",descricao:"Calabresa,atum,ovo e palmito",preco:50},

{nome:"Japonesa",descricao:"Mussarela,calabresa e cebola",preco:50},

{nome:"Camarão",descricao:"Mussarela,camarão e tomate",preco:65},

{nome:"Brócolis",descricao:"Brócolis,alho,mussarela,tomate e bacon",preco:52},

{nome:"Rúcula",descricao:"Mussarela,rúcula e tomate seco",preco:52},

{nome:"Carne Seca",descricao:"Carne seca,mussarela e catupiry",preco:58},

{nome:"Vegetariana",descricao:"Brócolis,champignon,palmito e ervilha",preco:50},

{nome:"Africana",descricao:"Palmito,ervilha,catupiry e bacon",preco:55},

{nome:"Nordestina",descricao:"Carne seca,ovo,cebola,mussarela,bacon e pimentão",preco:63},

{nome:"À Moda da Casa",descricao:"Frango,presunto,milho,bacon,mussarela",preco:60},

{nome:"Mexicana",descricao:"Milho,mussarela,tomate,bacon",preco:55},

{nome:"Lombo Especial",descricao:"Lombo,mussarela,presunto e tomate",preco:56},

{nome:"Tropical",descricao:"Presunto,palmito,cebola,mussarela e tomate",preco:52},

{nome:"Paulista",descricao:"Calabresa,ovo,cebola,mussarela e tomate",preco:52},

{nome:"Palmito",descricao:"Palmito,mussarela e tomate",preco:52},

// DOCES

{nome:"Morango",descricao:"Chocolate,morango e calda",preco:58},

{nome:"Romeu e Julieta",descricao:"Mussarela e goiabada",preco:55},

{nome:"Brigadeiro",descricao:"Chocolate granulado e leite condensado",preco:55},

{nome:"Prestígio",descricao:"Chocolate e coco",preco:55},

{nome:"Banana",descricao:"Mussarela,banana,leite condensado e canela",preco:55}

]

let carrinho=[]

const menuGrid=document.getElementById("menu-grid")

function renderMenu(){

menuGrid.innerHTML=""

pizzas.forEach((pizza,index)=>{

menuGrid.innerHTML+=`

<div class="card-pizza">

<h3>${pizza.nome}</h3>

<p>${pizza.descricao}</p>

<span>R$ ${pizza.preco.toFixed(2)}</span>

<button onclick="adicionarAoCarrinho(${index})">
Adicionar
</button>

</div>

`

})

}

function adicionarAoCarrinho(index){

carrinho.push(pizzas[index])

atualizarCarrinho()

}

function atualizarCarrinho(){

let lista=document.getElementById("cart-list")

lista.innerHTML=""

let total=0

carrinho.forEach(item=>{

total+=item.preco

lista.innerHTML+=`
<li>${item.nome} - R$ ${item.preco}</li>
`

})

document.getElementById("total").innerHTML=
`Total: R$ ${total.toFixed(2)}`

}

renderMenu()

]

let carrinho=[]

const menu=document.getElementById("menu-grid")

function carregar(){

pizzas.forEach((pizza,index)=>{

menu.innerHTML+=`

<div class="card">

<h3>${pizza.nome}</h3>

<p>${pizza.descricao}</p>

<p>R$ ${pizza.preco}</p>

<button onclick="add(${index})">
Adicionar
</button>

</div>

`

})

}

function add(i){

carrinho.push(pizzas[i])

atualizar()

}

function atualizar(){

let lista=document.getElementById("cart-list")

lista.innerHTML=""

let total=0

carrinho.forEach(item=>{

total+=item.preco

lista.innerHTML+=`
<li>${item.nome}</li>
`

})

document.getElementById("total")
.innerHTML=`Total: R$${total}`

}

function finalizarPedido(){

let nome=document.getElementById("nome").value

let endereco=document.getElementById("endereco").value

let texto=
`Pedido:
${nome}

${endereco}

`

carrinho.forEach(item=>{

texto+=item.nome+"\n"

})

window.open(
"https://wa.me/5511983103286?text="+
encodeURIComponent(texto)
)

}

carregar()