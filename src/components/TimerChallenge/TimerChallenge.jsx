import {useState, useRef} from "react"

import "./TimerChallenge.css"

import ResultModal from "../ResultModal/ResultModal"

export default function TimerChallenge({title, target}) {

    const [remainingTime, setRemainingTime] = useState(target * 1000)

    const timer = useRef()

    const dialog = useRef()

    const timerIsActive = remainingTime < target * 1000 && remainingTime > 0 

    if (remainingTime <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    const handleStart = () => {
        timer.current = setInterval(() => setRemainingTime((preRemainingTime) => preRemainingTime - 10), 10)
    }

    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.open()
    }

    const handleReset = () => {
        setRemainingTime(target * 1000)
    }

return (
    <>
    <ResultModal remainingTime={remainingTime} targetTime={target} onReset={handleReset} ref={dialog} />
    <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
    {target} second{target > 1 ? "s" : ""}
    </p>
    <div>
        <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
    </div>
    <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running..." : "Timer is inactivve"}
    </p>
    </section>
    </>
)
}