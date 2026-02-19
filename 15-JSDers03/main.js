/*"use strict"


x = 123
let eval = 123
*/



//SET -> benzersiz verileri tutar

const aylar = new Set(["ocak","subat","mart","nisan","mayis","haziran"])

aylar.add("aralik")
aylar.delete("ocak")

document.writeln("aylar  "+ " : "+ aylar + "</br>")


for (const element of aylar.values()) {
    document.writeln("SET element  "+ " : "+ element + "</br>")

}

//MAP -> anahtar deger cifti seklinde veri tutar
const meyveler = new Map([
    ["ad", "memo"],
    ["soyad","can"],
    ["yas",30],
    ["ulke","isvec"],
    ["soyad","orhan"],
])

meyveler.set("yas",40)

document.writeln("meyveler get "+ " : "+ meyveler.get("ad") + "</br>")

document.writeln("meyveler size "+ " : "+ meyveler.size + "</br>")


for (const element of meyveler.values()) {
    document.writeln(" Map element  "+ " : "+ element + "</br>")

}

const isimler1 = ["memo", "can", "seyhan", "nani", "azeri", "aysenur", "avinca", "nani"]

for (const anahtar in isimler1) {
       document.writeln(" anahtar "+ " : "+ anahtar + "</br>")
    
}

//MATH
let sayimiz = 34.643743

document.writeln(" sayimiz "+ " : "+ Math.ceil(sayimiz) + "</br>")

//Destructuring
const kisi = {
    ad: "deniz",
    soyad: "boztepe",
    yas: 35
}

let ad1 =  kisi.ad
let soyad1 = kisi.soyad
let yas1 = kisi.yas
// debugger
let {ad, soyad, yas} = kisi

document.writeln(" ad "+ " : "+ ad + "</br>")

//Typeof ile bir seyin tipine bakmak

document.writeln(" kisi typeof "+ " : "+ (typeof kisi) + "</br>")
document.writeln(" sayimiz typeof "+ " : "+ (typeof sayimiz) + "</br>")

//try catch

try {
    
       throw "bilgisayardan resim alma hatasi"
       document.writeln(" try calistir " + "</br>")
    
} catch (error) {
         document.writeln(" error calistir " + error + "</br>")

} finally{
       document.writeln(" finally calistir " + "</br>")

}


//FETCH

fetch("https://api.agify.io/?name=meelad")
    .then(cevap => cevap.json())
    .then(veri => console.log(veri))


async function verileriAl(){
    try {
        let cevap = await fetch("https://api.agify.io/?name=meelad")
        let veri = await cevap.json()
        console.log(veri)
    } catch (error) {
        console.log(error)
    }
}

verileriAl()


let divElement = document.getElementById("eleman1")
console.log("divElement: ", divElement)

divElement.innerText = "baba div"

function tiklandi() {
    divElement.classList.add("sinif1")
}

let divSinif2Elementleri = document.getElementsByClassName("sinif2")
console.log("divSinif2Elementleri: ", divSinif2Elementleri[0])


let divSini2ElementlerType2= document.querySelectorAll(".sinif2")
console.log("divSini2ElementlerType2: ", divSini2ElementlerType2)

for (const element of divSini2ElementlerType2) {
    
   console.log("elementlerrr, ", element)
   element.addEventListener("click",()=>{
        element.classList.add("sinif1")
   })

}


let divSinifElement = document.querySelector(".sinif2")
console.log("divSinifElement: ", divSinifElement)


divSinifElement.addEventListener("click",()=>{
    divElement.classList.remove("sinif1")

     divSinifElement.classList.add("sinif1")

     divSinifElement.style.backgroundColor= "yellow"
     divSinifElement.style.color = "red"
})

let sinif4Element = document.getElementById("sinif4")

sinif4Element.onclick = () => {
     sinif4Element.classList.add("sinif1")


let olusturulanDiv1 = document.createElement("div")
olusturulanDiv1.innerText = "olusturulan div 1"
olusturulanDiv1.classList.add("sinif5")

sinif4Element.appendChild(olusturulanDiv1)

}






//ARROW FUNCTION

const topla = (a,b) => {
    return a+b
}

const topla1 = (a,b) => a+b


function topla2(a,b){
    return a+b
}

document.writeln("topla "+ " : "+ topla(2,3) + "</br>")

document.writeln("topla1 "+ " : "+ topla1(2,4) + "</br>")

document.writeln("topla2 "+ " : "+ topla1(3,4) + "</br>")

//OBJECT - NESNE

const araba = { //new Object
    tipi: "Porche",
    model: "Cayanne",
    yili: 2022,
    renk: "siyah",
    calis: function(){
        document.writeln("araba calisiyor.. + " + " </br>")
    },
    durdur: function(){
         document.writeln("araba durdu.. + " + " </br>")
    },
    kacYasinda: function(){
        const sonuc = 2026 - this.yili // new Number/String
        document.writeln("araba  sonuc"+ " : "+ sonuc + "</br>")

    }
}

