import { useParams } from "react-router-dom";

const PaymentFailed = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h1>Payment failed : {tranId}</h1>
    </div>
  );
};

export default PaymentFailed;
