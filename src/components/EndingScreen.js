import {Link , Navigate} from 'react-router-dom'
import AllEndings from '../AllEndings'
import './ending.css'

let endingsUnlocked =  []
const EndingsData = localStorage.getItem('endingsUnlocked')

if (EndingsData) {
   endingsUnlocked = JSON.parse(EndingsData)
}

const endings = ["Good Ending","amogus Ending", "Boring Ending", "Nagito Komaeda Ending", "Bully Ending", "What? Ending", "Sex Ending", "Sans Dog Ending"]
const characters = ["OrangeNOrange","RTXVillager", "default", "Nagito", "Monokuma", "Papyrus", "SEXMAN", "SansDog"]


const EndingScreen = props => {
    const ending = AllEndings.at(props.end)
    if (ending.hasOwnProperty('unlock') && !(endingsUnlocked.find(key => key === endings[ending.unlock]))) {
        ending.reward = "You have unlocked "+characters[ending.unlock]+"."
    } else {
        ending.reward = ""
    }
    if (!endingsUnlocked.find(key => key === ending.title)) {
        endingsUnlocked.push(ending.title)
        localStorage.setItem('endingsUnlocked', JSON.stringify(endingsUnlocked))
    }
    if (ending.title === "Rickroll Ending") {
        return <Navigate to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />;
    }
    return (
        <div className="endingScreen">
            <h1>{ending.title}</h1>
            <h2>{ending.description}</h2>
            <h2>{ending.suggestion}</h2>
            <h3>{ending.reward}</h3>
            <div className='options'>
                <button className="btn" onClick={props.restartGame} >{props.buttonText}</button>
                <Link to= "/menu" className='btn' onClick={props.restartGame}>MENU</Link>
            </div>
        </div>
    )
}

export default EndingScreen