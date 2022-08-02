package com.vrs.admin_microservice.controller;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.vrs.admin_microservice.model.AuthenticationRequest;
import com.vrs.admin_microservice.model.AuthenticationResponse;
import com.vrs.admin_microservice.services.MyUserDetailsService;
import com.vrs.admin_microservice.util.AdminJWTUtil;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AdminJWTUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;
    
    @Autowired
    private RestTemplate dealerRestTemplate;
    
    @Autowired
    private RestTemplate customerRestTemplate;
    
    // ! For Testing Purpose
    @RequestMapping({ "/hello" })
    public String hello() {
        return "Hello World";
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
            throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(),
                            authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUserName());

        final String jwt = jwtTokenUtil.generateToken(userDetails);
        // ? 200 OK
        return ResponseEntity.ok(new AuthenticationResponse(jwt));

    }
    
    @GetMapping("/getAllDealers") 
    public List<Object> getAllDealers() {
    	
		Object[] objects = dealerRestTemplate.getForObject("http://localhost:9001/dealer/getAllDealers", Object[].class);
//		System.out.println("Array obj "+Arrays.asList(objects));
    	return Arrays.asList(objects);
    }
    @GetMapping("/getAllCustomers") 
    public List<Object> getAllCustomers() {
    	
		Object[] objects = customerRestTemplate.getForObject("http://localhost:9003/customer/getAllCustomers", Object[].class);
		System.out.println("Array obj "+Arrays.asList(objects));
    	return Arrays.asList(objects);
    }
}
