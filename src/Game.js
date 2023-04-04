import React, { useState} from "react"
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Messages from "./components/Messages"
import Menu from './components/MenuScreen'
import Extras from './components/ExtrasScreen'


const Game = () => {
    const endingsUnlocked = localStorage.getItem('endingsUnlocked');
    const [character, SetCharacter] = useState("default")
    const [player, SetPlayer] = useState("default")
    if (!endingsUnlocked) {
        localStorage.setItem("endingsUnlocked", "")
    }
    return (
        <Router>
            <main>
                <Routes>
                    <Route path = "/menu" exact element={<Menu character = {character}/>}/>
                    <Route path="/game" exact element={<Messages character = {character} player={player}/>}/>
                    <Route path="/extras" exact element={<Extras SetCharacter = {SetCharacter} SetPlayer = {SetPlayer}/>}/>
                    <Route path="/" element={<Navigate to="/menu" />} />
                </Routes>
            </main>
        </Router>
    );
}

export default Game