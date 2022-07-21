package com.vrs.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@Slf4j
public class DealerException {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<String> validation(MethodArgumentNotValidException e){
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		log.error(sw.toString());
		return new ResponseEntity<String>("MethodArgumentNotValidException",HttpStatus.FORBIDDEN);
	}
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> genericValidation(Exception e){
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		log.error(sw.toString());
		return new ResponseEntity<String>("Exception",HttpStatus.FORBIDDEN);
	}
}