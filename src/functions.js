function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi : "
    + productName + "adet:"+quantity)
}

//addToCart()
addToCart("Limon",10)
//addToCart("Karpuz")

let sayHello = ()=>{ //değişkendi ama fonskiyon verdi
    console.log("Hello World!")
}

sayHello()

let sayHello2 =function(){
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice){

}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20) //böyle üsttekine bakmak zorunda kalıyoruz hangisi önde diye sürekli sırasına bakmak zorundayız bunu önlemk için nesne oluştururuz.

function addToCart3(product){
console.log("Ürün:"+product.productName)
console.log("Adet:"+product.quantity)
console.log("Fiyat:"+product.unitPrice)
}

 let product1 = {productName:"Elma",unitPrice:10,quantity:5}
addToCart3(product1);

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName) 

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)// ** sayılar değer tiptir(bellekte oluşurlar.değeri atarsın ve biter.). Objeler ve arrayler ise referans tiptir.BUrada stack ve heapte stackte değişken ismi heap kısmında süslünün içi tutulur. Burada product 2 'nin referans numarası product3'ün adresine eşittir. Yani product3'ü değişirsen product 2  de o değeri tanımladığı için o da değişir. Yani burada product2 vs. önemli değil onun adersi önemli . x adresinin product namei karpuz diye okunur.

function addToCart4(products) {//alttaki tanımladığımız productslar ile bağlantısı yok.Buraya ne gelirse onu algılıyor o kadar . 
    console.log(products) //eğer parametre x olsa globalde products var mı ona bakardı
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}   //gerçek hayatta böyle  OBJELER gelir. bir sürü pc gibiç klasik olanlar gibi değil.
] 

addToCart4(products)

function add(...numbers){ //...numbers rest(toparlar) operatörü ile istediğimiz kadar sayıyı toplayabileceğiz.Boyutu belli olmayan array yapıyor. yoksa sadece number1,number 2 oalrak 2-3 sayı toplardık.
    //rest op. yazarken rest op. en sona bırak yoksa kim kime ? (birsey,...numbers) olur                                     
let total =0
for(let i=0;i<numbers.length;i++){
    total = total +numbers[i]
}
console.log(total)
}
add(20,30,40,50)

let numbers=[20,30,40,50]
// console.log(...numbers)
console.log(Math.max(...numbers)) //...numbers sayesinde arraydeki elemanlar ayrı ayrı gidiyormuş gibi olur.

//distruct etme yani arrayle değişken tanımlama

let [icAnadolu , marmara,karadeniz,[icAnadoluSehirleri]] = [ //bbunu da kendi içinde declaration olarak tanımladık.array old. için[] obje {}
{name:"İc Anadolu",population:"20M"},
{name:"Marmara",population:"30M"},
{name:"Karadeniz",population:"10M"},
[
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"],
]
]
console.log(icAnadoluSehirleri)
 //objenn elemanlarını da değişkenlere atama
 let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
 ={productName:"Elma",unitPrice:10,quantity:5})  //let adamı blok sanıyor. Blok olmadığını belirtmek için parantez içinde atama yapıyoruz

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

