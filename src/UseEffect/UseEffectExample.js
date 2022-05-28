import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectExample = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
            setData(res.data[0].email);
            console.log("API was called.")
        })
    }, []);

  return (
    <div>
        Hello world 
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </div>
  )
}

export default UseEffectExample