"use client"

import { Stripe, loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import useTotalPriceStates from '../hooks/useTotalPriceStates';

function Payment() {

    const stripePromise: Promise<Stripe | null> = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    // const totalPrice  = useTotalPriceStates(state => state.price)
    // console.log(`total price from stripe page ${totalPrice}`)

    const options: any = {
        mode: 'payment',
        amount: 50,
        currency: 'usd',
      };

  return (
    <div className='mt-32'>
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    </div>
    // <div>payment</div>
  )
}

export default Payment
