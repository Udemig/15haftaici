import { getWeatherData, getWeatherByCoords, getFlagUrl } from "./api.js";
import { uiElement, updateThemeIcon, renderWeatherData, renderCityList, setLoader, renderRecentChips, updateUnitToggle, renderError, clearError } from "./ui.js";

const THEME = "theme"
const RECENT = "recent"
const UNITS = "units"

const body = document.body


//projede global tutulan degiskenler
const STATE = {
    theme: localStorage.getItem(THEME) || 'dark',
    recent: JSON.parse(localStorage.getItem(RECENT) || "[]"),
    units: localStorage.getItem(UNITS) || 'metric'
}

//ekrandeki html yuklendikten sonra
document.addEventListener('DOMContentLoaded',()=>{

    handleGeoSearch()
    renderCityList()

    body.setAttribute("data-theme",STATE.theme)
    updateThemeIcon(STATE.theme)

    renderRecentChips(STATE.recent, (city)=>{
        uiElement.searchInput.value = city
        handleSearch(city)
    })

    updateUnitToggle(STATE.units)
})

//kullanici konumuna gore ara
const handleGeoSearch = () =>{
    window.navigator.geolocation.getCurrentPosition(
        async (position) =>{
            const {latitude, longitude } = position.coords

            //yuklenme olustur
            setLoader(true)

            //istek at
            const data = await getWeatherByCoords(latitude, longitude, STATE.units) 

            setLoader(false)
            const flagUrl = getFlagUrl(data.sys.country)

            renderWeatherData(data, flagUrl ,STATE.units)

            pushRecent(data.name)
        },
        () =>{
            renderError("konum yuklemede hata oldu")
        }
    )
}

//theme degistirme tiklanilirsa
uiElement.themeBtn.addEventListener('click',()=>{

    STATE.theme = STATE.theme === "light" ? "dark" : "light"

    body.setAttribute("data-theme",STATE.theme)
    //local storage kaydet
    persist()
    updateThemeIcon(STATE.theme)
})


//degerleri kaydet
const persist = () =>{
    localStorage.setItem(THEME,STATE.theme),
    localStorage.setItem(RECENT,JSON.stringify(STATE.recent)),
    localStorage.setItem(UNITS,STATE.units)
}

//form submit olursa
uiElement.searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const city = uiElement.searchInput.value
    handleSearch(city)
})

//arama baslat
const handleSearch = async (city) =>{

    const name = city.trim()

    if (!name) {
        //hata gonder
        renderError("sehir ismi zorunlu")
        return
    }

    //hata temizle
    clearError()
    //yukleme yap
    setLoader(true)

    try {
        
        const data = await getWeatherData(city, STATE.units)
        console.log(data.cod)
        if(data.cod == "404"){
            renderError("sehir bulunmaid") //hata goster
            return
        }

        const flagUrl = getFlagUrl(data.sys.country)

        pushRecent(name)

        console.log("flagUrl, ", flagUrl)
        renderWeatherData(data,flagUrl, STATE.units)
    } catch (error) {
        console.log(error)
        renderError(error.message || "sehir bulunamadi")
    } finally {
        //yukleyici goster
        setLoader(false)
    }
}

//son aratılanları ekle
const pushRecent = (city) => {


    const updated = [city, ...STATE.recent.filter((c)=> c.toLowerCase() !== city.toLowerCase())].slice(0,6)

    STATE.recent = updated

    renderRecentChips(STATE.recent, (city) => {
        uiElement.searchInput.value = city
        handleSearch(city)
    })

    persist()

}

//birim alani tiklanmasi
uiElement.unitToggle.querySelectorAll("button").forEach((btn)=>{
    btn.addEventListener("click", async() => {

        const nextUnits = btn.value

        if (STATE.units === nextUnits)  {
            return
        }

        STATE.units = nextUnits

        persist()

        updateUnitToggle(nextUnits)

        handleSearch(STATE.recent[0])
    })
})