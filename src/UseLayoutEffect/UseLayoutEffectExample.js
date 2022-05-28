import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffectExample = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        // console.log("UseLayoutEffect");
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        // console.log("UseEffect");
        inputRef.current.value = "Hello";
    }, []);
    
  return (
    <div>
          <input ref={inputRef} value="Manish" style={{width : 400, height : 40}}/>
    </div>
  )
}

export default UseLayoutEffectExample