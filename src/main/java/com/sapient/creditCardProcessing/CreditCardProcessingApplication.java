package com.sapient.creditCardProcessing;

import com.sapient.creditCardProcessing.service.CreditCardService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CreditCardProcessingApplication {

    public static void main(String[] args) {
        SpringApplication.run(CreditCardProcessingApplication.class, args);
    }

    @Bean
    public CreditCardService getCreditCardServiceBean(){
        return new CreditCardService();
    }
}
