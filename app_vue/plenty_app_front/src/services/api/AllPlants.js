import axios from 'axios'

export default {
    getAllPlants () {
        return axios.get('/plants')
        .then(response => {
            return response.data
        })
    }
}