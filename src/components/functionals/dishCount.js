import React, {useState, useEffect} from 'react'


export default function DishCount({handleCounterToChild}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 0) {
          setCount(0);
        } else {
          if (count > 10) {
            setCount(10);
          }
        }
        handleCounterToChild(count);
      }, [count]);

    return (
        <div>
            <input 
                type="button" 
                value="+" 
                onClick={() => setCount(count + 1)} 
            />
                {count}
            <input 
                type="button" 
                value="-" 
                onClick={() => setCount(count - 1)} />
        </div>
    )
}
