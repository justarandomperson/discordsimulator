import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MessageBox from './MessageBox'
import OptionBtns from './OptionBtns';
import EndingScreen from './EndingScreen'
import AllMessages from '../AllMessages'
import './OptionBtns.css'

let hour = "10"
let minutes = "00"
let messageCount = 1

let end = -1

const Messages = props => {
    let Characterpfp = require("../images/"+props.character+".jpg")
    let Playerpfp = require("../images/"+props.player+".jpg")
    const firstMessage = {
        person: "character",
        username: props.character,
        profilepic: Characterpfp,
        text: "hello",
        time: "Today at 10:00 PM",
        options: {
            one: {
                text: "hi",
                nextMessage: 0
            },
            two: {
                text: "option 2",
                nextMessage: 1
            },
            three: {
              text: "option 3",
              nextMessage: 2
          }
        }
    }
    const [messages, setMessages] = useState([firstMessage])
    
    const restartGame = () => {
      end = -1
      hour = "10"
      minutes = "00"
      messageCount = 1
      setMessages([firstMessage])
    }
    const changeTime = () => {
      if (minutes.charAt(1) === '9') {
        minutes = (parseInt(minutes.charAt(0))+1).toString() + "0"
      } else {
        minutes = minutes.charAt(0)+(parseInt(minutes.charAt(1))+1).toString()
      }

      if (minutes.charAt(0) === '6') {
        hour = hour.charAt(0)+(parseInt(hour.charAt(1))+1).toString()
        minutes = "00"
      }
    }
    const addNewMessage = message => {
      if (message.person !== 'discord') {
        changeTime()
        message.time = "Today at " + hour + ":" + minutes + " PM"
      } else {
        message.profilepic = require("../images/default.jpg")
      }
      if (!message.hasOwnProperty("person")) {
        message.person = "character"
      }
      switch (message.person) {
        case "character":
          message.username = props.character;
          message.profilepic = Characterpfp;
          break;
        case "you":
          message.username = "you";
          message.profilepic = Playerpfp;
          break;
        case "discord":
          message.username = "discord";
          message.profilepic = require("../images/default.jpg");
          break;
        default:
          message.username = message.person
          message.profilepic = require("../images/"+message.person+".jpg")
          break
      }
      messageCount+=1
      if (messageCount > 10) {
        setMessages(prevMessages => prevMessages.slice(2,messageCount))
        messageCount = messageCount-10
      }
      if (end === -1) {
          setMessages(prevMessages => prevMessages.concat(message));
      }
      if (message.hasOwnProperty('ending')) {
        setTimeout(function() {
          end = message.ending
          setMessages(prevMessages => {})
        }, 2000) 
      }
      if (message.hasOwnProperty("nextMessage") && end === -1) {
        if (!message.hasOwnProperty('delay')) {
          message.delay = 1000
        }
        if (message.hasOwnProperty("condition")) {
          if (props.character === message.condition.character) {
            message.nextMessage = message.condition.nextMessage 
          }
        }
        setTimeout(function() {
          addNewMessage(AllMessages.at(message.nextMessage))
        }, message.delay)
      }
    }
    if (end === -1) {
      if (messages.at(-1).hasOwnProperty('options')) {
        let options = messages.at(-1).options
        for (let key in options) {
          let option = options[key]
          if (!option.hasOwnProperty('display')) {
            option.display = option.text
          }
        }
        return (
          <React.Fragment>
            <div>
              {messages.map((message,index)=> {
              return <MessageBox key = {index} text = {message.text} username = {message.username} profilepic = {message.profilepic} time = {message.time}/>
              })}
            </div>
            <Link to= "/menu" className='menuBtn btn' onClick={restartGame}>MENU</Link>
            <OptionBtns options={options} addNewMessage={addNewMessage}/>
          </React.Fragment>
        )
    }
    return (
      <React.Fragment>
      <div>
        {messages.map((message, index) => {
          return <MessageBox key = {index} text = {message.text} username = {message.username} profilepic = {message.profilepic} time = {message.time}/>
         })}
      </div>
      </React.Fragment>
      
    )
    } else {
      let buttonText = "TRY AGAIN"
      if (end === 4 || end === 5) {
        buttonText = "RE PLAY"
      }
      return (
        <EndingScreen end={end} buttonText = {buttonText} restartGame={restartGame}/>
      )
    } 
}

export default Messages;  
