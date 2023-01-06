import React,{ useEffect ,useState} from "react";
import { useSelector } from 'react-redux';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';

// This values are the props in the UI
var amount = "100";
const currency = "USD";
const style = {"color":"white"};
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
const [paidFor, setPaidFor] = useState(false);
const navigate = useNavigate()
const [eror,setError]= useState(false)

    const handleApprove = (orderId) => {

        setPaidFor(true)
        

    }
    if(paidFor){alert("done, please click Request to book")}
    if(eror){navigate('/details')}
    // const dates = useSelector((state) => state.guests.dates);
    // amount = dates.total.toFixed(0)

    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);
// if(paidFor){alert("done")}else{
//     navigate('/details')
// }
    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource="paypal"
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
               
                onApprove={async (data, actions) => {

                    const order = await actions.order.capture();
                    handleApprove(data.orderID);

                }}
                onError={(err)=>{setError(true)}
                }
            />
        </>
    );
}
export default function PayPalC() {
    const [checkout, setCheckOut] = useState(false);

	return <>
        {/* {checkout ? ( */}
            <div style={{ maxWidth: "615px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={true}
                />
			</PayPalScriptProvider>
		</div>        
     
		</>


}
