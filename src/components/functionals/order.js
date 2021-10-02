import React,{useContext} from 'react'
import { CartContext } from '../context';

export default function Order() {
    const { dishesCount, order, delDish, getTotalOrder } = useContext(CartContext);
    return (
        <div>
            {dishesCount() > 0 ? 
                order.map((o,i)=>(
                <div key={i}>
                    <h5>Order N° {i}</h5>
                    <li>Dish: {o.dish}</li>
                    <li>Quantity: {o.quantity}</li>
                    <li>Subtotal: {o.subTotal}</li>
                    <input 
                        type="button"
                        value="Delete dish"
                        onClick={()=> delDish(o.dish)}
                    />
                </div>
            ))
            :
                'Add dishes to your order'
            }

            {dishesCount() > 0 ? 
                <h5>Total: {getTotalOrder()}</h5>
                    :
                null
            }
            
        </div>
    )
}
