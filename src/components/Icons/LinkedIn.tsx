import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const LinkedIn = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill={color}
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 16 16"
          width="inherit"
          {...props}
        >
          <g clipPath="url(#clip0_91_1206)">
            <path
              d="M4.17294 15.8369H-0.000976562V5.05438H4.17294V15.8369ZM0.694633 15.1413H3.47733V5.74999H0.694633V15.1413Z"
              fill="currentColor"
            />
            <path
              d="M15.999 15.8369H11.8251V9.92391C11.8251 9.34765 11.3579 8.88043 10.7816 8.88043C10.2052 8.88043 9.73812 9.34765 9.73812 9.92391V15.8369H5.56421V5.05438H9.73812V5.75432C10.3681 5.29882 11.1259 5.05387 11.9033 5.05438C14.1598 5.05438 15.999 6.8848 15.999 9.13697V15.8369ZM12.5207 15.1413H15.3033V9.13697C15.2985 7.26324 13.777 5.74757 11.9033 5.74999C11.0468 5.74999 10.2424 6.11085 9.64246 6.76303L9.04238 7.41953V5.74999H6.25982V15.1413H9.04238V9.92391C9.04238 8.96335 9.82104 8.18482 10.7816 8.18482C11.742 8.18482 12.5207 8.96335 12.5207 9.92391V15.1413Z"
              fill="currentColor"
            />
            <path
              d="M2.08598 4.35867C0.933339 4.35867 -0.000976562 3.42435 -0.000976562 2.27171C-0.000976562 1.1192 0.933339 0.184753 2.08598 0.184753C3.23862 0.184753 4.17294 1.1192 4.17294 2.27171C4.17052 3.42333 3.2376 4.35637 2.08598 4.35867ZM2.08598 0.880491C1.31764 0.880491 0.694633 1.50337 0.694633 2.27171C0.694633 3.04018 1.31764 3.66306 2.08598 3.66306C2.85432 3.66306 3.47733 3.04018 3.47733 2.27171C3.47733 1.50337 2.85432 0.880491 2.08598 0.880491Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_91_1206">
              <rect
                width="16"
                height="16"
                fill="currentColor"
                transform="translate(-0.000976562)"
              />
            </clipPath>
          </defs>
        </svg>
      </Icon>
    );
  }
);
LinkedIn.displayName = "LinkedIn";

export default LinkedIn;
