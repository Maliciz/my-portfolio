import './App.css'
// Імпортуємо конкретні компоненти з бібліотеки
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    // Container - це готовий клас для центрування контенту
    <Container className="mt-5 text-center">
      <h1>Моє круте Портфоліо</h1>
      <p>Тепер ми використовуємо справжні React-компоненти!</p>
      
      {/* Замість звичайного <button> ми використовуємо <Button> */}
      <Button variant="primary" className="me-2">Дізнатись більше</Button>
      <Button variant="outline-success">Зв'язатися зі мною</Button>
    </Container>
  )
}

export default App