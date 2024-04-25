import { useContext, useEffect, useState } from "react"
import { StepContext } from "../../context/StepContext"
import SummaryAddon from "./SummaryAddon"
import SummaryPlan from "./SummaryPlan"

import iconThanks from '../../assets/svg/icon-thank-you.svg'

const plans = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15
}

export default function Summary() {

    const { setStep, plan, yearly, online, storage, profile, done } = useContext(StepContext)

    const [totalVal, setTotalVal] = useState(0)

    let totalValue;

    const calculator = () => {
        if (yearly) {
            let planValue = plans[plan]*10
            let onlineValue = online?1*10:0
            let storageValue = storage?2*10:0
            let profileValue = profile?2*10:0
    
            totalValue = planValue + onlineValue + storageValue + profileValue
            setTotalVal(totalValue)
        } else {
            let planValue = plans[plan]
            let onlineValue = online?1:0
            let storageValue = storage?2:0
            let profileValue = profile?2:0
    
            totalValue = planValue + onlineValue + storageValue + profileValue
            setTotalVal(totalValue)
        }
    }

    useEffect(() => {
        calculator()
    })

    return (
        <section className={!done?'summary':'thank-you'}>
            {!done?
            <>
                <h2 className="summary__title">Finishing up</h2>
                <p className="summary__description">Double-check everything looks OK before confirming.</p>
                <section className="summary__results">
                    <SummaryPlan name={plan} price={plans[plan]} yearly={yearly} setStep={setStep} />
                    {online?<SummaryAddon addon={'Online service'} price={1} yearly={yearly} />:''}
                    {storage?<SummaryAddon addon={'Larger storage'} price={2} yearly={yearly} />:''}
                    {profile?<SummaryAddon addon={'Customizable profile'} price={2} yearly={yearly} />:''}
                    
                </section>
                <p className="summary__total">{yearly?`Total (per year)`:`Total (per month)`}
                    <span>{yearly?`+$${totalVal}/yr`:`+$${totalVal}/mo`}</span>
                </p>
            </>
            :
            <div className="thank-you">
                <img className="thank-you__icon" src={iconThanks} alt="A check icon"/>
                <h2 className="thank-you__title">Thank you!</h2>
                <p className="thank-you__description">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
            }
        </section>
    )
}