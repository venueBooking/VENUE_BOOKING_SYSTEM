package com.venue.venue_module.utilities;

public class venuebookedException extends RuntimeException{
	private static final long serialVersionUID = 1L;

    public  venuebookedException() {
    	super("Cannot book on the given dates");
    }
}
