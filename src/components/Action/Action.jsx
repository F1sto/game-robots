import React from 'react';
import classes from './Action.module.css'

const Action = (props) => {
    let units = props.units;
    let robot1 = units[0];
    let robot2 = units[1];


    return (
        <div className={classes.action}>
            <div className={classes.robot}>
                <p className={classes.title}>{robot1.name}</p>
                <div>
                    <button>Удар рукой</button>
                    <button>Удар ногой</button>
                    <button>Супер-способность</button>
                </div>
                <p className={classes.helth1}>Здоровье: {robot1.hp}</p>
            </div>

            <div className={classes.robot}>
                <p className={classes.title}>{robot2.name}</p>
                <div>
                    <button>Удар рукой</button>
                    <button>Удар ногой</button>
                    <button>Супер-способность</button>
                </div>
                <p className={classes.helth2}>Здоровье: {robot2.hp}</p>
            </div>
        </div>
    )
}

export default Action