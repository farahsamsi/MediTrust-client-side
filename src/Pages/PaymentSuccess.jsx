import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h1>Payment Success for : {tranId}</h1>
    </div>
  );
};

export default PaymentSuccess;
