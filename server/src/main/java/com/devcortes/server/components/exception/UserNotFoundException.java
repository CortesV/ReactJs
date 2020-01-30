package com.devcortes.server.components.exception;

public class UserNotFoundException extends Exception {

    public UserNotFoundException(String error) {
        super(error);
    }
}
