const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

const dolar = 5.6
const euro = 6.3
const bitcoin = 329.491


const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const convertvalue = document.getElementById('convert-value')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal)

    if (select.value === "US$ Dólar americano") {
        convertvalue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReal / dolar);
    }

    if (select.value === "€ Euro") {
        convertvalue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euro);
    }

    if (select.value === "₿ Bitcoin") {
        convertvalue.innerHTML = new Intl.NumberFormat('BTC',
            { currency: 'BTC' }
        ).format(inputReal / bitcoin);
    }


}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = "./assets/EUA.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/Euro.svg"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/Bitcoin.svg"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

