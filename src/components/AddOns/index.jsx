import { useContext } from "react";
import AddOnsButton from "./AddOnsButton";
import { StepContext } from "../../context/StepContext";

export default function AddOns(){

    const { online, storage, profile, setOnline, setStorage, setProfile } = useContext(StepContext)

    return (
        <section className="add-on">
            <h2 className="add-on__title">Pick add-ons</h2>
            <p className="add-on__description">Add-ons help enhance your gaming experience.</p>
            <section className="add-on__options">
                <AddOnsButton id={'online'} name={'Online service'} description={'Access to multiplayer games'} price={1} setAddon={setOnline} addonCheck={online}/>
                <AddOnsButton id={'storage'} name={'Larger storage'} description={'Extra 1TB of cloud save'} price={2} setAddon={setStorage} addonCheck={storage}/>
                <AddOnsButton id={'profile'} name={'Customizable profile'} description={'Custom theme on your profile'} price={2} setAddon={setProfile} addonCheck={profile}/>
            </section>
        </section>
    )
}