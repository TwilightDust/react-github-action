import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App>sd</App>);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text',() => {
  render(<App></App>);

  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test('plus button has correct text',() => {
  render(<App></App>);

  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test('when + button is pressed, the counter change test',()=>{
  render(<App></App>);

  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test('on/off button has blue color',()=> {
  render(<App></App>);

  const buttonElement =  screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor:"blue"});
});

test('Prevent the -,+ button from being pressed when the on/off button is clicked',()=>{
  render(<App></App>);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
});