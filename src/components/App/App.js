import Player from "../Player/Player";
import TimerChallenge from "../TimerChallenge/TimerChallenge"

import "./App.css"

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" target={1}/>
        <TimerChallenge title="Not ease" target={5}/>
        <TimerChallenge title="Getting tough" target={10}/>
        <TimerChallenge title="Pros only" target={15}/>
      </div>
    </>
  );
}

export default App;
