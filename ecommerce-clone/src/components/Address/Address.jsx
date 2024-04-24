import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import './Address.css';
import { FaSortAmountDown } from 'react-icons/fa';
export default function Address() {

  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";
debugger
  const paymentHandler = async (e) => {
    try {
        const response = await fetch("http://localhost:3000/orders", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const order = await response.json();
        console.log(order);

        var options = {
          "key": "rzp_test_triWNmobFcrf87", // Enter the Key ID generated from the Dashboard
          amount,// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency,
          "name": "Acme Corp", //your business name
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          "order_id": "order.id", 
          "handler": function (response){
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature)
          },
          "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              "name": "Eco-Mart store", //your customer's name
              "email": "baljeetsingh1682@gmail.com", 
              "contact": "9024887571"  //Provide the customer's phone number for better conversion rates 
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.order_id);
              alert(response.error.metadata.payment_id);
      });

    } catch (error) {
        console.error("Error fetching order:", error);
    }

    rzp1.open();
    e.preventDefault();

   
}
  return (

    <>

      <div className="mx-auto gradient-custom " style={{ marginTop:'6rem' }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">You are 30 seconds away from compleating your order!</p>
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='First name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Last name' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='City' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Zip' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Address' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Email' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
    
                  <MDBBtn onClick={paymentHandler} rounded style={{backgroundColor: '#0062CC'}}>Place order</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}