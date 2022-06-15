import { Divider, Input } from 'antd';
import React, { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('hamburgesa');
  const [image, setImage] = useState('some picture');
  const [calories, setCalories] = useState(100);
  const [servings, setServings] = useState(1);

  const handleChange = (event) => {
    const currentValue = event.target.value;

    switch (event.target.name) {
      case 'name':
        setName(currentValue);
        break;
      case 'image':
        setImage(currentValue);
        break;
      case 'calories':
        setCalories(currentValue);
        break;
      case 'servings':
        setServings(currentValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = { name, image, calories, servings };
    props.addFood(newFood);
    console.log('submitted: ', newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div>
      <Divider>Add Food Entry</Divider>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Input value={name} type="text" name="name" onChange={handleChange} />

        <label>Image</label>
        <Input value={image} type="text" name="image" onChange={handleChange} />

        <label>Calories</label>
        <Input
          value={calories}
          type="number"
          name="calories"
          onChange={handleChange}
        />

        <label>Servings</label>
        <Input
          value={servings}
          type="number"
          name="servings"
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
