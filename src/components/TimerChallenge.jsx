import React, { useState } from 'react'

const TimerChallenge = ({ title, targetTime }) => {
    const [timerExpired, setTimerExpired] = useState(false)
    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        return (
            <section className='challenge'>
                <h2>{title}</h2>
                {timerExpired && <p>you lost</p>}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={handleStart}>
                        start challenge
                    </button>
                </p>
                <p className=''>
                    Time is running...
                </p>
            </section>
        )
    }
}

export default TimerChallenge
