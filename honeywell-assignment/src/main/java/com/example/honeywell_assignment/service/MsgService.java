package com.example.honeywell_assignment.service;

import org.springframework.stereotype.Service;

import com.example.honeywell_assignment.util.signUtil;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.util.Base64;

@Service
public class MsgService {

    private final PrivateKey privateKey = signUtil.getPrivateKey();
    private final PublicKey publicKey = signUtil.getPublicKey();

    public String sign(String message) {
        try {
            Signature signature = Signature.getInstance("SHA256withRSA");
            signature.initSign(privateKey);
            signature.update(message.getBytes(StandardCharsets.UTF_8));
            byte[] signed = signature.sign();
            return Base64.getEncoder().encodeToString(signed);
        } catch (Exception e) {
            throw new RuntimeException("Signing failed", e);
        }
    }

    public boolean verify(String message, String base64Signature) {
        try {
            Signature signature = Signature.getInstance("SHA256withRSA");
            signature.initVerify(publicKey);
            signature.update(message.getBytes(StandardCharsets.UTF_8));
            byte[] decoded = Base64.getDecoder().decode(base64Signature);
            return signature.verify(decoded);
        } catch (Exception e) {
            return false;
        }
    }
}
