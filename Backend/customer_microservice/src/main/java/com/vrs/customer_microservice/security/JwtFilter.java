package com.vrs.customer_microservice.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.vrs.customer_microservice.service.CustomerService;
import com.vrs.customer_microservice.service.JwtUtilService;


@Component
public class JwtFilter extends OncePerRequestFilter {
	
	@Autowired
	JwtUtilService jwtUtilService;
	
	@Autowired
	CustomerService customerService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		System.out.println("\nReceived Request!\n");
		
		String requestHeader = request.getHeader("Authorization");
		String username = null;
		String jwt = null;
		
		if (requestHeader!=null && requestHeader.startsWith("Bearer")) {
			jwt = requestHeader.substring(7);
			username = jwtUtilService.extractUsername(jwt);
		}
		else
		System.out.println("\nMissing Header!!\n");
		
		if (username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
			UserDetails userDetails = customerService.loadUserByUsername(username);
			if (jwtUtilService.validateToken(jwt, userDetails)) {
				UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
				authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			}
			else
			System.out.println("\nInvalid Token!!\n");
		}
		
		filterChain.doFilter(request,response);
	}
	
}
