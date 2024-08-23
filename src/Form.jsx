import { useState } from "react";
import "./Form.css";

function Form() {
  const [inputValues, setInputValues] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")


  const handleSelect = (e) => {
    setOperation(e.target.value)
  }
  
  const calculate = (array,operation) => {
    
  }
  const handleValueChange = (e) => {
    // setInputValues(e.target.id === "values" ? [e.target.value] : null)
    setInputValues(e.target.value)
  }
  
  function sum (arr) {
    let total = 0
    for ( let num of arr){
      total += Number(num)
    }
    setResult(total)
  }

  function average (arr) {
    let total = 0
    for (let num of arr){
      total += Number(num)
    }
    setResult(total/arr.length)
  }

  function mode (arr) {
    let hash = {}
    for (let i = 0; i<arr.length; i++){
      hash[arr[i]] = Number(hash[arr[i]]) ? Number(hash[arr[i]]) + 1 : 1 
    }
    let currentMaxCount = -Infinity
    let currentMax = 0

    for (let val in hash){
      if (currentMaxCount < hash[val]){
        currentMaxCount = hash[val]
        currentMax = val
      }
    }
    setResult(currentMax) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const arr = inputValues.split(",")

    if (operation === "sum"){
      return sum(arr)
    }
    if (operation === "average"){
      return average(arr)
    }
    if (operation === "mode"){
      return mode(arr)
    }
    clearInput()
  }
  
  const clearInput = (e) => {
      // e.target.id.value = ""
      setInputValues(null)
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={inputValues} onChange={handleValueChange}/>
        <select id="operation" name="operation" onChange={handleSelect}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="multiply">multiply</option>
          <option value="divide">divide -- [a/b]</option>
          <option value="subtract">subtract [a - b]</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit"  >Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </div>
  );
}

export default Form;