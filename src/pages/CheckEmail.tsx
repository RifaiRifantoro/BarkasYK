import { useNavigate } from "react-router-dom";

const CheckEmail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/create-password");
  };

  const handleConfirm = () => {
    navigate("/verify-email");
  };

  return (
    <div className="w-full h-screen bg-bekasin-teal px-6 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-6 w-[29px] h-[28px] flex items-center justify-center"
      >
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(37px 23px 5.1px rgba(0, 0, 0, 0.25)) inset",
          }}
        >
          <g filter="url(#filter0_i_1_100)">
            <path
              d="M12.0833 2.04878C18.7533 2.04878 24.1667 7.27545 24.1667 13.7155C24.1667 20.1555 18.7533 25.3821 12.0833 25.3821C5.41333 25.3821 0 20.1555 0 13.7155C0 7.27545 5.41333 2.04878 12.0833 2.04878ZM12.0833 23.0488C17.4242 23.0488 21.75 18.8721 21.75 13.7155C21.75 8.55878 17.4242 4.38212 12.0833 4.38212C6.7425 4.38212 2.41667 8.55878 2.41667 13.7155C2.41667 18.8721 6.7425 23.0488 12.0833 23.0488ZM12.0833 12.5488H16.9167V14.8821H12.0833V18.3821L7.25 13.7155L12.0833 9.04878V12.5488Z"
              fill="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1_100"
              x="0"
              y="0"
              width="29"
              height="28"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="37" dy="23" />
              <feGaussianBlur stdDeviation="2.55" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_100"
              />
            </filter>
          </defs>
        </svg>
      </button>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full">
        {/* Title */}
        <h1 className="font-gabarito font-semibold text-[20px] text-black text-center mb-16">
          Check your Email
        </h1>

        {/* Email Icon */}
        <div className="mb-16 flex items-center justify-center">
          <div className="relative w-[159px] h-[159px]">
            {/* Email envelope illustration */}
            <svg
              width="159"
              height="159"
              viewBox="0 0 159 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Envelope body */}
              <rect
                x="20"
                y="50"
                width="119"
                height="80"
                rx="4"
                fill="none"
                stroke="#000"
                strokeWidth="4"
              />
              {/* Envelope flap */}
              <path
                d="M20 50 L79.5 85 L139 50"
                fill="none"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Inner envelope background */}
              <rect
                x="24"
                y="54"
                width="111"
                height="72"
                rx="2"
                fill="#6EC6CB"
              />
              {/* Shopping cart icon inside */}
              <svg
                x="65"
                y="75"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#FFA500"
              >
                <path d="M7 4V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2H1a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H7zm2 0h6V2h2v2H9V2h2v2zM5 6h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm2 3v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0z" />
              </svg>
              {/* Paper/document sticking out */}
              <rect
                x="35"
                y="35"
                width="30"
                height="25"
                rx="2"
                fill="#a0f0ed"
                stroke="#000"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full max-w-[310px] h-[38px] bg-bekasin-dark rounded-[9px] flex items-center justify-center"
        >
          <span className="font-gabarito font-bold text-[20px] text-bekasin-teal">
            Confrim
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckEmail;
