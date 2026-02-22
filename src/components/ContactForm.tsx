"use client";

import { useState, useRef, FormEvent } from "react";
import { Modal, Button } from "react-bootstrap";
import useWeb3Forms from "@web3forms/react";
import prenotaData from "@/properties/prenota.json";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [result, setResult] = useState<{ message: string } | null>(null);
  const [showGdprModal, setShowGdprModal] = useState(false);

  const handleClose = () => setShowGdprModal(false);
  const handleShow = () => setShowGdprModal(true);

  const { submit } = useWeb3Forms({
    access_key: "86abf7be-640e-4266-9c52-47798f7940d2",
    settings: {
      from_name: "Vito Ferraro Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (message, data) => {
      setStatus("success");
      setResult({
        message: "Email sent successfully!",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    },
    onError: (message, data) => {
      setStatus("error");
      setResult({
        message: "Failed to send email. Please try again later.",
      });
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.target as HTMLFormElement);
    const object = Object.fromEntries(formData);
    submit(object);
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        {status === "success" && (
          <div className="alert alert-success" role="alert">
            {result?.message}
          </div>
        )}
        {status === "error" && (
          <div className="alert alert-danger" role="alert">
            {result?.message}
          </div>
        )}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Nome"
            required
          />
          <label htmlFor="name">Nome *</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label htmlFor="email">Email *</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="Messaggio"
            rows={5}
            required
          ></textarea>
          <label htmlFor="message">Messaggio *</label>
        </div>
        <div className="alert alert-warning mb-3" role="alert">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="gdpr"
              required
            />
            <label className="form-check-label" htmlFor="gdpr">
            Dichiaro di aver letto e accettato le condizioni sulla privacy.
            </label>
          </div>
          <p className="small mb-1">
            {prenotaData.gdpr}
          </p>
          <button
            type="button"
            className="btn btn-link p-0 small align-baseline text-decoration-none d-block"
            onClick={handleShow}
            style={{ fontSize: "inherit", fontWeight: "bold" }}
          >
            Leggi informativa completa
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Invia Messaggio"}
        </button>
      </form>

      <Modal show={showGdprModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Informativa trattamento dati</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
          {prenotaData.informativa.map((i) => (
            <p key={i.title}>
              <strong>{i.title}</strong>
              {i.paragrapth}
            </p>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactForm;
