import { useContext, useState } from "react";
import Inputs from "./Inputs";
import { StepContext } from "../../context/StepContext";

export default function PersonalInfo() {
    const { setIsValid } = useContext(StepContext)

    const nameRegex = new RegExp(/^[a-zA-Z\s]+$/)
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    const americanPhoneRegex = new RegExp(/^\+1\s\d{3}\s\d{3}\s\d{3}$/)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')

    const validateName = () => {
        if (!name) {
            setNameErr('This field is necessary')
        } else if (!nameRegex.test(name)){
            setNameErr('This field only accept letters')
        } else {
            setNameErr('')
            return true
        }
    }
    const validateEmail = () => {
        if (!email) {
            setEmailErr('This field is necessary')
        } else if (!emailRegex.test(email)){
            setEmailErr('This email is invalid')
        } else {
            setEmailErr('')
            return true
        }
    }
    const validatePhone = () => {
        if (!phone) {
            setPhoneErr('This field is necessary')
        } else if (!americanPhoneRegex.test(phone)){
            setPhoneErr('This phone number is invalid')
        } else {
            setPhoneErr('')
            return true
        }
    }

    const validateForm = () => {
        if (validateName() && validateEmail() && validatePhone()) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }


    return (
        <section className="personal-info">
            <h1 className="personal-info__title">Personal Info</h1>
            <p className="personal-info__description">Please provide your name, email, address, and phone number.</p>

            <form className="personal-info__form">

                <Inputs label="Name" placeholder="e.g. Stephen King" err={nameErr} setState={setName} state={name} validateFunction={validateForm}/>
                <Inputs label="Email Address" placeholder="e.g. stephenking@lorem.com" err={emailErr} setState={setEmail} state={email} validateFunction={validateForm}/>
                <Inputs label="Phone Number" placeholder="e.g. +1 234 567 890" err={phoneErr} setState={setPhone} state={phone} validateFunction={validateForm}/>
            </form>
        </section>
    )
}