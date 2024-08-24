import { useState } from "react";
import "./Form.css";

function Form() {
  const [inputValues, setInputValues] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")


  const handleSelect = (e) => {
    setOperation(e.target.value)
  }
  
  const isValid = (array,operation) => {
    
  }
  const handleValueChange = (e) => {
    // setInputValues(e.target.id === "values" ? [e.target.value] : null)
    setInputValues(e.target.value)
    console.log(inputValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const arr = inputValues.split(",")
    function sum (arr) {
      let total = 0
      for ( let num of arr){
        total += Number(num)
      }
      setResult(total)
    }
    function subtract (arr) {
      let total = null
      if(arr.length < 2){
        setResult("Error: enter two or more values")
      } else {
        let total = Number(arr[0])
        for (let i=1; i<arr.length; i++){
          total -= Number(arr[i])
        }
        setResult(total)
      }
    }
    function multiply (arr) {
      let total = 1
      for ( let num of arr){
        total = total * Number(num)
      }
      setResult(total>1 ? total : 0)
    }
    function divide (arr) {
      // let total = 0
      if(arr.length < 2){
        setResult("Error: enter two or more values (x / y)")
      } else {
        let total = Number(arr[0])
        for (let i=1; i<arr.length; i++){
          total /= Number(arr[i])
        }
        setResult(total)
      }
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

    if (operation === "sum"){
      return sum(arr)
    }
    if (operation === "subtract"){
      return subtract(arr)
    }
    if (operation === "divide"){
      return divide(arr)
    }
    if (operation === "average"){
      return average(arr)
    }
    if (operation === "multiply"){
      return multiply(arr)
    }
    if (operation === "mode"){
      return mode(arr)
    }
    clearInput()
  }
  
  const clearInput = () => {
    setInputValues("")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(e)
        clearInput()
        }}>
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
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </div>
  );
}

export default Form;