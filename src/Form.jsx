import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
    const [numbers, setNumbers] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState(null);

    const handleText = ()=> {
        // updating state as the user inputs text
    }

    const handleSelect = () => {
        // updating state as the user selects an option
    }

    const handleSubmit =() => {
        // handle the values and operations in order to update result 

        // you can have helper functions 
            // maybe you have a function that adds, or gets the average or gets the mode 
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={numbers} onChange={handleText}/>
        <select id="operation" name="operation" onChange={handleSelect}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </div>
  );
}

export default Form;