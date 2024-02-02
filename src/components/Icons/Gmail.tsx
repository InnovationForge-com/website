import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const Gmail = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill={color}
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 22 22"
          width="inherit"
          {...props}
        >
          <g clip-path="url(#clip0_113_2380)">
            <path
              d="M21.1846 4.158C21.1846 4.15491 21.1846 4.15216 21.1838 4.14907C21.1829 4.14597 21.1826 4.13824 21.1822 4.13291C21.1803 4.10905 21.1755 4.0855 21.1679 4.06279C21.1669 4.05969 21.1679 4.05643 21.1661 4.05333C21.1642 4.05024 21.1643 4.05075 21.1638 4.04938C21.154 4.02441 21.1409 4.00088 21.1248 3.97943C21.1212 3.97461 21.1174 3.97032 21.1135 3.96568C21.0978 3.94673 21.0799 3.92976 21.0602 3.91514C21.0581 3.9136 21.0564 3.91171 21.0543 3.91033C21.0322 3.89578 21.0083 3.88423 20.9832 3.87596C20.9773 3.87389 20.9715 3.87218 20.966 3.87046C20.9395 3.86252 20.9121 3.8583 20.8845 3.85791H1.11821C1.0906 3.8583 1.06318 3.86252 1.03674 3.87046C1.03072 3.87218 1.02505 3.87389 1.01955 3.87596C0.994421 3.88423 0.970494 3.89578 0.948396 3.91033C0.946334 3.91171 0.944615 3.9136 0.942553 3.91514C0.922801 3.92976 0.904908 3.94673 0.889271 3.96568C0.88549 3.97032 0.881537 3.97461 0.877928 3.97943C0.861834 4.00088 0.84871 4.02441 0.838912 4.04938C0.838912 4.05075 0.837193 4.05196 0.836678 4.05333C0.836162 4.05471 0.835818 4.05969 0.834787 4.06279C0.827233 4.0855 0.822443 4.10905 0.820521 4.13291C0.820521 4.13841 0.818975 4.14374 0.818975 4.14907C0.818975 4.15439 0.818115 4.15491 0.818115 4.158V17.8418C0.818115 17.8458 0.819146 17.8496 0.819318 17.8535C0.81982 17.8643 0.82091 17.8751 0.822584 17.8858C0.823959 17.8946 0.825162 17.903 0.827225 17.912C0.829877 17.9224 0.83309 17.9326 0.83685 17.9427C0.839771 17.9508 0.842521 17.9589 0.846131 17.9666C0.850897 17.9768 0.856234 17.9866 0.862115 17.9962C0.86624 18.0031 0.870365 18.0101 0.875006 18.0166C0.88167 18.0257 0.888842 18.0345 0.89649 18.0428C0.902162 18.0489 0.907834 18.0551 0.913678 18.061C0.917287 18.0642 0.920037 18.0682 0.923818 18.0715C0.9276 18.0747 0.930006 18.0744 0.932756 18.0766C0.956221 18.0955 0.982414 18.1108 1.01044 18.1218C1.01646 18.1242 1.02265 18.1256 1.02883 18.1275C1.05595 18.1364 1.0842 18.1413 1.11271 18.1421C1.11477 18.1421 1.11666 18.1431 1.11872 18.1431H1.12268H20.8801H20.884C20.8861 18.1431 20.888 18.1421 20.8898 18.1421C20.9184 18.1413 20.9467 18.1364 20.9739 18.1275C20.9799 18.1256 20.9859 18.1242 20.9911 18.1218C21.0192 18.1108 21.0454 18.0955 21.0689 18.0766C21.0717 18.0744 21.0751 18.0737 21.0779 18.0715C21.0806 18.0692 21.0844 18.0642 21.088 18.061C21.0942 18.0551 21.0999 18.0491 21.1052 18.0428C21.1129 18.0345 21.12 18.0257 21.1267 18.0166C21.1313 18.0101 21.1355 18.0032 21.1396 17.9962C21.1455 17.9866 21.1508 17.9768 21.1556 17.9666C21.1592 17.9589 21.1619 17.9508 21.1648 17.9427C21.1686 17.9326 21.1718 17.9224 21.1745 17.912C21.1765 17.9034 21.1777 17.8948 21.1791 17.8858C21.1808 17.8751 21.1819 17.8643 21.1824 17.8535C21.1824 17.8496 21.1836 17.8458 21.1836 17.8418L21.1846 4.158ZM7.8729 10.3668L10.8047 12.8894C10.8593 12.9364 10.9289 12.9622 11.0009 12.9622C11.0729 12.9622 11.1425 12.9364 11.1971 12.8894L14.1291 10.3668L20.2328 17.5411H1.76944L7.8729 10.3668ZM1.41899 17.0246V4.81371L7.41743 9.97443L1.41899 17.0246ZM14.5846 9.97443L20.5831 4.81371V17.0246L14.5846 9.97443ZM20.0728 4.45879L13.9703 9.70974C13.9693 9.7106 13.9679 9.71111 13.9669 9.71214C13.9659 9.71318 13.9648 9.71455 13.9636 9.71558L11.001 12.2647L8.03841 9.71558C8.03721 9.71455 8.03635 9.71318 8.03515 9.71214L8.03171 9.70974L1.92894 4.45879H20.0728Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_113_2380">
              <rect
                width="22"
                height="22"
                fill="white"
                transform="translate(0.000976562)"
              />
            </clipPath>
          </defs>
        </svg>
      </Icon>
    );
  }
);
Gmail.displayName = "Gmail";

export default Gmail;
