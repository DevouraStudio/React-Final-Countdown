import {useState, useRef} from "react"

import "./Player.css"

export default function Player() {
  const [playerName, setPlayerName] = useState()

  const inputValue = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setPlayerName(inputValue.current.value)
    inputValue.current.value = ""
  }
  
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown"}!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} required/>
        <button>Set Name</button>
      </form>
    </section>
  );
}
