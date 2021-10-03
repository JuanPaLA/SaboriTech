import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';


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
            <span>Cantidad: </span>
            <Button variant="primary" 
              size="sm" 
              onClick={() => setCount(count - 1)} 
              className="dish-count-button"
            >
              -
            </Button>
            <span>{count}</span>
            <Button variant="primary" 
              size="sm" 
              onClick={() => setCount(count + 1)} 
              className="dish-count-button"
            >
              +
            </Button>
        </div>
    )
}
