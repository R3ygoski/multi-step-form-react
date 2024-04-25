import { useContext, useState } from "react"
import { StepContext } from "../../../context/StepContext"

import checkImg from '../../../assets/svg/icon-checkmark.svg'

export default function AddOnsButton({name, price, description, setAddon, addonCheck}) {

    const { yearly } = useContext(StepContext)

    const [isChecked, setIsChecked] = useState(addonCheck)

    return (
        <button className={isChecked?"add-on__option add-on__option--active":"add-on__option"} onClick={() => {setIsChecked(!isChecked); setAddon(!isChecked)}}>
            <div className={isChecked?"add-on__option__icon add-on__option__icon--active":"add-on__option__icon"}>
                <img src={checkImg} alt="" />
            </div>
            <p>{name} 
                <br/>
                <span className="add_on__option__description">{description}</span>    
            </p>
            <span className="add-on__option__price">{yearly?`+$${price*10}/yr`:`+$${price}/mo`}</span>
            
        </button>
    )
}