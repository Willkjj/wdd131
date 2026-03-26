const characters = [
    {
        id: 0,
        name: 'Byron Joan, The Warrior',
        Strength: 16,
        Dexterity: 14,
        Constitution: 15,
        Intelligence: 9,
        Wisdom: 11,
        Charisma: 13,
    },
    {
        id: 1,
        name: 'Delna Tas, Battle-mage',
        Strength: 8,
        Dexterity: 12,
        Constitution: 12,
        Intelligence: 16,
        Wisdom: 14 ,
        Charisma: 13,
    },
    {
        id: 2,
        name: 'Tyla, Singer of Songs',
        Strength: 12,
        Dexterity: 15,
        Constitution: 13,
        Intelligence: 10,
        Wisdom: 8,
        Charisma: 17,    
    },
    {
        id: 3,
        name: 'Sylena Greywaters, Master Thief',
        Strength: 10,
        Dexterity: 17,
        Constitution: 14,
        Intelligence: 12,
        Wisdom: 13,
        Charisma: 9,
    }
]
const dice = [
    {
        name: "d4",
        number: 4
    },
    {
        name: "d6",
        number: 6
    },
    {
        name: "d8",
        number: 8
    },
    {
        name: "d10",
        number: 10
    },
    {
        name: "d12",
        number: 12
    },
    {
        name: "d20",
        number: 20
    }
]
function initialRender() {
    renderCharacterSelect()
    renderStatSelect(0)
    renderRollerStats(0)
    

}
function getModifier(stat) {
    return Math.floor((stat - 10) / 2)
}
function diceRoll(die) {
    return Math.floor(Math.random() * die + 1) 
}
function renderCharacterSelect() {
    let characterSelect = document.querySelector('.characterSelect')
    characterSelect.innerHTML = ``
    dropdown = document.createElement("select")
    dropdown.setAttribute("name","Character Select")
    
    dropdown.addEventListener('change', () => {
        selectedCharacter = characters.find(
            char => char.name === dropdown.value
        );
        currentkey = selectedCharacter["id"]
        renderRollerStats(currentkey)
        renderStatSelect(currentkey)
    })

    renderCharacterOptions(dropdown)

    characterSelect.appendChild(dropdown)

}
function renderCharacterOptions(dropdown) {
    characters.forEach(character => {
        let option = document.createElement("option")
        option.value = character["name"]
        option.textContent = character["name"]
        dropdown.appendChild(option)
    });
}
function renderRollerStats(currentkey) {
    let rollerStats = document.querySelector(".stats")
    let character = characters[currentkey] 
    rollerStats.innerHTML = ``
    Object.keys(character).forEach(stat => {
        if (stat == "name") return;
        if (stat == "id") return;
        let button = document.createElement("button")
        button.innerHTML = `${stat}`
        button.addEventListener('click', () =>{
            modifer = getModifier(character[stat])
            roll = diceRoll(20)
            if (modifer < 0) {
                modifer = Math.abs(modifer)
                logInOutput(`${roll} - ${modifer} = ${roll - modifer}`)
            } else {
                logInOutput(`${roll} + ${modifer} = ${modifer + roll}`)

            }
        })

        rollerStats.appendChild(button)
    });

}
function renderStatSelect(currentkey) {
    let statSelect = document.querySelector('.statSelect')
    statSelect.innerHTML = ``
    select = document.createElement("select")
    select.setAttribute("name","Stat Select")
    character = renderStatOptions(select,currentkey)
    renderRollerDice("Strength",character)

    select.addEventListener("change",() => {
        let selectedStat = select.value
        renderRollerDice(selectedStat,character)
    })

    statSelect.appendChild(select)    
}
function renderStatOptions(dropdown,currentkey) {
    let character = characters[currentkey]
    Object.keys(character).forEach(item => {
        if (item == "name") return;
        if (item == "id") return;
        option = document.createElement("option")
        modifer = getModifier(character[item])
        if (modifer < 0) (modifer = `-${Math.abs(modifer)}`)
        else (modifer = `+${modifer}`)

        option.value = item
        option.innerHTML = `${item} (${modifer})`
        dropdown.appendChild(option)
    });
    return character
}
function renderRollerDice(currentStat,character) {
    let rollerStats = document.querySelector(".dice")
    rollerStats.innerHTML = ``
    dice.forEach(die => {
        button = document.createElement("button")
        button.innerHTML = die["name"]
        button.addEventListener("click", () =>{
            roll = diceRoll(die["number"])
            currentModifier = getModifier(character[currentStat])
            if (currentModifier < 0) (logInOutput(`${roll} - ${Math.abs(currentModifier)} = ${roll + currentModifier} `)) 
            else (logInOutput(`${roll} + ${currentModifier} = ${roll + currentModifier} `))
            
        })

        rollerStats.appendChild(button)
    });

}
function logInOutput(message) {
    let outputBox = document.querySelector(".outputBox")
    let p = document.createElement("p")
    p.innerHTML = message
    outputBox.appendChild(p)
}
initialRender()
