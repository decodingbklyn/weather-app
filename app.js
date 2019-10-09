const request = require('request')

//const url = 'https://api.darksky.net/forecast/4e24db601751ebb310bb4ba30f619f80/40.6782,73.9442'


const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Brooklyn.json?access_token=pk.eyJ1IjoiZGVjb2Rpbmdia2x5biIsImEiOiJjazFqcmlmbHEwMDZuM2JxaWl5M3hhMXFsIn0.c4_28yQawP6PQ2ffYMO4Ww'

// Geocoding Request from Mapbox API
request({url: geocodeUrl, json: true}, (error, response) => {
    const body = response.body
    if (error) {
        console.log('Unable to connect to location services')
    } else if (body.features.length === 0) {
        console.log('There are no matching results. Please try another search')
    } else {
        const lat = body.features[0].center[0]
        const lng = body.features[0].center[1]
        console.log(`${lat}, ${lng}`)
    }

})

// Weather Request from Dark Sky API
// request({ url: url, json: true }, (error, response) => {
//     if (error)  {
//         console.log('Unable to connect to weather api')
//     } else if (response.body.error){
//         console.log('Unable to find Location')
//     } else {
//         const body = response.body
//         const temp = body.currently.temperature
//         const rainChance = body.currently.precipProbability
//         console.log(`${body.daily.data[0].summary} It is currently ${temp} degrees out. There is a ${rainChance}% chance of rain`)
//     }
 
// })
