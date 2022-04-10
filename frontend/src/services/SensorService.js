import axios from 'axios';

const SENSOR_API_BASE_URL = "http://localhost:8080/api/v1/sensors";

class SensorService {
    getSensors(){
        return axios.get(`${SENSOR_API_BASE_URL}/2022-02-03/2022-02-10`);
    }
}

export default new SensorService()