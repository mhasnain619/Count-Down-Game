import React, { useRef, useState } from 'react'
import ResultModel from './ResultModel.jsx'



const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);
    const timerIsAActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;
    if (timeRemaning <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }
    function handleReset() {
        setTimeRemaning(targetTime * 1000)

    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaning(prevTimeRemaning => prevTimeRemaning - 10)
        }, 10)
    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }

    return (
        <>
            <ResultModel ref={dialog} onReset={handleReset} targetTime={targetTime} remaningTime={timeRemaning} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsAActive ? handleStop : handleStart}>
                        {timerIsAActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerIsAActive ? 'active' : undefined}>
                    {timerIsAActive ? 'Time is running...' : 'Timer inActive'}
                </p>
            </section>
        </>
    )
}


export default TimerChallenge
