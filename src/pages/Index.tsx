import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to login after 2 seconds
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-bekasin-teal cursor-pointer"
      onClick={handleClick}
    >
      {/* Main Logo */}
      <div className="flex flex-col items-center mb-8">
        {/* House SVG Icon with shadow */}
        <div className="mb-8">
          <svg
            width="138"
            height="123"
            viewBox="0 0 146 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-bekasin"
          >
            <g filter="url(#filter0_d_1_14)">
              <path
                d="M122.75 116.554C122.75 120.005 119.952 122.804 116.5 122.804H29C25.5483 122.804 22.75 120.005 22.75 116.554V60.3035H4L68.5456 1.62539C70.9294 -0.541797 74.5706 -0.541797 76.9544 1.62539L141.5 60.3035H122.75V116.554ZM44.625 72.8035C44.625 88.3366 57.217 100.929 72.75 100.929C88.2831 100.929 100.875 88.3366 100.875 72.8035H88.375C88.375 81.4329 81.3794 88.4285 72.75 88.4285C64.1206 88.4285 57.125 81.4329 57.125 72.8035H44.625Z"
                fill="#30382F"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_14"
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
                  result="effect1_dropShadow_1_14"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_14"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="font-readex font-bold text-[36px] leading-normal text-bekasin-dark mb-2">
          BekasinAja
        </h1>

        {/* FOR SALE tagline */}
        <p className="font-metal text-[24px] leading-normal text-[#263238]">
          FOR SALE
        </p>
      </div>
    </div>
  );
};

export default Index;
