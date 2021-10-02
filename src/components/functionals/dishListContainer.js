import React from 'react'
import DishList from './dishList'
export default function DishListContainer(props) {
    return (
        <div>
            <h5>Welcome {props.user} to our finest dishes selection</h5>
            <DishList/>
        </div>
    )
}
