import logo from "../../../public/icons/logo.svg";

const verifyPayment = async (
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature,
  cartArray,
  amount
) => {
  let order = {
    cartArray: cartArray,
    userId: "thisisatestuserid",
    amount: amount,
    razorpay_payment_id: razorpay_payment_id,
    razorpay_order_id: razorpay_order_id,
    razorpay_signature: razorpay_signature,
  };

  const res = await fetch("/api/checkout/verifypayment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order: order }),
  });
  const data = await res.json();

  if (data.signatureIsValid) return true;
  else return false;
};

export const handleCheckOut = async (
  e,
  paymentsuccess,
  setPaymentsuccess,
  amount,
  cartArray
) => {
  e.preventDefault();
  // setPaymentsuccess(true);
  console.log("please wait for orderid");
  const res = await fetch("/api/checkout/orderid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payment: amount }),
  });
  const { status, orderId } = await res.json();
  console.log("order_id", orderId);

  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Dabzon",
    description: "product purchase Transaction dabzon",
    image: logo,
    order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      if (
        verifyPayment(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature,
          cartArray,
          amount
        )
      )
        alert("payment success");
      else alert("payment failed");
    },
    theme: {
      color: "#10b981",
    },
  };
  var rzp1 = new Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    console.log(response.error);
  });
  rzp1.open();
};
