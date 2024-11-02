import React, { useState } from 'react';
import axios from 'axios'; 

function Forms() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [btc, setBtc] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const Yourdata = {
      name,
      phone_number: phoneNumber, 
      email,
      best_time: bestTime, 
    };

    console.log('Data to submit:', Yourdata);

    try {
      const response = await axios.post('http://localhost:6969/api/getdata', Yourdata); // Ensure the URL matches your backend
      console.log(response.data); // Handle the response from the server

      alert('data added successfully!');

      // Refresh the page after a successful addition
      window.location.reload(); // This will refresh the page
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('There was an error adding the data. Please try again karun lngg.'); // Notify user of the error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>
      <div>
        <p>Best Time to Call:</p>
        <label>
          <input type="radio" value="Morning" checked={bestTime === 'Morning'} onChange={(e) => setBestTime(e.target.value)}
            required
          />
          Morning
        </label>
        <label>
          <input type="radio" value="Afternoon" checked={bestTime === 'Afternoon'} onChange={(e) => setBestTime(e.target.value)}
            required
          />
          Afternoon
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms; 