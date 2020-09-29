import React from 'react';
import classes from './Info.module.css'

const Rules = (props) => {
    return (
        <div>
            <h1 className={classes.title}>Robot Wars</h1>

            <h4>Раунд: {props.round}</h4>
            <h4>Ход: {}</h4>
            <button>Кто ходит первым?</button>
        </div>
    )
}

export default Rules