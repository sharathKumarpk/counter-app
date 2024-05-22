import { useState } from "react";


function App() {
  const [count,setCount]=useState(0)
  const increment = ()=>{
    if (count<10){
      setCount(count+1)
    }else {
      setCount(count)
    }
 
  }
  const reset = () =>{
    setCount(0)
  }
  const decrement=()=>{
    if (count>1){
      setCount(count-1)
    }else{
      setCount(count)
    }
    
  }

  
  return(
  <div className="bg-black min-h-screen flex flex-col text-center justify-center items-center gap-10">
    <span className="text-white text-7xl">{count}</span>
    <div className="flex  gap-10  justify-center items-center">

<button onClick={increment} className="bg-green-500 gap-16 px-4 py-2 rounded-md">increment</button>
<button onClick={reset} className="bg-yellow-500 gap-16 px-4 py-2 rounded-md">reset</button>
<button onClick={decrement} className="bg-orange-500 gap-16 px-4 py-2 rounded-md">decrement</button>
</div>
  </div>
   
  );
}

export default App;
