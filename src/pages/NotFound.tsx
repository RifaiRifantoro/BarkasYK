import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-bekasin-teal px-6 flex flex-col items-center justify-center">
      {/* House Icon */}
      <div className="mb-8">
        <svg
          width="100"
          height="89"
          viewBox="0 0 146 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-bekasin opacity-50"
        >
          <path
            d="M122.75 116.554C122.75 120.005 119.952 122.804 116.5 122.804H29C25.5483 122.804 22.75 120.005 22.75 116.554V60.3035H4L68.5456 1.62539C70.9294 -0.541797 74.5706 -0.541797 76.9544 1.62539L141.5 60.3035H122.75V116.554ZM44.625 72.8035C44.625 88.3366 57.217 100.929 72.75 100.929C88.2831 100.929 100.875 88.3366 100.875 72.8035H88.375C88.375 81.4329 81.3794 88.4285 72.75 88.4285C64.1206 88.4285 57.125 81.4329 57.125 72.8035H44.625Z"
            fill="#30382F"
          />
        </svg>
      </div>

      {/* Error Message */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="font-gabarito font-bold text-[36px] text-bekasin-dark">
          404
        </h1>
        <h2 className="font-gabarito font-semibold text-[20px] text-black">
          Page Not Found
        </h2>
        <p className="font-gabarito text-[16px] text-black max-w-[280px]">
          The page you're looking for doesn't exist in our marketplace.
        </p>
      </div>

      {/* Go Home Button */}
      <button
        onClick={handleGoHome}
        className="w-full max-w-[280px] h-[38px] bg-bekasin-dark rounded-[9px] flex items-center justify-center"
      >
        <span className="font-gabarito font-bold text-[16px] text-bekasin-teal">
          Go to Homepage
        </span>
      </button>
    </div>
  );
};

export default NotFound;
