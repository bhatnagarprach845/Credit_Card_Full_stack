package com.sapient.creditCardProcessing.model;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="CARD")
public class Card {

	@javax.persistence.Id
	@GenericGenerator(name="ShapeGenerator", strategy="increment")
	@GeneratedValue(generator="ShapeGenerator")
private int id;

@Column	(name="NAME")
private String name;
@Column(name="CARDNUMBER")
private String cardNumber;
@Column(name="BALANCE")
private Double balance;
@Column(name="LIMITBALANCE")
private Double limit;


	public Card() {

	}

	public Card(int id, String name, String cardNumber, Double balance, Double limit) {
		this.id = id;
		this.name = name;
		this.cardNumber = cardNumber;
		this.balance = 0d;
		this.limit = limit;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public Double getLimit() {
		return limit;
	}

	public void setLimit(Double limit) {
		this.limit = limit;
	}

	@Override
	public String toString() {
		return "Card{" +
				"id=" + id +
				", name='" + name + '\'' +
				", cardNumber='" + cardNumber + '\'' +
				", balance=" + balance +
				", limit=" + limit +
				'}';
	}
}
