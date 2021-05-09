package com.sapient.creditCardProcessing.controller;

import com.sapient.creditCardProcessing.model.Card;
import com.sapient.creditCardProcessing.service.CreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CreditCardController {

    @Autowired
    CreditCardService creditCardService;

    //Endpoint to get all the cards
    @GetMapping("/getAll")
    public List<Card> retrieveAllCards() {
        return creditCardService.retrieveAllCards();
    }

    //Endpoint to add card
    @PostMapping("/addCard")
    public int addCard(@RequestBody Card card) {
        return creditCardService.addCard(card);
    }
}
