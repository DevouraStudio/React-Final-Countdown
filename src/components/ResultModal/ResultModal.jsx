import {useImperativeHandle, useRef} from "react"
import {createPortal} from "react-dom"

import "./ResultModal.css"

export default function ResultModal({remainingTime, targetTime, onReset, ref}) {

const dialog = useRef()

const userLost = remainingTime <= 0

const formattedRemainingTime = (remainingTime/1000).toFixed(2)

const score = Math.round((1 - (remainingTime/(targetTime * 1000))) * 100)

useImperativeHandle(ref, () => {
    return {
        open: function() {dialog.current.showModal()}
    }
})

return createPortal(
    <dialog className="result-modal" onClose={onReset} ref={dialog}>
        {userLost && <h2>Unfortunately, you lost.</h2>}
        {!userLost && <>
        <progress value={score} max={100} id="score-progress">Your score: {score}</progress>
        <label for="score-progress">Your score: {score} / 100</label>
        </>
        }
        <p>The target time was <strong>{targetTime} {targetTime > 1 ? "seconds" : "second"}</strong>.</p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>.</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById("modal")
)    
}