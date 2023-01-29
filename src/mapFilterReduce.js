let cart = [ //cartı sepet gibi düşün . {} içindekiler objeler   [] kullanılıyormuş dikkat
{id:1, productName:"Telefon",quantity:3,unitPrice:4000},
{id:2, productName:"Bardak",quantity:2,unitPrice:30},
{id:3, productName:"Kalem",quantity:1,unitPrice:20},
{id:4, productName:"Şarj Cihazi",quantity:2,unitPrice:100},
{id:5, productName:"Kitap",quantity:3,unitPrice:30},
{id:6, productName:"Pot",quantity:5,unitPrice:150},
]   //buranın içindekiler sepet olarak düşün. genelde başka sistemden data olarak gelir.
console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName+":"+product.unitPrice*product.quantity+"</li>")
} )  
console.log("</ul>")
//map ,elemanları tek tek dolaşıyor. İstersen aksiyonda bulun, istediğin çalışmaları da yapıp yepyeni array de döndürebilirsin.Her elemena takma isim veriyor.
//sepeti dolaş(cart.map) her bir product için şu hareketi yap demek

//cart.push({id:7, productName:"Ruhsat",quantity:1,unitPrice:20}) //sepete push yani sepete eklemek için kullanırız.  ama fonk. içinde yaparsak daha kullanışlı olur.

let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0) //acc: acumulator(biriktiren),0 acc'nin ilk değeri
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2) //şarta uyuyorsa yepyeni arraye atadık

console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)

let sayi=10;

function sayiTopla(number) {
    number +=1
}
sayiTopla(sayi)

console.log(sayi) //yine 10 yazdırır. Öncekinde niye değiştirdi çünkü
//orada referansla yolladık.Yani adresini yolladık . Ama burda değerin değerini atadık sonra sayıyla bağlantımız kalmadı