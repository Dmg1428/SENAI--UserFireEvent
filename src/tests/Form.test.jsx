import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form.jsx";

test("envia o formulário com sucesso", async () => {
  const user = userEvent.setup();
  render(<Form />);

  const input = screen.getByLabelText(/nome/i);
  await user.type(input, "João");
  expect(input).toHaveValue("João");

  const button = screen.getByRole("button", { name: /enviar/i });
  await user.click(button);
  expect(screen.getByText("Formulário enviado!")).toBeInTheDocument();
});