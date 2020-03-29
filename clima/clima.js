const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=80c049fae4caf8e31376da11c953688f`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}