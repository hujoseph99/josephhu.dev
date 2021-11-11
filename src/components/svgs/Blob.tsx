import * as React from "react"

const Blob = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#45A29E"
        d="M148 47.7c16.3 8.8 33 21.9 33.7 36.4.8 14.4-14.5 30.1-26.4 45.2-11.9 15-20.3 29.3-33.2 35.9-12.9 6.7-30.2 5.6-48.6 1.6-18.4-4.1-37.8-11.3-47.9-25.5-10.2-14.1-11-35.3-4.9-52.8 6.1-17.4 19.1-31.1 33.4-40.2 14.4-9.1 30.2-13.6 46-13.7 15.7 0 31.6 4.4 47.9 13.1z"
      />
    </svg>
);

export default Blob;
