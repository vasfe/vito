"use client";

import { useState, useRef, FormEvent } from "react";
import useWeb3Forms from "@web3forms/react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [result, setResult] = useState<{ message: string } | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showGdprError, setShowGdprError] = useState(false);

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

    if (!isChecked) {
      setShowGdprError(true);
      return;
    }

    setShowGdprError(false);
    setStatus("sending");
    const formData = new FormData(event.target as HTMLFormElement);
    const object = Object.fromEntries(formData);
    submit(object);
  };

  return (
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
        <div className="form-check mb-3">
          <input
            className={`form-check-input ${showGdprError ? "is-invalid" : ""}`}
            type="checkbox"
            id="gdpr"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              if (e.target.checked) {
                setShowGdprError(false);
              }
            }}
            required
          />
          <label className="form-check-label" htmlFor="gdpr">
            Dichiaro di aver letto e accettato le condizioni sulla privacy.
          </label>
          {showGdprError && (
            <div className="invalid-feedback">
              Per favore, accetta le condizioni sulla privacy per continuare.
            </div>
          )}
        </div>
        <p className="small mb-3">
          I dati personali forniti saranno trattati al solo fine di rispondere
          alla tua richiesta e non saranno ceduti a terzi. Per maggiori
          informazioni, consulta la nostra Privacy Policy. Cliccando su&apos; Invia
          Messaggio&apos;, dichiari di aver letto e accettato le condizioni.
        </p>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Invia Messaggio"}
      </button>
    </form>
  );
};

export default ContactForm;
