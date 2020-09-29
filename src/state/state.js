import { renderTree } from "..";

let state = {
    round: 1,
    activeUnit: '',
    winner: '--',

    leftPoint: 0,
    rightPoint: 0,

    rightSuperPower: 0,
    leftSuperPower: 0,
   

    units: [
        {name: 'Scorpion', hp: 100},
        {name: 'Subzero', hp: 100},
    ],

    skills: [
        {name: 'Удар рукой', damage: 20},
        {name: 'Удар ногой', damage: 40},
        {name: 'Супер-способность', damage: 80}
    ]
}

let whoFirstCounter = 0

export let whoIsFirts = () => {
    if (whoFirstCounter == 0) {
        let arrLength = state.units.length;
        let i =  Math.round(Math.random(arrLength));
    
        let firstUnit = state.units[i];
        state.activeUnit = firstUnit.name;
        whoFirstCounter++;
    } else {
        alert(state.activeUnit + ' ходит первым')
    } 
    renderTree();
}

export let changeUnit = () => {
    if (state.activeUnit === state.units[0].name) {
        state.activeUnit = state.units[1].name;
    } else {
        state.activeUnit = state.units[0].name
    }
}


let checkHealth = () => {
    if (state.units[0].hp <= 0 || state.units[1].hp <= 0) {
        state.round++;
    
        if (state.units[0].hp == 0) {
            state.rightPoint++
        } else {
            state.leftPoint++
        }
    
        state.units[0].hp = 100;
        state.units[1].hp = 100;
    }
    
    if (state.leftPoint == 2) {
        state.winner = state.units[0].name
    } else if (state.rightPoint == 2) {
            state.winner = state.units[1].name
        } else if (state.leftPoint == 1 && state.rightPoint ==  1) {
            state.winner = 'Ничья'
    }
    renderTree();
}


export let useSkill = (skill, unit) => {
    let damage = skill.damage;
    
    unit.hp -= damage;

    checkHealth();
}


window.state = state;
export default state;