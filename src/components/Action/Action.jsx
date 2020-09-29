import React from 'react';
import { useSkill } from '../../state/state';
import classes from './Action.module.css'

const Action = (props) => {
    let units = props.units;
    let unit1 = units[0];
    let unit2 = units[1];
    let activeUnit = props.activeUnit;

    let redCounter1 = (100 - unit1.hp) * 3;
    let redCounter2 = (100 - unit2.hp) * 3;

    let skill = props.skills;

    let unit1Click = (skill) => {
        let enemyUnit = props.units[1];

        if (activeUnit === unit1.name) {
            props.useSkill(skill, enemyUnit);
            props.changeUnit();
        } else {
            alert('Не ваш ход')
        }

    }

    let unit2Click = (skill) => {
        let enemyUnit = props.units[0]

        if (activeUnit === unit2.name) {
            props.useSkill(skill, enemyUnit);
            props.changeUnit();
        } else {
            alert('Не ваш ход')
        }
    }


    return (
        <div className={classes.action}>
            <div className={classes.robot}>
                <p className={classes.title}>{unit1.name}</p>
                <p>Очки: {props.leftPoint}</p>
                <div>
                    <button onClick={(e)=>unit1Click(skill[0])}>{skill[0].name}</button>
                    <button onClick={(e)=>unit1Click(skill[1])}>{skill[1].name}</button>
                    <button onClick={(e)=>unit1Click(skill[2])}>{skill[2].name}</button>
                </div>
                <div className={classes.helth1}>
                    <div style={{ width: redCounter1 }} className={classes.red}></div>
                    <div className={classes.green}>
                        <p className={classes.helthName}>Здоровье: {unit1.hp}</p>
                    </div>
                </div>
            </div>

            <div className={classes.robot}>
                <p className={classes.title}>{unit2.name}</p>
                <p>Очки: {props.rightPoint}</p>
                <div>
                    <button onClick={(e)=>unit2Click(skill[0])}>{skill[0].name}</button>
                    <button onClick={(e)=>unit2Click(skill[1])}>{skill[1].name}</button>
                    <button onClick={(e)=>unit2Click(skill[2])}>{skill[2].name}</button>
                </div>
                <div className={classes.helth2}>
                    <div style={{ width: redCounter2 }} className={classes.red}></div>
                    <div className={classes.green}>
                        <p className={classes.helthName}>Здоровье: {unit2.hp}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Action