let adSoyad = " Merhaba benim adim 'memo can\" soyadim seyhan ben memo sen kimsin? "

let adSoyad1 = new String("ekrem dogancay")

document.writeln("adSoyad: " + adSoyad + "</br>") 

let yas = 30

let benimYasim = `benim yasim ${yas} dir ya  senin nedir? ${adSoyad1}`

document.writeln("benimYasim: " + benimYasim + "</br>") 


document.writeln("adSoyad toUpperCase: " + adSoyad.toUpperCase() + "</br>") 
document.writeln("adSoyad toLowerCase: " + adSoyad.toLowerCase() + "</br>") 
document.writeln("adSoyad length: " + adSoyad.length + "</br>") 

let adSoyadTrim = adSoyad.trim()
document.writeln("adSoyadTrim length: " + adSoyadTrim.length + "</br>") 

let yeniYas = 30.343252335235 // new Number(30.343252335235 )
let yeniYasFixed = yeniYas.toFixed(2) //ondalikli gosterilecek sayi
document.writeln("yeniYasFixed: " + yeniYasFixed + "</br>") 

if ("2" === 2) {
    document.writeln("SAyilar esittir: "  + "</br>") 
} else {
  document.writeln("SAyilar esit degildir: "  + "</br>") 
}

let yeniYasPrecision= yeniYas.toPrecision(4) //toplam rakam sayisi
document.writeln("yeniYasPrecision: " + yeniYasPrecision + "</br>") 

let dogunGunum = "2000"
let dogunGunumFloat = parseFloat(dogunGunum) + 20.3

document.writeln("dogunGunumFloat: " + dogunGunumFloat + "</br>") 


//is not a number -> bu bir sayi degil
document.writeln("dogunGunumFloat isNaN: " + Number.isNaN(dogunGunumFloat) + "</br>") 



function halkiSelamla() {
    document.writeln("Hepiniz hosgeldinizzz "  + "</br>") 
    document.writeln("Nasilsiniz "  + "</br>") 
}


halkiSelamla()
halkiSelamla()


function gelenKisiyiSelamla(ad) {
    document.writeln("Hosgeldin eyyy : " + ad + "</br>") 
}

gelenKisiyiSelamla("mahinur")

function sayilariTopla(sayiIlk, sayiIki) {
    let toplam  = sayiIlk + sayiIki
    document.writeln("toplam: " + toplam + "</br>") 
}

sayilariTopla(2,3)

function sayilariCarp(a, b) {
    let carpma = a * b
    return carpma
}

let carpmaSonuc = sayilariCarp(2,3)

    document.writeln("carpmaSonuc: " + carpmaSonuc + "</br>") 




/*

let sayi1 = 4
let sayi2 = 2

document.writeln("- - - -- - - -- - - - - - - " + "</br>")
document.writeln("sayi1: " + sayi1  + "</br>")

document.writeln("sayi2: " + sayi2  + "</br>")
document.writeln("- - - -- - - -- - - - - - - " + "</br>")


if (sayi1 > sayi2 ) {
    document.writeln("sayi1 sayi2 den buyuktur " + "</br>")
}

if (sayi1 >= 4 ) {
    document.writeln("sayi1 4 veya daha buyuktur " + "</br>")
}

if (sayi1 < 5 ) {
    document.writeln("sayi1 5 den kucuktur " + "</br>")
}

if (sayi2 <= 2 ) {
    document.writeln("sayi1 2 den kucuktur veya esittir " + "</br>")
}

if (sayi1 == 4 ) {
    document.writeln("sayi1 4'tur "  + "</br>")
}


if (sayi1 != 3 ) {
    document.writeln("sayi1 3 e esit degildir "  + "</br>")
}


if (sayi1 == 4 && sayi2 == 2) {
    document.writeln("sayi1 4 ve sayi2 ise 2 dir "  + "</br>")
}

if (sayi1 == 2 || sayi2 == 2) {
    document.writeln("sayi1 2 veya sayi2 ise 2 dir "  + "</br>")
}

if (sayi1 == 3) {
    document.writeln("sayi1 3 tur "  + "</br>")
} else {
    document.writeln("sayi1 3 degildir "  + "</br>")
}



if (sayi1 == 3) {
    document.writeln("sayi1 3 tur "  + "</br>")
} else if(sayi1 == 4){
 document.writeln("sayi1 4 tur "  + "</br>")
} else {
    document.writeln("sayi1 3 veya 4 tur degildir "  + "</br>")
}


let sonuc = sayi1 > sayi2 ? "sayi1 buyuk" : "sayi2 buyuktur"

document.writeln("sonuc ; "+ sonuc  + "</br>")

let gun = 3

switch (gun) {
    case 0:
        document.writeln("bugun pazar "  + "</br>")
        break;
    case 1:
        document.writeln("bugun pazartesi "  + "</br>")
        break;
    case 2:
        document.writeln("bugun sali "  + "</br>")
        break;
    case 3:
        document.writeln("bugun carsamba "  + "</br>")
        break
    case 4:
        document.writeln("bugun persembe "  + "</br>")
        break;
    case 5:
        document.writeln("bugun cuma "  + "</br>")
        break;
    case 6:
        document.writeln("bugun cumartesi "  + "</br>")
        break;
    default:
         document.writeln("bilinmeyen gun  "  + "</br>")
        break;
}

let havaAcikMi = true

if (havaAcikMi ) {
    document.writeln("hava bugun acik  "  + "</br>")
}

let oyHakkinVarMi = false

if (oyHakkinVarMi == false ) {
    document.writeln("oy hakkin yok "  + "</br>")
}else {
     document.writeln("oy hakkin var "  + "</br>")
}

/* 
let alinanDeger = Number( prompt("lutfen yasinizi giriniz") ) //null
console.log("alinanDeger: ", alinanDeger)

let sonuc1 = alinanDeger + 2
console.log("sonuc1: ", sonuc1)


let degersiz //undefined

console.log("degersiz: ", degersiz)



kullanicidan alinan 2 adet sayiyi toplayip console a yazdiran bir code-script yaz

*/


