import StepIcon from "./StepIcon";
import backgroundMobile from '../../assets/svg/bg-sidebar-mobile.svg'

import { stepList } from "../../js/stepList";

export default function Header(){
    return (
        <header className="header">
            <figure>
                <img src={backgroundMobile}/>
            </figure>
            <div>
                {stepList.map((step) => (
                    <StepIcon key={step.stepVal} stepProp={step.stepVal}/>
                ))}
            </div>
        </header>
    )
}