export default function SummaryPlan({name, price, yearly, setStep}) {
    return (
        <div className="summary__results__plan">
            <p className="summary__results__plan__name">{name} {yearly?'(yearly)':'(monthly)'}<br/>
                <span onClick={()=>setStep(2)}>Change</span>
            </p>
            <p className="summary__results__plan__price">{yearly?`$${price*10}/yr`:`$${price}/mo`}</p>
        </div>
    );
}