import { renderTree } from "..";

let state = {
    round: 1,
    activeUnit: '',

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

let counter = 0

export let whoIsFirts = () => {
    if (counter == 0) {
        let arrLength = state.units.length;
        let i =  Math.round(Math.random(arrLength));
    
        let firstUnit = state.units[i];
        state.activeUnit = firstUnit.name;
        counter++;
    } else {
        alert(state.activeUnit + ' ходит первым')
    }

    
    renderTree();
}

window.state = state;

export default state;