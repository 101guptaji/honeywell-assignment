import React, { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:9090/api/signature";

const MessageSigner = () => {
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [status, setStatus] = useState(null);

  const handleSign = async () => {
    try {
      const response = await axios.post(`${API_BASE}/sign`, { message });
      setSignature(response.data);
      setStatus(null);
    } catch (err) {
      console.error(err);
      alert("Error signing message");
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(`${API_BASE}/verify`, {
        message,
        signature,
      });
      setStatus(response.data ? "Valid Signature ✅" : "Invalid Signature ❌");
    } catch (err) {
      console.error(err);
      alert("Error verifying signature");
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        rows="4"
        cols="60"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div style={{ margin: "10px 0" }}>
        <button onClick={handleSign} style={{ marginRight: 10 }}>
          Submit & Sign
        </button>
        <button onClick={handleVerify} disabled={!signature}>
          Verify
        </button>
      </div>

      {signature && (
        <div style={{ marginTop: 10 }}>
          <strong>Signature (Base64):</strong>
          <pre style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
            {signature}
          </pre>
        </div>
      )}

      {status && (
        <div style={{ marginTop: 10 }}>
          <strong>Verification Status:</strong>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default MessageSigner;
