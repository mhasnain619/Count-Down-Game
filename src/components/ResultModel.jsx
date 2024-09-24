import React from 'react'

const ResultModel = ({ ref, result, targetTime }) => {
    return (
        <dialog ref={ref} className='result-model' open>
            <h2>Your {result}:</h2>
            <p>The target time was: <strong>{targetTime} </strong> seconds.</p>
            <p>You stooped the timer with <strong>X seconds left.</strong> </p>
            <form action="" method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default ResultModel
