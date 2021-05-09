package com.sapient.creditCardProcessing.repository;

import com.sapient.creditCardProcessing.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CardRepository extends JpaRepository<Card, Integer>{

	
}
