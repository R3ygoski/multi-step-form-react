import { useContext } from "react"
import { StepContext } from "../../../context/StepContext"

export default function PlansButton({ planName, price, yearly, img, alt, validator, state }) {

    const { plan } = useContext(StepContext)

    const buttonClass = (state, planName, plan) => {
        let className = 'plan__option'
        if (state) {
            className += ' plan__option--active'
        }
        if (planName === plan) {
            className += ' plan__option--choosed'
        }
        return className
    }

    return (
        <button className={buttonClass(state, planName, plan)} 
        onClick={() => {validator(planName)}}>
            <img src={img} alt={alt} />
            <p>{planName}
                <br/>
                <span className="plan-price">{yearly?`$${price*10}/yr`:`$${price}/mo`}</span>
                <br />
                {yearly?<span className="plan-discount">2 months free</span>:''}
            </p>
            
        </button>
    )
}