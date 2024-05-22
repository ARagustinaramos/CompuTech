import React from 'react'
import { useDispatch } from 'react-redux'
import { orderPrice } from '../../redux/actions/actions'
const ByPrice = () => {
    const dispatch = useDispatch()

    const handlerOrderPrice = (event) => {
        event.preventDefault();
        if (event.target.value !== 'price') {
            dispatch(orderPrice(event.target.value));

        }
    };

    return (
        <div>
            <select onChange={(event) => handlerOrderPrice(event)}>
                <option value={'price'}>Ataque</option>
                <option value={'min'}>min</option>
                <option value={'max'}>max</option>
            </select>
        </div>
    )
}

export default ByPrice