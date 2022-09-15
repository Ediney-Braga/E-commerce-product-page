const cart = document.querySelector(".material-symbols-outlined");
const hiddenCart = document.querySelector("#hiddenCartCashier");


cart.addEventListener("click", () => {
    hiddenCart.classList.toggle("open")
    if(hiddenCart.classList.contains ("open")){
        hiddenCart.style.display = "block";  
        addNotivication();
    } else {
        hiddenCart.style.display = "none";
    }
})

//  fim parte-- mostrar conteudo do carrinho

// calcula a quantia a ser paga de acordo com a quantidade de itens adicionados ao carrinho ---- e ---- mostra uma notificação de itens add ao carrinho.
const addToCart = document.querySelector("#adiciona");
addToCart.addEventListener("click", addItensToCart)

function addItensToCart () {
    newItem.style.display = "block";
    cartEmpty.style.display = "none";
    addNotivication();
}

function addNotivication(){
    let aPagar = (125.00 * amount.value).toFixed(2);
    let vezesAPagar = document.querySelector("#vezesAPagar");
    vezesAPagar.innerHTML = `<p id="vezesAPagar">$125.00 x ${amount.value} <small> $${aPagar}</small></p>`

    let cartNotification = document.querySelector("#cartNotification");

    if(amount.value > 0 && !hiddenCart.classList.contains("open")){
        cartNotification.style.display = "block";
    } else {
        cartNotification.style.display = "none";
    }
    cartNotification.innerHTML =`<p>${amount.value}</p>`
}

    const del = document.querySelector(".del");
    const newItem = document.querySelector(".newItem");
    const cartEmpty = document.querySelector(".cartEmpty");

//-----------------------------------------------

// ----function remove itens do carrinho---

del.addEventListener("click", ()=>{
    newItem.style.display = "none";
    cartEmpty.style.display = "flex";
})

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


// --------------- VIEW FULL SCREEN PICTURE --------------------
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const close = document.querySelector("#close");

const pictureFullScreen = document.querySelector("#viewFullScreenPicture img");
    
let boxFull = document.querySelector("#viewFullScreenPicture");
let num = 1;
left.addEventListener("click", slidePicture);
right.addEventListener("click", slidePicture);

close.addEventListener("click", () => {
    boxFull.style.visibility = "hidden";
})

function slidePicture (event) {
    let picFSLocal = pictureFullScreen.src;
    let eventId = event.target.id;
    
    if(eventId == "right"){
        if(num == 4){
            num = 0;
        }
        num += 1;
        pictureFullScreen.src = `./images/image-product-${num}.jpg`
        console.log(num);
    } else {
        if(num == 1){
            num = 5;
        }
        num -= 1;
        pictureFullScreen.src = `./images/image-product-${num}.jpg` 
        console.log(num);
    }
}


// -----------  SELECIONANDO A IMAGEM QUE QUER VER -------------
const amostraPictures = document.querySelectorAll("#amostraPictures img");
let selectedPicture = document.querySelector("#selectedPicture img");

selectedPicture.addEventListener("click", ()=>{
    boxFull.style.visibility = "visible";
})

amostraPictures.forEach((picture)=>{
    picture.addEventListener("click", pictureSelected);
    
})

function opacityPictures(){
    amostraPictures.forEach((picture) => {
        picture.classList.remove("opacity");
    })
}

function pictureSelected (picture) {
    opacityPictures();
    let newPictureSelected = picture.target.src.replace("-thumbnail.jpg",".jpg");
    selectedPicture.src = newPictureSelected;
    picture.target.classList.add("opacity");
}
