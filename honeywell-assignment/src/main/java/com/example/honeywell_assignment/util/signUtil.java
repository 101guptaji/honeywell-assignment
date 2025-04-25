package com.example.honeywell_assignment.util;

import java.security.*;

public class signUtil {

    private static final KeyPair keyPair = generateKeyPair();

    private static KeyPair generateKeyPair() {
        try {
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
            generator.initialize(2048);
            return generator.generateKeyPair();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Failed to generate key pair", e);
        }
    }

    public static PrivateKey getPrivateKey() {
        return keyPair.getPrivate();
    }

    public static PublicKey getPublicKey() {
        return keyPair.getPublic();
    }
}
