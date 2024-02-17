import React, { useState } from "react";

const EmailSender = () => {
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = async () => {
    const response = await fetch("http://localhost:3000/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "codesurfers6@yahoo.com",
        subject: "Your subject",
        text: "Your email text",
      }),
    });
  
    try {
      if (response.ok) {
        const result = await response.json();
        console.log("Server Response (JSON):", result);
        setEmailStatus(result.message);
      } else {
        // If response status is not OK, read response as plain text
        const errorText = await response.text();
        console.log("Server Response (Error Text):", errorText);
        setEmailStatus("Error: " + errorText);
      }
    } catch (error) {
      // Handle the case where the response is not valid JSON
      console.error("Error parsing JSON response:", error);
  
      // Attempt to get the response text (probably HTML)
      const responseText = await response.text();
      console.log("Server Response (Text):", responseText);
  
      setEmailStatus("Failed to send email. Check the console for details.");
    }
  };
  
  return (
    <div>
      <h1>Email Sender</h1>
      <button onClick={sendEmail}>Send Email</button>
      {emailStatus && <p>{emailStatus}</p>}
    </div>
  );
};

export default EmailSender;



