'use client';

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {status === 'success' && (
        <div className="alert alert-success" role="alert">
          Email sent successfully!
        </div>
      )}
      {status === 'error' && (
        <div className="alert alert-danger" role="alert">
          Failed to send email. Please try again later.
        </div>
      )}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="name">Nome *</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email">Email *</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          placeholder="Messaggio"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <label htmlFor="message">Messaggio *</label>
      </div>
      <button type="submit" className="btn btn-primary w-100" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Invia Messaggio'}
      </button>
    </form>
  );
};

export default ContactForm;
