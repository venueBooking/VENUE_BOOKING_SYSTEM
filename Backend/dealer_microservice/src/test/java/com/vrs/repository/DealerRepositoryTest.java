package com.vrs.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.vrs.model.Dealer;

@DataJpaTest
public class DealerRepositoryTest {
//	@Autowired
//    DealerRepository dealerRepository;
//
//    @AfterEach
//    void tearDown() {
//        dealerRepository.deleteAll();
//    }
//
//    @Test
//    void testSearchDealerByUsername() {
//        String username = "mo";
//        Dealer dealer = new Dealer(1, "Mario", "Ospina", new Date(2020, 09, 18), username, "mo000");
//        dealerRepository.save(dealer);
//        //When
//        Dealer searchDealerByUsername = dealerRepository.searchDealerByUsername(username);
//        //Then
//        assertThat(username).isEqualTo(searchDealerByUsername.getUsername());
//    }
}
