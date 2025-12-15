import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>

      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Enviar</button>

      {submitted && <p data-testid="message">Formulário enviado!</p>}
    </form>
  );
}
