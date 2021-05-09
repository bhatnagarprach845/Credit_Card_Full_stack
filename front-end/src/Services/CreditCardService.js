import axios from 'axios';

const CARD_API_URL = 'http://localHost:8080'

class CreditCardService {

    retrieveAllCards() {
        return axios.get(`${CARD_API_URL}/getAll`);
    }

     addCard(card) {
        return axios.post(`${CARD_API_URL}/addCard`, card).then(function(response){
            console.log(response)
        });
    }
}

export default new CreditCardService();