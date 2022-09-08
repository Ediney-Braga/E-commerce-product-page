const cart = document.querySelector(".material-symbols-outlined");
const hiddenCart = document.querySelector("#hiddenCartCashier");


cart.addEventListener("click", () => {
    hiddenCart.classList.toggle("open")
    if(hiddenCart.classList.contains ("open")){
        hiddenCart.style.display = "block";     
    } else {
        hiddenCart.style.display = "none";
    }
})

//  fim parte-- mostrar conteudo do carrinho


// modifica a quantidade do produto a ser adcionada ao carrinho
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const amount = document.querySelector("input[type='number']");

up.addEventListener("click", mostrarAmount);
down.addEventListener("click", mostrarAmount);

function mostrarAmount (element) {
    let num = Number(amount.value);
    num += 1;
    if(element.target.id == "up"){
        amount.value = num ;
    } else if(amount.value > 0){
        amount.value -= 1 ;
    }
}


// calcula a quantia a ser paga de acordo com a quantidade de itens adicionados ao carrinho ---- e ---- mostra uma notificação de itens add ao carrinho.
const addToCart = document.querySelector("#adiciona");
addToCart.addEventListener("click", () => {

    let aPagar = (125.00 * amount.value).toFixed(2);
    let vezesAPagar = document.querySelector("#vezesAPagar");
    vezesAPagar.innerHTML = `<p id="vezesAPagar">$125.00 x ${amount.value}<small>$${aPagar}</small></p>`

    let cartNotification = document.querySelector("#cartNotification");
    if(amount.value > 0){
        cartNotification.style.display = "block";
    } else {
        cartNotification.style.display = "none";
    }
    cartNotification.innerHTML =`<p>${amount.value}</p>`
})
//-----------------------------------------------

// ------------  FUNÇÃO DELETE AINDA NÃO ESTA FUNCINAL----------
// let del = document.querySelector("#del");

// del.addEventListener("click", () => {
//     let cartNotification = document.querySelector("#cartNotification");
//     hiddenCart.innerHTML = "<h4>Cart</h4> <div id='contentAdd'><img src=''alt=''><div><p></p><p id='vezesAPagar'><small></small></p> </div><span id='del' class='material-symbols-outlined'>delete</span></div><div id=checkout></div >";
//     cartNotification.style.display = "none"
// })


const amostraPictures = document.querySelectorAll("#amostraPictures img");
amostraPictures.forEach((picture)=>{
    picture.addEventListener("click", pictureSelected);
    
})

function pictureSelected (picture) {
    let selectedPicture = document.querySelector("#selectedPicture img");
    let newPictureSelected = picture.target.src.replace("-thumbnail.jpg",".jpg");
    selectedPicture.src = newPictureSelected;
}
