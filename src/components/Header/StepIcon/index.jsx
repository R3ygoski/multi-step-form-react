import { useContext } from "react"
import { StepContext } from "../../../context/StepContext"

export default function StepIcon({stepProp}){
    const { step } = useContext(StepContext)

    return (
        <div className={stepProp===step?'step__icon step__icon--active':'step__icon'}>{stepProp}</div>
    )
}