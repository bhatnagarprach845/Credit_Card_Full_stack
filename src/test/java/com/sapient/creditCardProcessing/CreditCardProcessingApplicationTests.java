package com.sapient.creditCardProcessing;


import com.sapient.creditCardProcessing.model.Card;
import com.sapient.creditCardProcessing.repository.CardRepository;
import com.sapient.creditCardProcessing.service.CreditCardService;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@SpringBootTest
public class CreditCardProcessingApplicationTests {

	@Autowired
	CreditCardService creditCardService = new CreditCardService();

	@Rule
	public ExpectedException exceptionRule = ExpectedException.none();

	@Test
	public void contextLoads() {

	}

	@Test
	public void test_add(){
		Card card = new Card();
		card.setCardNumber("123456789101112");

		//Mock repository
		CardRepository cardRepository = Mockito.mock(CardRepository.class);
		Mockito.when(cardRepository.save(card)).thenReturn(card);

		creditCardService.setCardRepository(cardRepository);
		creditCardService.addCard(card);

		verify(cardRepository, times(1)).save(card);
	}

	@Test
	public void test_retrieve_all(){
		Card card = new Card();
		Card card1 = new Card();
		card.setCardNumber("123456789101112");
		card1.setCardNumber("12345678910000");

		//Mock repository
		CardRepository cardRepository = Mockito.mock(CardRepository.class);
		Mockito.when(cardRepository.findAll()).thenReturn(Arrays.asList(card, card1));

		creditCardService.setCardRepository(cardRepository);

		List<Card> cardList = creditCardService.retrieveAllCards();
		assertThat(cardList.size(), is(2));

		verify(cardRepository, times(1)).findAll();
	}


}
