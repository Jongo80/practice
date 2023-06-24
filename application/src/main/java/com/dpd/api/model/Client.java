package com.dpd.api.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client")
public class Client {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Date birthTime;
    private String birthPlace;
    private String motherBirthName;
    private Long socialSecurityNumber;
    private Long taxIdentificationNumber;
    private String email;
    private String address;
    private Long phoneNumber;


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthTime() {
        return this.birthTime;
    }

    public void setBirthTime(Date birthTime) {
        this.birthTime = birthTime;
    }

    public String getBirthPlace() {
        return this.birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public String getMotherBirthName() {
        return this.motherBirthName;
    }

    public void setMotherBirthName(String motherBirthName) {
        this.motherBirthName = motherBirthName;
    }

    public Long getSocialSecurityNumber() {
        return this.socialSecurityNumber;
    }

    public void setSocialSecurityNumber(Long socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public Long getTaxIdentificationNumber() {
        return this.taxIdentificationNumber;
    }

    public void setTaxIdentificationNumber(Long taxIdentificationNumber) {
        this.taxIdentificationNumber = taxIdentificationNumber;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    public Client(Long id, String name, Date birthTime, String birthPlace, String motherBirthName, Long socialSecurityNumber, Long taxIdentificationNumber, String email, String address, Long phoneNumber) {
        this.id = id;
        this.name = name;
        this.birthTime = birthTime;
        this.birthPlace = birthPlace;
        this.motherBirthName = motherBirthName;
        this.socialSecurityNumber = socialSecurityNumber;
        this.taxIdentificationNumber = taxIdentificationNumber;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }


    public Client() {
    }

}
