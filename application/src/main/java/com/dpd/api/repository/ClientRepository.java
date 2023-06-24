package com.dpd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dpd.api.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
    
}
