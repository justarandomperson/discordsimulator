import './MessageBox.css'

const  MessageBox = props => {
    return (
    <div className ="messageContainer">
    <img className= "profile-picture" src={props.profilepic} alt="profile-pic"/>
    <div className ="messageContent">
        <div className="messageInformation">
            <h3>{props.username}</h3> 
            <h3 className="messageTime">{props.time}</h3>
        </div>
        <h2 className="text">{props.text}</h2>
    </div>
    </div>
    )
} 

export default MessageBox