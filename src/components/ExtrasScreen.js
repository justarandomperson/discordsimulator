import {Link } from "react-router-dom"

import './ExtrasScreen.css'


const ExtrasScreen = props => {
    const endingsUnlocked = localStorage.getItem("endingsUnlocked")
    let endingsUnlockedList = []
    if (endingsUnlocked) { 
        endingsUnlockedList = JSON.parse(endingsUnlocked)
    } 
    const endings = ["Mean Ending","Cheater Ending","Good Ending", "amogus Ending", "Boring Ending", "Nagito Komaeda Ending", "Bully Ending", "What? Ending", "Monkey Ending", "Sans Dog Ending", "True Ending", "Spamton Neo Ending", "OrangeNOrange and Orange Ending", "Dead Ending"]
    const characters = ["Sans", "Tinnocky", "OrangeNOrange","RTXVillager", "default", "Nagito", "Monokuma", "Papyrus","MONKEYMAN", "SansDog"]

    const SetCharacter = (index, type) => (event) => {
        event.preventDefault();
        const character = characters[index]
        if (character !== "Sans" && character !== "Tinnocky") {
            if (endingsUnlockedList.find(key => key === endings[index])){
                if (type === "Character") {
                    props.SetCharacter(characters[index], "character")
                    window.alert("You are now dating "+character +".");
                } else {
                    props.SetPlayer(characters[index], "character")
                    window.alert("You are now "+character +".");
                }
            } else {
                window.alert("You haven't unlocked "+character +" yet.");
            }
          } else 
          { if (type === "Character") {
            props.SetCharacter(character); window.alert("You are now dating "+character +".");
          } else {
            props.SetPlayer(character); window.alert("You are now "+character +".");
          }
            
        }
    }
    return (
        <div className="ExtrasScreen">
            <div className="UnlockedEndingsList">
            <h2>Unlocked Endings:</h2>
            <ul>
            {endings.map((ending, index) => {
                if (endingsUnlockedList.find(key => key === ending)) {
                    return <li key={index}>{index+1}.{ending}</li>
                } 
                else {
                    return <li key= {index}>{index+1}.???</li>
                }
            })}
            </ul>
            </div>

            <div className="characterList">
                <h2>Characters: </h2>
                <ul>
                    {characters.map((character, index)=> {
                        return <li key={index}>{character} <div className="characterBtns"><button onClick={SetCharacter(index, "Character")}>Date</button><button onClick={SetCharacter(index, "you")}>Change</button></div></li>
                    })}
                </ul>
            </div>
            <Link to= "/menu" className='menuBtn btn'>MENU</Link>
        </div>
    )
}

export default ExtrasScreen