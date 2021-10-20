import React,{useContext} from 'react'
import { CartContext } from '../context';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Order() {
    const { dishesCount, order, delDish, getTotalOrder } = useContext(CartContext);

    const confirmOrder = () => {
        console.log('confirm')
    }

    return (
        <div>
            {dishesCount() > 0 ? 
                order.map((o,i)=>(
                <div key={i} className="order-item">
                    <h5>Orden N° {i}</h5>
                    <p><strong>Plato:</strong> {o.dish} - <strong>Cantidad:</strong> {o.quantity} - <strong>Subtotal:</strong> ${o.subTotal}</p>
                    <Button variant="secondary"
                        size="sm"
                        onClick={()=> delDish(o.dish)}
                    >
                        Quitar plato
                    </Button>
                </div>
            ))
            :
               <Link to="/">Agrega platos a tu orden</Link> 
            }

            {dishesCount() > 0 ? 
                <div>
                    <h5>Total: ${getTotalOrder()}</h5>
                    <Button variant="primary"
                        onClick={()=> confirmOrder()}
                    >
                        Confirmar compra
                    </Button>
                </div>
                    :
                null
            }
            
        </div>
    )
}
