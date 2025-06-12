import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleEmailSignIn = () => {
    navigate("/email-confirmation");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-bekasin-teal px-6">
      {/* House SVG Icon */}
      <div className="mb-16">
        <svg
          width="138"
          height="123"
          viewBox="0 0 146 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-bekasin"
        >
          <g filter="url(#filter0_d_1_18)">
            <path
              d="M122.75 116.554C122.75 120.005 119.952 122.804 116.5 122.804H29C25.5483 122.804 22.75 120.005 22.75 116.554V60.3035H4L68.5456 1.62539C70.9294 -0.541797 74.5706 -0.541797 76.9544 1.62539L141.5 60.3035H122.75V116.554ZM44.625 72.8035C44.625 88.3366 57.217 100.929 72.75 100.929C88.2831 100.929 100.875 88.3366 100.875 72.8035H88.375C88.375 81.4329 81.3794 88.4285 72.75 88.4285C64.1206 88.4285 57.125 81.4329 57.125 72.8035H44.625Z"
              fill="#30382F"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_18"
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
                result="effect1_dropShadow_1_18"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_18"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Sign in with Email Button */}
      <button
        onClick={handleEmailSignIn}
        className="w-[287px] h-[29px] bg-bekasin-dark rounded-[22px] flex items-center justify-center mb-16"
      >
        <span className="font-gabarito font-medium text-[20px] text-bekasin-teal">
          Sing in with Email
        </span>
      </button>

      {/* Divider and Social Login */}
      <div className="flex items-center w-full max-w-[287px] mb-6">
        <hr className="flex-1 border-black border-t-[1px]" />
        <span className="font-gabarito text-[12px] text-black px-4">
          Or sing in using your
        </span>
        <hr className="flex-1 border-black border-t-[1px]" />
      </div>

      {/* Social Login Icons */}
      <div className="flex space-x-[53px]">
        <button className="w-[32px] h-[32px] bg-bekasin-dark rounded-corner flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#6EC6CB"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </button>
        <button className="w-[32px] h-[32px] bg-bekasin-dark rounded-corner flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#6EC6CB"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
