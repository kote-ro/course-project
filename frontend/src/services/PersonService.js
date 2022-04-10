import axios from 'axios';

const PERSON_API_BASE_URL = "http://localhost:8080/api/v1/persons";

class PersonService {
    getPersons(){
        return axios.get(PERSON_API_BASE_URL);
    }

    createPerson(person){
        return axios.post(PERSON_API_BASE_URL, person);
    }

    updatePerson(person, personId){
        return axios.put(`${PERSON_API_BASE_URL}/${personId}`, person);
    }

    deletePerson(personId) {
        return axios.delete(`${PERSON_API_BASE_URL}/${personId}`);
    }
}

export default new PersonService()