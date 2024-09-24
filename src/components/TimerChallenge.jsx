import React, { useRef, useState } from 'react'
import ResultModel from './ResultModel'




const TimerChallenge = ({ ref, title, targetTime }) => {
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerimerStarted] = useState(false)
    let timer = useRef()
    const dialog = useRef()

    function handleStart() {
        setTimerimerStarted(true)
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.showModel()
        }, targetTime * 1000)
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
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inActive'}
                </p>
            </section>
        </>
    )
}


export default TimerChallenge
