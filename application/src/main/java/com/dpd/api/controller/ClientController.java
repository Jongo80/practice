package com.dpd.api.controller;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dpd.api.model.Client;
import com.dpd.api.repository.ClientRepository;

@RestController
@RequestMapping("/clients")
public class ClientController {
    
    private final ClientRepository clientRepository;


    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable Long id) {
        return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        clientRepository.save(client);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setBirthTime(client.getBirthTime());
        currentClient.setBirthPlace(client.getBirthPlace());
        currentClient.setMotherBirthName(client.getMotherBirthName());
        currentClient.setSocialSecurityNumber(client.getSocialSecurityNumber());
        currentClient.setTaxIdentificationNumber(client.getTaxIdentificationNumber());
        currentClient.setEmail(client.getEmail());
        currentClient.setAddress(client.getAddress());
        currentClient.setPhoneNumber(client.getPhoneNumber());
        clientRepository.save(currentClient);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient(@PathVariable Long id) {
        clientRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
