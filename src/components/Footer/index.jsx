import { useContext } from "react"
import { StepContext } from "../../context/StepContext"


export default function Footer({display}){    
    const { step, nextStep, prevStep, done } = useContext(StepContext)
    return (
        <>
            {!done?
            <footer className={display==='desktop'?"footer--desktop":"footer--mobile"}>
                <div className="footer__back-btn-container">
                    {step===1?
                    ''
                    :
                    <button onClick={prevStep}>Go Back</button>}
                </div>
                
                <div className="footer__next-btn-container">
                    {
                    step===4?
                    <button className="footer__confirm-btn" onClick={nextStep}>Confirm</button>
                    :
                    <button onClick={nextStep}>Next Step</button>
                    }
                </div>
            </footer>
            :
            ''
            }
        </>
    )
}