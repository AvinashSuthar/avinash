import React from "react";

const OpenToWorkBadge = () => {
  return (
    <div
      className="relative rounded-full bg-blue-700 p-1.5 leading-none m-4 font-medium"
      style={{
        animation: "spinFromInitial 8s linear infinite",
      }}
    >
      <style>
        {`
      @keyframes spinFromInitial {
        0% { transform: rotate(290.196deg); }
        100% { transform: rotate(650.196deg); } /* 290.196 + 360 */
      }
    `}
      </style>
      <div className="relative size-[95px] rounded-full bg-black p-2">
        <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full">
          <svg
            className="transform-origin-center-center"
            viewBox="0 0 100 100"
            overflow="visible"
            fill="black"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
              transformOrigin: "center center",
            }}
          >
            <path
              id="curve-wnxkz4"
              d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
              strokeWidth="none"
              fill="transparent"
            ></path>
            <text>
              <textPath
                href="#curve-wnxkz4"
                startOffset="0"
                dominantBaseline="hanging"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  wordSpacing: "5px",
                  letterSpacing: "2.1px",
                  fill: "rgba(242, 242, 242, 0.9)",
                }}
              >
                OPEN TO WORK · OPEN TO WORK ·
              </textPath>
            </text>
          </svg>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white text-white opacity-80"
        >
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
        </svg>
      </div>
      <span className="sr-only">OPEN TO WORK · OPEN TO WORK ·</span>
    </div>
  );
};

export default OpenToWorkBadge;
