import backgroundDesktop from '../../assets/svg/bg-sidebar-desktop.svg'
import SideStepIcon from './SideStepIcon'

import { stepList } from "../../js/stepList"

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={backgroundDesktop} alt="" />
            <section className="sidebar__steps">
                {stepList.map((step) => (
                    <SideStepIcon key={step.stepVal} stepProp={step.stepVal} stepName={step.stepName} stepPlace={step.stepLocation}/>
                ))}
            </section>
        </aside>
    )
}