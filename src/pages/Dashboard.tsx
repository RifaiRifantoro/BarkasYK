import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-bekasin-teal px-6">
      {/* Header */}
      <div className="pt-8 pb-4">
        <h1 className="font-readex font-bold text-[24px] text-bekasin-dark text-center mb-2">
          BekasinAja
        </h1>
        <p className="font-metal text-[16px] text-[#263238] text-center">
          FOR SALE
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full -mt-20">
        {/* House Icon */}
        <div className="mb-8">
          <svg
            width="100"
            height="89"
            viewBox="0 0 146 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-bekasin"
          >
            <g filter="url(#filter0_d_dashboard)">
              <path
                d="M122.75 116.554C122.75 120.005 119.952 122.804 116.5 122.804H29C25.5483 122.804 22.75 120.005 22.75 116.554V60.3035H4L68.5456 1.62539C70.9294 -0.541797 74.5706 -0.541797 76.9544 1.62539L141.5 60.3035H122.75V116.554ZM44.625 72.8035C44.625 88.3366 57.217 100.929 72.75 100.929C88.2831 100.929 100.875 88.3366 100.875 72.8035H88.375C88.375 81.4329 81.3794 88.4285 72.75 88.4285C64.1206 88.4285 57.125 81.4329 57.125 72.8035H44.625Z"
                fill="#30382F"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_dashboard"
                x="0"
                y="0"
                width="145.5"
                height="130.804"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_dashboard"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_dashboard"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="text-center space-y-4 mb-12">
          <h2 className="font-gabarito font-bold text-[20px] text-bekasin-dark">
            Welcome to BekasinAja!
          </h2>
          <p className="font-gabarito text-[16px] text-black max-w-[280px]">
            Your marketplace for buying and selling is ready. This is a
            placeholder for the main dashboard interface.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4 w-full max-w-[280px]">
          <div className="bg-bekasin-dark/10 rounded-[9px] p-4 text-center">
            <p className="font-gabarito text-[14px] text-bekasin-dark">
              🏠 Browse Products
            </p>
          </div>
          <div className="bg-bekasin-dark/10 rounded-[9px] p-4 text-center">
            <p className="font-gabarito text-[14px] text-bekasin-dark">
              🛒 Shopping Cart
            </p>
          </div>
          <div className="bg-bekasin-dark/10 rounded-[9px] p-4 text-center">
            <p className="font-gabarito text-[14px] text-bekasin-dark">
              👤 User Profile
            </p>
          </div>
        </div>

        {/* Back to Start Button */}
        <button
          onClick={handleBackToLogin}
          className="mt-8 w-full max-w-[280px] h-[38px] bg-bekasin-dark rounded-[9px] flex items-center justify-center"
        >
          <span className="font-gabarito font-bold text-[16px] text-bekasin-teal">
            Back to Start
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
