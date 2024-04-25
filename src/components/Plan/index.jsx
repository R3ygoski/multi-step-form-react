import PlansButton from "./PlansButton";

import iconArcade from '../../assets/svg/icon-arcade.svg'
import iconAdvanced from '../../assets/svg/icon-advanced.svg'
import iconPro from '../../assets/svg/icon-pro.svg'
import { useContext, useState } from "react";
import { StepContext } from "../../context/StepContext";

export default function Plan() {

    const {yearly, setYearly, setPlan} = useContext(StepContext)

    const [arcade, setArcade] = useState(false)
    const [advanced, setAdvanced] = useState(false)
    const [pro, setPro] = useState(false)

    const validatePlan = (plan) => {
        if (arcade || advanced || pro) {
            setArcade(false)
            setAdvanced(false)
            setPro(false)
        }
        if (plan==='Arcade'){
            setArcade(true)
            setPlan(plan)
        } else if (plan==='Advanced'){
            setAdvanced(true)
            setPlan(plan)
        } else if (plan==='Pro'){
            setPro(true)
            setPlan(plan)
        } else {
            return false
        }
    }

    return (
        <section className="plan">
            <h2 className="plan__title">Select your plan</h2>
            <p className="plan__description">You have the option of monthly or yearly billing.</p>
            <section className="plan__options">
                <PlansButton planName={'Arcade'} price={9} yearly={yearly} img={iconArcade} alt={'Image of a old Joystick'} validator={validatePlan} state={arcade}/>
                <PlansButton planName={'Advanced'} price={12} yearly={yearly} img={iconAdvanced} alt={'Image of a Joystick'} validator={validatePlan} state={advanced}/>
                <PlansButton planName={'Pro'} price={15} yearly={yearly} img={iconPro} alt={'Image of a modern Joystick'} validator={validatePlan} state={pro}/>
            </section>

            <div className="plan__toggle">
                <p className={yearly?'':'choosed'}>Monthly</p>
                <button onClick={() => setYearly(!yearly)} className="plan__toggle-btn">
                    <div className={yearly?'circle-yearly':'circle-monthly'}></div>
                </button>
                <p className={yearly?'choosed':''}>Yearly</p>
            </div>

        </section>
    )
    
}