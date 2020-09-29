import { renderTree } from "..";

let state = {
    round: 1,
    activeUnit: '',
    winner: '--',

    units: [
        {name: 'Scorpion', hp: 100, superPower: true, point: 0},
        {name: 'Subzero', hp: 100, superPower: true, point: 0},
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
        alert(state.activeUnit + ' ходит')
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
            state.units[1].point++
        } else {
            state.units[0].point++
        }
    
        state.units[0].hp = 100;
        state.units[1].hp = 100;
    }
    
    if (state.units[0].point == 2) {
        state.winner = state.units[0].name
    } else if (state.units[1].point == 2) {
            state.winner = state.units[1].name
        } else if (state.units[0].point == 1 && state.units[1].point ==  1) {
            state.winner = 'Ничья'
    }

    if (state.round == 3) {
        setTimeout(() => reloadPage(), 1000);
    }
    renderTree();
}

let reloadPage = () => {
    alert('Конец игры! Страница будет перезагружена')
    window.location.reload(); 
}


export let useSkill = (skill, unit) => {
    let damage = skill.damage;
    
    unit.hp -= damage;

    checkHealth();
}

export let emptySuperPower = (unit) => {
    unit.superPower = false;

    renderTree();
}


window.state = state;
export default state;