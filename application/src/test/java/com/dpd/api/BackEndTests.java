package com.dpd.api;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.hamcrest.Matchers.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.dpd.api.controller.ClientController;
import com.dpd.api.model.Client;
import com.dpd.api.repository.ClientRepository;

@WebMvcTest(ClientController.class)
public class BackEndTests {

	@Autowired
	private MockMvc mvc;

	@MockBean
	private ClientRepository repository;

	Client person = new Client(Long.valueOf(1), "Client1", new Date(0), "Monaco", "Karen",Long.valueOf(10101010), Long.valueOf(01010101), "Client1@email.com", "Main Street 1", "", Long.valueOf(33444555l), Long.valueOf(0));

	@Test
	public void getAllRecords() throws Exception{

		List<Client> allClients = Arrays.asList(person);

		Mockito.when(repository.findAll()).thenReturn(allClients);

		mvc.perform(MockMvcRequestBuilders
			.get("/clients")
			.contentType(MediaType.APPLICATION_JSON))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(1)))
			.andExpect(MockMvcResultMatchers.jsonPath("$[0].name", is("Client1")));
	}

}
