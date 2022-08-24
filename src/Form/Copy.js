import { useState } from "react";
import "./App.css"

function App() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);


  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { name: '', age: '' }
    setInputFields([...inputFields, newfield])
}
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
   
  };
  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
            <label> Name:
            <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
              /></label>
              <label> Age : 
               <input 
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(event) => handleFormChange(index, event)}
              /></label>
              <button onClick={submit}>Submit</button>
              <button onClick={addFields}>Add More..</button>
            </div>
          );
        })}
      </form>
     
     
    </div>
  );
}

export default App;
