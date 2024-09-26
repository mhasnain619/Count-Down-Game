import React, { useRef, useState } from 'react'
import ResultModel from './ResultModel.jsx'



const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);
    const timerIsAActive = timeRemaning > 0 && timeRemaning << targetTime * 1000;
    if (timeRemaning <= 0) {
        clearInterval(timer.current)
        setTimeRemaning(targetTime * 1000)
        dialog.current.open()
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaning(prevTimeRemaning => prevTimeRemaning - 10)
        }, 10)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModel ref={dialog} targetTime={targetTime} result='lost' />
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
