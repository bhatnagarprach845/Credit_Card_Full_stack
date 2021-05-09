package com.sapient.creditCardProcessing.service;

import com.sapient.creditCardProcessing.model.Card;
import com.sapient.creditCardProcessing.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class CreditCardService {
	
	@Autowired
	CardRepository cardRepository;

	Logger log = Logger.getLogger("CreditCardService.class");


	public List<Card> retrieveAllCards(){
		log.info("Getting all the available cards.");
		List<Card> cardList = new ArrayList<>();
		try {
			return cardRepository.findAll();
		}catch(Exception e) {
			e.printStackTrace();
			return cardList;
		}		
	}

	public int addCard(Card card){
			log.info("Adding card to database.");
			return cardRepository.save(card).getId();
	}

	public void setCardRepository(CardRepository cardRepository) {
		this.cardRepository = cardRepository;
	}

	public CardRepository getCardRepository() {
		return cardRepository;
	}
}
