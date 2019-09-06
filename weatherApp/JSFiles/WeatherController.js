import axios from 'axios';

export default getWeatherInfo = (location) => {axios.get('http://localhost:3000/', async (req, res) => {
    await console.log(req);
})
}