/* 
kullanicidan alinan 2 adet sayiyidan buyuk olani blup consola yazdirana
ama esitlerse consola "esittiler" yazan bir code-script yaziniz
*/
/*
let rSayi = parseInt( Math.random()*100 )

document.writeln("rSayi: " + rSayi + "</br>")


/* 
Kullanicidan alinan sayi ile makinanin urettigi sayi ayni ise console"a 
"kazandiniz", degilse "kayebettiniz" yazan bir code-script yaziniz

*/
/*
for (let index =0 ; index < 10; index++) {
    if (index == 2) {
        continue
    }
    if (index == 8) {
        break
    }
   document.writeln("index: " + index + "</br>") 
}


let yeniSayi = 3

yeniSayi++ // yeniSayi = yeniSayi + 1
document.writeln("yeniSayi: " + yeniSayi + "</br>")

yeniSayi-- // yeniSayi = yeniSayi - 1
document.writeln("yeniSayi: " + yeniSayi + "</br>")

yeniSayi*=2 //  yeniSayi = yeniSayi * 2
document.writeln("yeniSayi: " + yeniSayi + "</br>")

yeniSayi-=1 //  yeniSayi = yeniSayi - 1
document.writeln("yeniSayi: " + yeniSayi + "</br>")

yeniSayi/=5 //  yeniSayi = yeniSayi / 5
document.writeln("yeniSayi: " + yeniSayi + "</br>")

yeniSayi = 10
document.writeln("yeniSayi: " + yeniSayi + "</br>")

yeniSayi%=3 //  yeniSayi = yeniSayi % 3
document.writeln("yeniSayi: " + yeniSayi + "</br>")


/* 
Kullanicidan alinan 2 adet sayi arasindaki sayilari bulup ekrana
yazdiran bir dongu kurunuz
*/

/*
let sayac = 0

while (sayac < 5 ) {
 document.writeln("sayac: " + sayac + "</br>") 
 sayac = sayac + 1
}


let yeniSayac = 0

do {
     document.writeln("yeniSayac: " + yeniSayac + "</br>") 
    yeniSayac = yeniSayac + 1
} while (yeniSayac < 5);


/* 
makina rastgele 1 sayi uretmektedir. Kullanici ise sayi tahmin etmektedir.
Kullanicinin 3 hakki vardir. Eger sayiyi dogru tahmin ederse consola'a "kazandiniz",
3 hakkina ragmen dogru tahmin edemezse consola"a "kaybettiniz" yazan
bir code-script yaziniz


let hak = 1

let maSayi = parseInt( Math.random() * 100 )

 console.log("maSayi:  ", maSayi)
while (hak < 4) {
    let kuSayi = Number( prompt("sayi tahminin nedir? ") )
    if (kuSayi == maSayi) {
        console.log("kazandiniz")
        break
    } else {
        hak = hak + 1
        if (hak==4) {
            console.log("kaybettiniz")
        }
    }
}
*/

