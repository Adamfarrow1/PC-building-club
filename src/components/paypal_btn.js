// PayPalButton.js
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import env from 'react-dotenv';

const PayPalButtonComponent = ({ amount, onSuccess, onCancel, onError }) => {


  return (
    <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details, data);
          });
        }}
        onCancel={() => onCancel()}
        onError={(error) => onError(error)}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButtonComponent;
