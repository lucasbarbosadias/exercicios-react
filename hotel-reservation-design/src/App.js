import './App.css';
import Title from './components/title'
import { INFO } from './mockup/info'
import Text from './components/text'
import Button from './components/button'

function App() {

  return (
    <>
      <div className="card">
        <div className="content">
          <Title className="title">Hotel Ararense</Title>
          
          {INFO.map((item) => (
            <div key={item.id}>
              <Text className="input">{item.input}</Text>
              <Text className="date">{item.fill}</Text>  
            </div>
          ))}

          <Button className="btn">Confirm Reservation</Button>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
}

export default App;
