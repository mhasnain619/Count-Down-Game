import React, { useRef, useState } from 'react'




const TimerChallenge = ({ title, targetTime }) => {
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerimerStarted] = useState(false)
    let timer = useRef()

    function handleStart() {
        setTimerimerStarted(true)
        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>you lost</p>}
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inActive'}
            </p>
        </section>
    )
}


export default TimerChallenge
