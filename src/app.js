console.log("Merhaba Kodlama.io")
//JS type safe değildir. Tanımladığın tür dışında atama yapabilirsin

let dolarBugun = 9.30  //değişkenler var yerine let ile tanımlanır.
// var global değişken gibi çalışır.İşimize gelmez.
let dolarDun = 9.20 

{
    let dolarDun = 9.10 

}
console.log(dolarDun)

const euroDun = 11.2 
// euroDun=11 sabit olduğu için değiştiremezsin.

console.log(euroDun)

//arrayler
//isimlendirmede camelCase kullanılır.
//PascalCasing ilk harfler büyük.
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
//ileride backenden alıcaz -> let konutKredileri =getFromApi()
console.log("<ul>") //üstteki dğerleri dönmem lazım ne kadar geleceğini bilimiyorum.
for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")


console.log(konutKredileri)