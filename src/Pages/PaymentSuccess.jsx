import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { FaPrint } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import logo from "../../src/assets/Logo/MediBazaarLogo.png";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  const axiosPublic = useAxiosPublic();
  const [orderDetails, setOrderDetails] = useState({});

  const [subTotal, setSubTotal] = useState(0);

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const getOrderDetails = async () => {
    const res = await axiosPublic.get(`/order/${tranId}`);
    setOrderDetails(res.data);
  };

  const clearCart = async () => {
    const buyerEmail = orderDetails?.order?.buyerEmail;
    if (
      orderDetails?.transactionID === tranId &&
      orderDetails?.paymentStatus === "paid"
    ) {
      await axiosPublic.delete(`/carts?buyerEmail=${buyerEmail}`);
    }
  };

  // TODO: clear cart after successful payment

  useEffect(() => {
    getOrderDetails();
    clearCart();
  }, [tranId, orderDetails?.order?.buyerEmail]);

  useEffect(() => {
    let calculatedSubTotal = orderDetails?.order?.items.reduce(
      (sum, item) => sum + item.totalPrice,
      0
    );
    setSubTotal(calculatedSubTotal);
  }, [orderDetails?.order?.items]);

  return (
    <div className="p-6 bg-base-100 min-h-screen flex flex-col items-center justify-center">
      <div
        ref={contentRef}
        className="w-full max-w-4xl bg-white p-10 shadow-lg rounded-xl space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          {/* Logo */}
          <div>
            <div className="btn btn-ghost flex justify-center items-center">
              <div className="w-10 md:w-20 hidden md:flex">
                <img src={logo} alt="MediBazaar Logo" />
              </div>
              <h1 className="text-xl md:text-2xl">
                Medi<span className="text-secondary">Trust</span>
              </h1>
            </div>
          </div>

          {/* Company Info */}
          <div className="text-sm text-right">
            <p className="font-semibold">MediTrust</p>
            <p>1331 Ring Road</p>
            <p>Dhaka, Bangladesh</p>
            <p>VAT no.: 987654321</p>
            <p className="text-secondary">meditrust@gmail.com</p>
            <p className="text-secondary">+880123456789</p>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold">RECIPIENT</p>
            <p className="font-semibold">
              Name: {orderDetails?.order?.buyerName}
            </p>
            <p>Address: {orderDetails?.order?.buyerAddress}</p>
            <p>Delivery Division: {orderDetails?.order?.deliveryDivision}</p>
            <p>Post Code: {orderDetails?.order?.postCode}</p>
            <p className="text-secondary">
              Email: {orderDetails?.order?.buyerEmail}
            </p>
            <p className="text-secondary">
              Phn: {orderDetails?.order?.contactNumber}
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold">Invoice</h2>
            <p className="text-sm">
              Transaction ID.:{" "}
              <span className="font-semibold">
                {orderDetails?.transactionID}
              </span>
            </p>
            <p className="text-sm">
              {/* TODO : add dynamic date */}
              INVOICE DATE:{" "}
              <span className="font-semibold">January 1, 2018</span>
            </p>
          </div>
        </div>

        {/* Purchase Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-left text-sm border-b">
                <th></th>
                <th>Medicine Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails?.order?.items?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.medicineName}</td>
                  <td>{item?.medicineQuantity}</td>
                  <td>Tk {item?.price}</td>
                  <td>Tk {item?.totalPrice}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>SUBTOTAL :</td>
                <td>
                  <p>
                    {" "}
                    <span className="font-semibold">Tk {subTotal}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="text-right space-y-1">
          <p>
            Delivery Charge: <span className="font-semibold">Tk 25</span>
          </p>
          <p className="text-xl font-bold text-secondary">
            TOTAL: Tk {subTotal + 25}
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-center">
            Status:
            <span className="uppercase">{orderDetails?.paymentStatus}</span>
          </h1>
        </div>
      </div>

      {/* Print Button */}
      <button onClick={reactToPrintFn} className="btn btn-primary mt-6">
        <FaPrint className="mr-2" /> Download Invoice
      </button>
    </div>
  );
};

export default PaymentSuccess;
