import './App.css';
import { Row, Divider, Button } from 'antd';
import foodJSON from './foods.json';
import { useState } from 'react';
import useItems from 'antd/lib/menu/hooks/useItems';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foodJSON);
  const [searchFood, setSearchFood] = useState('');

  const addNewFood = (newFood) => {
    const updatedFoodArr = [...food, newFood];
    setFood(updatedFoodArr);
  };

  const deleteFood = (foodName) => {
    console.log('food to be deleted: ', foodName);
    const tempFood = JSON.parse(JSON.stringify(food));
    const newArr = tempFood.filter((item) => item.name !== foodName);
    console.log('new array: ', tempFood);
    setFood(newArr);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />

      <Button type="button"> Hide Form / Add New Food </Button>

      <Search searchFood={searchFood} setSearchFood={setSearchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food
          .filter((item) => {
            return item.name.toLowerCase().includes(searchFood.toLowerCase());
          })
          .map((item) => {
            return <FoodBox food={item} deleteFood={deleteFood} />;
          })}
      </Row>
    </div>
  );
}
export default App;