araba.tipi = "BMW"
document.writeln("araba  tipi"+ " : "+ araba.tipi + "</br>")
document.writeln("araba  renk"+ " : "+ araba["renk"] + "</br>")

araba.calis()
araba.durdur()
araba.kacYasinda()



//OBJE ornegi

const tarih = new Date()

document.writeln("tarih  "+ " : "+ tarih + "</br>")

document.writeln("tarih getDate "+ " : "+ tarih.getDate() + "</br>")
document.writeln("tarih getTime "+ " : "+ tarih.getTime() + "</br>")

tarih.setMonth(5)
document.writeln("tarih getMonth "+ " : "+ tarih.getMonth() + "</br>")


//ARRAY - Diziler

document.writeln("-- - - - -- - -- - -- - " + "</br>")


const arabalar = ["bmw","mercedes","togg","volvo","porche"] //new Array

arabalar.push("cadillac") //sona ekler
arabalar.pop() //sondan cikarir
arabalar.unshift("tesla") // basa ekler
arabalar.shift() // bastakini siler

document.writeln("arabalar  "+ " : "+ arabalar + "</br>")

document.writeln("-- - - - -- - -- - -- - " + "</br>")


 arabalar[3] = "fiat"

document.writeln("arabalar length "+ " : "+ arabalar.length + "</br>")
document.writeln("arabalar 0 "+ " : "+ arabalar[0] + "</br>")
document.writeln("arabalar 3 "+ " : "+ arabalar[3] + "</br>")


//metodlari

//diziyi string e cevirir, dizi elemanlari arasina virgul koyarak
document.writeln("arabalar toString "+ " : "+ arabalar.toString() + "</br>")

document.writeln("-- - - - -- - -- - -- - " + "</br>")

const isimler = ["memo", "can", "seyhan", "nani", "azeri", "aysenur", "avinca", "nani"]

// isimler = ["mahinur", "busra", "hande"] //new Array

document.writeln("isimler  "+ " : "+ isimler + "</br>")


document.writeln("-- - - - -- - -- - -- - " + "</br>")

const birlestirilmisDizi = arabalar.concat(isimler) //birden fazla diziyi birlestirmeyi saglar
document.writeln("isimbirlestirilmisDiziler  "+ " : "+ birlestirilmisDizi + "</br>")

//dizide aranilan elamanin sirasi getirir, yoksa -1 cevirir
document.writeln("bDizi indexOf "+ " : "+ birlestirilmisDizi.indexOf("nani") + "</br>")


isimler.forEach(diziyiGec) //bir dizi uzerinde gezip, degeri, sirayi ve diziyi alabilir


function diziyiGec(deger, sira, dizi) {
    document.writeln("deger: "+ deger + ", sira: "+ sira  + "</br>")
}

const sayilarimiz = [2,4,6,8,9,223,6]

document.writeln("-- - - - -- - -- - -- - " + "</br>")

document.writeln("sayilarimiz  "+ " : "+ sayilarimiz + "</br>")

document.writeln("-- - - - -- - -- - -- - " + "</br>")


//bir dizi uzerinden gezmemisiz saglar, ve her bir adimda elimize bir dizi verir
const yeniSayilarimiz = sayilarimiz.map(mapIleGez)


function mapIleGez(deger,sira,dizi){

    return deger * 2
}

document.writeln("yeniSayilarimiz  "+ " : "+ yeniSayilarimiz + "</br>")

//kurali saglayan elemanlar ile yeni bir dizi olusturur- bir onceki dizi elemanlarina uzerinden gezere
const buyukSayilar  = sayilarimiz.filter(buyukleriBul)

function buyukleriBul(deger) {
    return deger > 6
}

document.writeln("buyukSayilar  "+ " : "+ buyukSayilar + "</br>")

//bir dizi uzerinden gezerecek bir onceki degeri de tutmayi saglar
let toplamSonuc = sayilarimiz.reduce(hepsiniTopla)

function hepsiniTopla(toplam, deger, sira, dizi){
    return toplam + deger
}

document.writeln("toplamSonuc  "+ " : "+ toplamSonuc + "</br>")


for (let x of isimler.keys()){
    document.writeln(" x  "+ " : "+  x + "</br>")
}


for (let y of isimler.values()){
    document.writeln(" y  "+ " : "+  y + "</br>")
}


//

/*

    document.writeln(" a  "+ " : "+  a + "</br>") // undefined


    document.writeln(" b  "+ " : "+  b + "</br>")  // hata veriyor


    document.writeln(" c  "+ " : "+  c + "</br>") // hata veriyor


var a  = 4  
let b = 5  
const c = 6 

*/

