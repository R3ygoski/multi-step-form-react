export default function Inputs({label, err,  placeholder, state, setState, validateFunction}){
    return (
        <>
            <label htmlFor={label}>
                {label}
                <span className="label-error">{err}</span>
            </label>
            <input id={label} className={err?"input-error":"input"} type="text" placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)} onBlur={validateFunction}/>
        </>
    )
}