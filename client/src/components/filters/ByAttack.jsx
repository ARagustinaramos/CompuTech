import React from 'react'
import { useDispatch } from 'react-redux'
import { orderAttack } from '../../redux/actions/actions'
const ByAttack = () => {
    const dispatch = useDispatch()

    const handlerOrderAttack = (event) => {
        event.preventDefault();
        if (event.target.value !== 'ataque') {
            dispatch(orderAttack(event.target.value));

        }
    };

    return (
        <div>
            <select onChange={(event) => handlerOrderAttack(event)}>
                <option value={'ataque'}>Ataque</option>
                <option value={'min'}>min</option>
                <option value={'max'}>max</option>
            </select>
        </div>
    )
}

export default ByAttack