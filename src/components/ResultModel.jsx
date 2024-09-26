export default function ResultModel({ ref, result, targetTime }) {
    return (
        <dialog ref={ref} className="result-modal" open>
            <h2>your {result}</h2>
            <p>The Target Time was <strong>{targetTime}</strong></p>
            <p>You stopped the timer with<strong>X secnds left.</strong></p>
            <form action="" method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}