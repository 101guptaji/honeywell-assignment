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
    <div className="message-signer">
      <textarea
        rows="4"
        cols="60"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div>
        <button onClick={handleSign} style={{marginBottom: '20px' }}>
          Sign
        </button>
      </div>

      {signature && (
        <div>
          <strong>Signature (Base64):</strong>
          <p style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
            {signature}
          </p>
          <button onClick={handleVerify} style={{marginBottom: '20px' }} disabled={!signature}>
            Verify
          </button>
        </div>

      )}

      {status && (
        <div>
          <strong>Verification Status:</strong>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default MessageSigner;
