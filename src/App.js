import './App.css';
import { Row, Divider, Button } from 'antd';
import foodJSON from './foods.json';
import { useState } from 'react';
import useItems from 'antd/lib/menu/hooks/useItems';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foodJSON);
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((item) => {
          console.log(item);
          return <FoodBox food={item} />;
        })}
      </Row>
    </div>
  );
}
export default App;
