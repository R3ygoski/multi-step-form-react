export default function SummaryAddon({addon, price, yearly}) {
    return (
        <div className="summary__results__addon">
            <p className="summary__results__addon__name">{addon} 
                <span>{yearly?`+$${price*10}/yr`:`+$${price}/mo`}</span>
            </p>
        </div>
    );
}