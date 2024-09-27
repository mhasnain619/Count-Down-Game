import { forwardRef, useImperativeHandle, useRef } from "react"
const ResultModel = forwardRef(function ResultModel({ targetTime, remaningTime, onReset }, ref) {
    const dialog = useRef()

    const userLost = remaningTime <= 0;
    const formatedTime = (remaningTime / 100).toFixed(2)
    const score = Math.round((1 - remaningTime / (targetTime * 1000)) * 100)
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal" >
            {userLost && <h2>your lost</h2>}
            {!userLost && <h2>your Score is: {score}</h2>}
            <p>The Target Time was <strong> {targetTime} seconds</strong></p>
            <p>You stopped the timer with<strong> {formatedTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModel