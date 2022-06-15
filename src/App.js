import './App.css';
import { Row, Divider, Button } from 'antd';
import foodJSON from './foods.json';
import { useState } from 'react';
import useItems from 'antd/lib/menu/hooks/useItems';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foodJSON);

  const addNewFood = (newFood) => {
    const updatedFoodArr = [...food, newFood];
    setFood(updatedFoodArr);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />

      <Button type="button"> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((item) => {
          return <FoodBox food={item} />;
        })}
      </Row>
    </div>
  );
}
export default App;
