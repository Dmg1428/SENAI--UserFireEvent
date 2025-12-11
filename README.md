\#SENAI--UserFireEvent

UserEvent
---

##### 

##### Geralmente usado em testes de front-end (ex.: React Testing Library).

##### 

##### Permite simular ações do usuário como clicar, digitar, selecionar, arrastar, etc.

##### 

##### Substitui funções mais antigas como fireEvent porque simula de forma mais realista o comportamento humano, disparando todos os eventos relacionados a uma ação.

##### 

##### Exemplo em React Testing Library:

##### 

##### import { render, screen } from '@testing-library/react';

##### import userEvent from '@testing-library/user-event';

##### import Button from './Button';

##### 

##### test('clica no botão', async () => {

##### &nbsp; render(<Button />);

##### &nbsp; const button = screen.getByText('Clique');

##### &nbsp; await userEvent.click(button); // simula o clique do usuário

##### &nbsp; expect(button).toHaveTextContent('Clicado');

##### });

##### 

##### 

##### O await é necessário porque algumas ações são assíncronas (como digitar texto).

##### 

##### Ele dispara todos os eventos corretamente (mousedown, mouseup, click, focus, etc.).

##### \#



##### fireEvent

##### 

##### Também usado em testes (Testing Library).

##### 

##### Permite disparar eventos manualmente no DOM.

##### 

##### É mais “bruto” e menos realista, porque só dispara o evento que você especifica, sem simular todos os passos naturais do usuário.

##### 

##### Exemplo:

##### 

##### import { render, screen, fireEvent } from '@testing-library/react';

##### import Button from './Button';

##### 

##### test('clica no botão', () => {

##### &nbsp; render(<Button />);

##### &nbsp; const button = screen.getByText('Clique');

##### &nbsp; fireEvent.click(button); // dispara apenas o evento click

##### &nbsp; expect(button).toHaveTextContent('Clicado');

##### });

##### 

##### 

##### Não dispara eventos de focus, mousedown, mouseup automaticamente.

##### 

Mais rápido, mas menos fiel ao comportamento real do usuário.

---

