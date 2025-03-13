import { utilService } from "./services/util.service.js"

downloadCountryFlags()
function downloadCountryFlags() {
    const countries = getCountries()
    // console.log('Countries:', countries.map(c => c.name))
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
}
function getCountries() {
    var countries = []
    // TODO: get the countries from the JSON file with utilService.readJsonFile
    countries = utilService.readJsonFile('data/countries.json')
    // sort by population (descending)
    countries = countries.sort((c1, c2) => c1.population + c2.population)
    // return the top 5
    countries = countries.slice(0, 5)
    return countries
}
function downloadFlags(countries) {
    const prms = countries.map(country => {
        return utilService.download(
            // country.flags.svg,
            // `flags/${country.name.common}.svg`

            country.flags.png,
            `flags/${country.name.common}.png`
        )
    })
    return Promise.all(prms)
}
