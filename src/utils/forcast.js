const request = require('request')

const forcast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/a4c8abc7a807e3ada5ba20e5f444ac75/' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                `${body.daily.data[0].summary} It's currently ${body.currently.temperature}. There is ${body.currently.precipProbability}% chance of rain`)
        }
    })

}
module.exports = forcast;
