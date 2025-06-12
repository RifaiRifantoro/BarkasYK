import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/check-email");
  };

  const handleConfirm = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen bg-bekasin-teal px-6 relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-5 w-[24px] h-[23px] flex items-center justify-center"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0833 0.0487823C18.7533 0.0487823 24.1667 5.27545 24.1667 11.7155C24.1667 18.1555 18.7533 23.3821 12.0833 23.3821C5.41333 23.3821 0 18.1555 0 11.7155C0 5.27545 5.41333 0.0487823 12.0833 0.0487823ZM12.0833 21.0488C17.4242 21.0488 21.75 16.8721 21.75 11.7155C21.75 6.55878 17.4242 2.38212 12.0833 2.38212C6.7425 2.38212 2.41667 6.55878 2.41667 11.7155C2.41667 16.8721 6.7425 21.0488 12.0833 21.0488ZM12.0833 10.5488H16.9167V12.8821H12.0833V16.3821L7.25 11.7155L12.0833 7.04878V10.5488Z"
            fill="black"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full">
        {/* Verify Icon */}
        <div className="mb-8 flex items-center justify-center">
          <div className="w-[172px] h-[172px] flex items-center justify-center">
            {/* Verification checkmark icon */}
            <svg
              width="172"
              height="172"
              viewBox="0 0 172 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="86" cy="86" r="86" fill="#4ADE80" opacity="0.2" />
              <circle cx="86" cy="86" r="60" fill="#4ADE80" />
              <path
                d="M64 86l12 12 32-32"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-gabarito font-semibold text-[24px] text-black text-center mb-16">
          Verify Email
        </h1>

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

export default VerifyEmail;
