import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-600 flex flex-col items-center justify-center text-white px-4 text-center">
      <h2 className="text-xl font-semibold tracking-widest mb-2">OOPS!</h2>
      <h1 className="text-[120px] font-bold leading-none">404</h1>
      <p className="text-lg mt-2 mb-6 font-medium">
        Sorry we couldn't find that page.
      </p>
      <p className="max-w-md mb-8 text-sm">
        From here you can either check out the{" "}
        <Link to="/" className="underline hover:text-blue-100 font-semibold">
          Front page
        </Link>{" "}
        or{" "}
        <Link to={-1} className="underline hover:text-blue-100 font-semibold">
          Go to Previous Page
        </Link>{" "}
        .
      </p>
      <Link to="/" className="btn btn-outline gap-2">
        <FaArrowLeft />
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
