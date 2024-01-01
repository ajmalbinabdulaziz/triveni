import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'
import useTotalPriceStates from '../hooks/useTotalPriceStates'

function CheckoutForm() {

    const stripe = useStripe()
    const elements = useElements()

    const totalPrice  = useTotalPriceStates(state => state.price)

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        
        if (elements == null)  {
            return;
        }

    const { error: submitError } = await elements.submit()
      if(submitError) {
          return
        }
      //  create the PaymentIntent and obtain the clientSecret from 
      const res= await fetch("/api/create-intent", {
        method: "POST",
        body: JSON.stringify({
          amount: totalPrice,
        }),
      }) 

      const secretKey = await res.json()
      // const {client_secret: clientSecret} = await res.json() 
      console.log(secretKey)
      const { error } = await stripe?.confirmPayment(
        {
          clientSecret: secretKey,
          elements,

          confirmParams: {
            return_url: "http://localhost:3000/",
          },
        }
      )
    }

    
  return (
    <div className='flex flex-col justify-center items-center w-full mt-32 border'>

      <form onSubmit={handleSubmit}>    
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements} 
        className='w-full bg-yellow-500 p-2 rounded-lg mt-2'>
          Pay
      </button>
      </form>

    </div>
  )
}

export default CheckoutForm
