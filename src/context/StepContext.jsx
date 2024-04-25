import { createContext, useState } from "react";

export const StepContext = createContext()

export const StepProvider = ({ children }) => {
    // Step Pages
    const [step, setStep] = useState(1)

    // Step 1
    const [isValid, setIsValid] = useState(false)

    // Step 2
    const [yearly, setYearly] = useState(false)
    const [plan, setPlan] = useState('Advanced')

    // Step 3
    const [online, setOnline] = useState(false)
    const [storage, setStorage] = useState(false)
    const [profile, setProfile] = useState(false)

    // Step 4
    const [done, setDone] = useState(false)

    // Footer Next Button
    const nextStep = () => {
        if (step == 4 || isValid == false) {
            if (step == 4) {
                setDone(true)
            }
            return
        } else {
            setStep(step + 1)
        }
    }

    // Footer Back Button
    const prevStep = () => {
        if (step == 1) {
            return
        } else {
            setStep(step - 1)
        }
    }

    return (
        <StepContext.Provider value={{ 
            step, setStep, nextStep, prevStep, // <-- Step Page Handlers
            isValid, setIsValid, // <-- Step 1
            yearly, setYearly, plan, setPlan, // <-- Step 2
            online, storage, profile, setOnline, setStorage, setProfile, // <-- Step 3
            done // <-- Step 4
            }}>
            {children}
        </StepContext.Provider>
    )
}