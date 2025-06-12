import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleBack = () => {
    navigate("/email-confirmation");
  };

  const handleConfirm = () => {
    if (password) {
      navigate("/check-email");
    }
  };

  return (
    <div className="w-full h-screen bg-bekasin-teal px-6 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 w-[29px] h-[28px] flex items-center justify-center"
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
          <g filter="url(#filter0_i_1_91)">
            <path
              d="M12.0833 2.04878C18.7533 2.04878 24.1667 7.27545 24.1667 13.7155C24.1667 20.1555 18.7533 25.3821 12.0833 25.3821C5.41333 25.3821 0 20.1555 0 13.7155C0 7.27545 5.41333 2.04878 12.0833 2.04878ZM12.0833 23.0488C17.4242 23.0488 21.75 18.8721 21.75 13.7155C21.75 8.55878 17.4242 4.38212 12.0833 4.38212C6.7425 4.38212 2.41667 8.55878 2.41667 13.7155C2.41667 18.8721 6.7425 23.0488 12.0833 23.0488ZM12.0833 12.5488H16.9167V14.8821H12.0833V18.3821L7.25 13.7155L12.0833 9.04878V12.5488Z"
              fill="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1_91"
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
                result="effect1_innerShadow_1_91"
              />
            </filter>
          </defs>
        </svg>
      </button>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full">
        {/* Title */}
        <h1 className="font-gabarito font-semibold text-[20px] text-black text-center mb-48">
          Create a password
        </h1>

        {/* Password Input Container */}
        <div className="w-full max-w-[310px] mb-16">
          {/* Password Label */}
          <label className="font-gabarito font-semibold text-[11px] text-black block mb-2 ml-4">
            Password
          </label>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[38px] bg-transparent border-2 border-bekasin-dark border-t-0 rounded-b-[9px] px-4 font-gabarito text-[13px] text-black"
            />
            <div className="absolute inset-x-0 top-0 h-[38px] flex items-center px-4 pointer-events-none">
              <span className="font-gabarito text-[13px] text-black">
                .....................
              </span>
            </div>
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

export default CreatePassword;
