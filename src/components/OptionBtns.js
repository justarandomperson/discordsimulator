const OptionBtns = props => {
  const  selectOption = option => (event) => {
      const message = {
          person: "you",
          text: option.text,
      }
      if (!option.hasOwnProperty('delay')) {
        message.delay = 1000
      } else {
        message.delay = option.delay
      }
      if (option.hasOwnProperty('nextMessage')) {
        message.nextMessage = option.nextMessage
      }
      if (option.hasOwnProperty('ending')) {
        message.ending = option.ending
      }
      if (option.hasOwnProperty('condition')) {
        message.condition = option.condition
      }
      props.addNewMessage(message)
  }

  return (
    <div className="optionBtns">
      {Object.keys(props.options).map((option, index) => {
        return <button key={index} onClick={selectOption(props.options[option])} className="btn">{props.options[option].display}</button>
      })}
    </div>
  )
}

export default OptionBtns