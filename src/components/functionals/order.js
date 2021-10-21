import React,{useContext} from 'react'
import { CartContext } from '../context';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import authHeader from '../../services/authentication/auth-header';

export default function Order() {
    const { dishesCount, order, delDish, getTotalOrder, user } = useContext(CartContext);

    const confirmOrder = (event) => {
        event.preventDefault();

        const new_order = {
            id: uuidv4(),
            nombreCliente: user.username,
            notasDeOrden: 'sin desarrollar',
            platillos: order,
            fechaHoraCreacion: new Date(),
            estado: 'sin especificar',
            totalOrden: getTotalOrder(),
            totalMasImpuesto: getTotalOrder() + getTotalOrder() * 0.21, 
        }

        let options = {
            method: 'POST',
            headers: {
                'Authorization' : authHeader().Authorization,
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(new_order)
        }

        console.log(options);

        fetch(`/api/orden`, options)
        .then(response => response.json())
        .then(data => {
            if (data) {
                // dish created successfully (go back to home)
                // history.push("/");
                console.log(data);
            } 
        })
        .catch(e => {
            console.log('ERROR');
        })
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
                    <h5>Total: ${Math.round(getTotalOrder())}</h5>
                    <Button variant="primary"
                        onClick={(e)=> confirmOrder(e)}
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
