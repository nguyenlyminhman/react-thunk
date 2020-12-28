import axios from 'axios';

const fetchNekoDataService = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://5fe9a0792e12ee0017ab5323.mockapi.io/neko-api/neko-test")
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
}

export default fetchNekoDataService;