import React, { useState } from 'react'

const App = () => {

  const [ans, setAns] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function addFn() {
    if (!num1 == "" && !num2 == "") {
      let ans = Number(num1) + Number(num2);
      setAns(ans);
    }
  }

  function subtractFn() {
    if (!num1 == "" && !num2 == "") {
      let ans = Number(num1) - Number(num2);
      setAns(ans);
    }
  }

  function multiplyFn() {
    if (!num1 == "" && !num2 == "") {
      let ans = Number(num1) * Number(num2);
      setAns(ans);
    }
  }

  function divideFn() {
    if (!num1 == "" && !num2 == "") {
      let ans = Number(num1) / Number(num2);
      setAns(ans.toFixed(4));
    }
  }
  return (
    <div className="h-[100vh] bg-amber-100">

      <div className="w-full h-full flex justify-center items-center">
        <div
          className="h-[50vh] w-[90vw] sm:w-[70vw] md:w-[50vw] bg-white shadow-2xl flex flex-col justify-center items-center">
          <div className="flex gap-2 justify-center">
            <input onChange={(e) => setNum1(e.target.value)} id="num1" type="number" className="border w-[25%] border-amber-300 outline-none px-2" />
            <input onChange={(e) => setNum2(e.target.value)} id="num2" type="number" className="border w-[25%] border-amber-300 outline-none px-2" />
            <span className="text-lg md:text-2xl">=</span>
            <p id="ans" className="text-lg md:text-2xl">{ans}</p>
          </div>
          <div className="mt-3">
            <button onClick={addFn}
              className="border border-amber-500 bg-amber-500 text-white px-3 py-1">+</button>
            <button onClick={() => subtractFn()}
              className="border border-amber-500 bg-amber-500 text-white px-3 py-1">-</button>
            <button onClick={() => multiplyFn()}
              className="border border-amber-500 bg-amber-500 text-white px-3 py-1">x</button>
            <button onClick={() => divideFn()}
              className="border border-amber-500 bg-amber-500 text-white px-3 py-1">/</button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default App