const request = require('request')


// Geocoding Request from Mapbox API
const geocode = (location, cb) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(location) +'.json?access_token=pk.eyJ1IjoiZGVjb2Rpbmdia2x5biIsImEiOiJjazFqcmlmbHEwMDZuM2JxaWl5M3hhMXFsIn0.c4_28yQawP6PQ2ffYMO4Ww'
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            cb('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            cb('There are no matching results. Please try another search', undefined)
        } else {
            cb(undefined, {
                lat: response.body.features[0].center[1],
                lng: response.body.features[0].center[0],
                place: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode