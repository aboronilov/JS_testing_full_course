import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', ()=>{
  test('renders APP elements', () => {
    render(<App />);
    const h1Element = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(h1Element).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  
    // можно пользоваться screen.debug()
  });

  test('does not render none element', () => {
    render(<App />);
    // find. Возвращает object завернутый в promise. Для асинхронных функций
    // get - если элемент не найден, тест падает с ошибкой. Возвращает object
    // query - для проверки отсутствия. Если не найден, вернет null - можно по нему проверить 
    const el = screen.queryByText(/fake text/i);
    expect(el).toBeNull()
  });

  test('renders async element', async () => {
    render(<App />); 
    screen.debug()
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument()
    expect(data).toHaveStyle({color:'red'})
    screen.debug()
  });

  test('click event handling', async () => {
    render(<App />); 
    const btn = screen.getByTestId("toggle-btn")
    expect(screen.queryByTestId("toggle-elem")).toBeNull()

    // fireEvent - для работы с событиями

    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeNull()
  });

  test('input event', async () => {
    render(<App />); 
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId("value-elem")).toContainHTML('')
    fireEvent.input(input, {
      target: {value: 'test'}
    })
    expect(screen.queryByTestId("value-elem")).toContainHTML('test')
    expect(screen.queryByTestId("value-elem")).not.toContainHTML('fake')

    // userEvent - для имитации поведения пользователя (работа с клавиатурой)

    userEvent.type(input, 'test')
    expect(screen.queryByTestId("value-elem")).toContainHTML('test')
  });
})


