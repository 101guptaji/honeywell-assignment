package com.example.honeywell_assignment.controller;

import com.example.honeywell_assignment.service.MsgService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/signature")
public class MsgController {
    @Autowired
    private final MsgService msgService = new MsgService();

    @PostMapping("/sign")
    public ResponseEntity<String> signMessage(@RequestBody Map<String, String> payload) {
        System.out.println("Received payload: " + payload);
        String message = payload.get("message");
        String signature = msgService.sign(message);
        return ResponseEntity.ok(signature);
    }

    @PostMapping("/verify")
    public ResponseEntity<Boolean> verifySignature(@RequestBody Map<String, String> payload) {
        String message = payload.get("message");
        String signature = payload.get("signature");
        boolean isValid = msgService.verify(message, signature);
        return ResponseEntity.ok(isValid);
    }
}


 

