import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodJSON from './foods.json';
import { useState } from 'react';
import useItems from 'antd/lib/menu/hooks/useItems';

function App() {
  const [food, setFood] = useState(foodJSON);
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((item, index) => {
          return (
            <Col>
              <Card
                title={item.name}
                style={{ width: 230, height: 300, margin: 10 }}
              >
                <img src={item.image} height={60} alt="food" />
                <p>Calories: {item.calories}</p>
                <p>Servings: {item.servings}</p>
                <p>
                  <b>Total Calories: {item.calories * item.servings} </b> kcal
                </p>
                <Button type="primary"> Delete </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default App;
