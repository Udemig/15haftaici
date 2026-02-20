
/*
//Form elemanlarini alma
const girisFormElement = document.forms["girisForm"]
console.log(girisFormElement)


const kadiElement = girisFormElement["kadi"]
console.log(kadiElement)

const sifreElement = girisFormElement["sifre"]
console.log(sifreElement)


girisFormElement.addEventListener("submit",(event)=>{
    event.preventDefault()

    const kadiElementDeger = kadiElement.value
    const sifreElementDeger = sifreElement.value

    setTimeout(() => {

        console.log("tiklandi")

        const submitElement = girisFormElement["submit"]
        submitElement.classList.add("sinif1")


    }, 2000);

    console.log("kadi: ", kadiElementDeger , " sifre", sifreElementDeger)
})


/* 
 
Elinizde bir kullanici adi ve sifre olsun, formdan kullanicidan aldiginiz sifre ve 
kullanici adi dogru ise consol"a hosgeldiniz degilse "yanlis bildi" diye cikti veren
bir code-script yaziniz

*/

/* 
Callbacks - Gericagirma
*/

/*
function ekranaYaz(veri) {
    console.log(veri)
}

function topla(a,b,calis){
    let top = a + b
    calis(top)
}

topla(2,5,ekranaYaz)

//OBJECT - NESNE
class Araba{

    constructor(ad,yas){
        this.adi = ad
        this.yasi = yas
    }

    selamla(){
        document.writeln("merhaba ben araba" + "</br>")
    }

    dur(){
        document.writeln("araba durdu" + "</br>") 
    }

    static basladi(){
        document.writeln("Araba calismaya baslad 12312" + "</br>")
    }

}


class BMWAraba extends Araba {
    constructor(ad,yas, renk){
        super(ad,yas)
        this.rengi = renk
    }

    basla(){
        document.writeln("araba basladi" + "</br>") 
    }

    dur(){
        document.writeln("bmw araba durmuyor" + "</br>") 
    }


}


let bMWAraba1 = new BMWAraba("bmw",1,"siyah")


document.writeln("bMWAraba1 adi: " + bMWAraba1.adi + "</br>")
bMWAraba1.selamla()
bMWAraba1.dur()

let araba1 = new Araba("Porche",3)
Araba.basladi()
document.writeln("araba1 adi: " + araba1.adi + "</br>")
araba1.selamla()


let araba2 = new Araba()

//ASYNCHRONOUS - 

/* Promis3

let promise = new Promise(function(resolve, reject){

    reject("hata meydana geldi")
    resolve("sonuc olumlu")

})

promise.then(
    function(deger){goster(deger)},
    function(deger1){goster(deger1)}
)

function goster(deger2){
    console.log(deger2)
}
e */

import { topla, cikar } from "./kullanici.js";




let sonuc = topla(2,4)

let sonuc1 = cikar (9,5)

console.log("sonuc : " + sonuc )

console.log("sonuc1 : " + sonuc1 )

//WINDOW


console.log("window  innerHeight: " + window.innerHeight )
console.log("window  innerWidth: " + window.innerWidth )
console.log("window  location: " + window.location.href )
console.log("window  hostname: " + window.location.hostname )
console.log("window  pathname: " + window.location.pathname )
console.log("window  port: " + window.location.port )




//SCREEN

console.log("screen  width: " + screen.width )
console.log("screen  height: " + screen.height )


//Timing

/*
setInterval(() => {
    console.log("calistim")
}, 2000);
*/


//Web APIs

function konumAl(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(konumuGoster)
    } else {
        console.log("cihaz konum desteklemiyor: "  )
    }
}

function konumuGoster(poziyonlar){
    console.log(poziyonlar.coords.latitude)
     console.log(poziyonlar.coords.longitude)
}


konumAl()

// Web Storage 

localStorage.setItem("ad","can sen nasilsin")

let alinanAd = localStorage.getItem("ad")
console.log("alinanAd : " + alinanAd)


//AJAX
function verileriAl(){
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function(){
        console.log(this.responseText)
    }
    xhttp.open("GET","https://api.agify.io/?name=meelad", true)
    xhttp.send()
}

verileriAl()

//JSON
const kisi = {
    ad: "ekram",
    soyad: "dogancay",
    diller: ["tr","en","sw","kr"],
    favoriSanatci: {
     ad: "ibo",
     soyad: "tatlises"
    }
}


/*
"kisi":{
    "ad":"ekram",
    "soyad": "dogancay",
    "diller": ["tr","en","sw","kr"],
    "favoriSanatci": {
        "ad": "ibo",
        "soyad": "tatlises"
    }
}
*/

console.log("kisi : " + kisi.favoriSanatci.ad)



