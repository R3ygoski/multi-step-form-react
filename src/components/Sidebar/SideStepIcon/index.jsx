import { useContext } from "react"
import { StepContext } from "../../../context/StepContext"

export default function SideStepIcon({stepProp, stepPlace, stepName}){

    const { step } = useContext(StepContext)

    return (
        <div className="sidebar__steps__step">
            <div className={stepProp===step?'sidebar__steps__step__icon sidebar__steps__step__icon--active':'sidebar__steps__step__icon'}>{stepProp}</div>
            <div>
                <p>{stepPlace}</p>
                <p>{stepName}</p>
            </div>
        </div>
    )
}