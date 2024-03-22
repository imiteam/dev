"use client";

import { memo } from "react";

export const SwitchIcon = memo(function SwitchIcon(props: {
  iconName: string;
  isActive: boolean;
}) {
  switch (props.iconName) {
    case "text-20-regular":
      return (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative right-[3px] vsm:left-[1px]"
        >
          <path
            d="M13.8333 8.33333H3M17.1667 5H3M17.1667 11.6667H3M13.8333 15H3"
            stroke={props.isActive ? "white" : "rgba(11, 59, 236, 1)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "assistant-20-regular":
      return (
        <svg
          width="20"
          height="19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#0B3BEC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke={props.isActive ? "white" : "rgba(11, 59, 236, 1)"}
              d="M2.5 9.833c0-1.23 0-1.844.082-2.358.416-2.588 2.33-4.615 4.774-5.054.485-.088 1.066-.088 2.227-.088h.834c1.161 0 1.742 0 2.227.088 2.444.44 4.358 2.466 4.774 5.054.082.514.082 1.129.082 2.358 0 1.23 0 1.845-.082 2.358-.416 2.588-2.33 4.615-4.774 5.055-.485.087-1.066.087-2.227.087h-.834c-1.161 0-1.742 0-2.227-.087-2.444-.44-4.358-2.467-4.774-5.055-.082-.513-.082-1.128-.082-2.358Zm15-1.25a.417.417 0 0 1 .834 0v2.5a.417.417 0 0 1-.834 0v-2.5Z"
            />
            <path
              stroke={props.isActive ? "white" : "rgba(11, 59, 236, 1)"}
              d="M1.667 8.583a.417.417 0 0 1 .833 0v2.5a.417.417 0 0 1-.833 0v-2.5Zm4.583 4.584h.833c.23 0 .417.186.417.416 0 .23.186.417.417.417h.833c.23 0 .417-.187.417-.417 0-.23.186-.416.416-.416h.834c.23 0 .416.186.416.416 0 .23.187.417.417.417h.833c.23 0 .417-.187.417-.417 0-.23.187-.416.417-.416h.833m-.833-2.5h.833c.388 0 .582 0 .736-.064a.833.833 0 0 0 .45-.45C15 9.998 15 9.804 15 9.416c0-.389 0-.583-.063-.736a.833.833 0 0 0-.451-.45c-.154-.064-.348-.064-.736-.064h-.833c-.389 0-.583 0-.736.063a.833.833 0 0 0-.45.451c-.064.153-.064.347-.064.736 0 .388 0 .582.063.735a.833.833 0 0 0 .451.451c.153.064.347.064.736.064Zm-6.667 0h.833c.389 0 .583 0 .736-.064a.833.833 0 0 0 .45-.45c.064-.154.064-.348.064-.736 0-.389 0-.583-.063-.736a.833.833 0 0 0-.451-.45c-.153-.064-.347-.064-.736-.064H6.25c-.388 0-.582 0-.736.063a.833.833 0 0 0-.45.451C5 8.834 5 9.028 5 9.417c0 .388 0 .582.063.735a.833.833 0 0 0 .451.451c.154.064.348.064.736.064ZM17.399 6.66l.547-.547c.55-.55.824-.824.951-1.13a1.66 1.66 0 0 0 0-1.276c-.127-.306-.401-.58-.95-1.13-.55-.549-.824-.823-1.13-.95a1.667 1.667 0 0 0-1.276 0c-.268.11-.512.335-.937.758-.075.074-.112.112-.15.145a2.106 2.106 0 0 1-.266.205l-.021.015M2.399 6.601l-.488-.488c-.55-.55-.824-.824-.95-1.13a1.667 1.667 0 0 1 0-1.276c.126-.306.4-.58.95-1.13.549-.549.824-.823 1.13-.95.408-.17.867-.17 1.275 0 .307.127.581.401 1.13.95l.316.316"
            />
          </g>
        </svg>
      );
    case "picture-20-regular":
      return (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative right-[2px] vsm:left-[1px]"
        >
          <path
            d="M16.3333 17.5H17.1753C17.9846 17.5 18.3892 17.5 18.6123 17.3313C18.8066 17.1843 18.9269 16.9596 18.9414 16.7163C18.958 16.4371 18.7336 16.1004 18.2847 15.4271L15.776 11.6641C15.4051 11.1077 15.2196 10.8295 14.9858 10.7325C14.7815 10.6478 14.5518 10.6478 14.3474 10.7325C14.1136 10.8295 13.9282 11.1077 13.5572 11.6641L12.9371 12.5943M16.3333 17.5L9.92954 8.25015C9.56126 7.71818 9.37712 7.4522 9.1471 7.3587C8.94589 7.2769 8.72069 7.2769 8.51947 7.3587C8.28946 7.4522 8.10531 7.71818 7.73703 8.25015L2.78179 15.4077C2.3126 16.0854 2.078 16.4243 2.09136 16.7061C2.10299 16.9515 2.22234 17.1793 2.41751 17.3286C2.64162 17.5 3.05376 17.5 3.87804 17.5H16.3333ZM18 5C18 6.38071 16.8807 7.5 15.5 7.5C14.1192 7.5 13 6.38071 13 5C13 3.61929 14.1192 2.5 15.5 2.5C16.8807 2.5 18 3.61929 18 5Z"
            stroke={props.isActive ? "white" : "#0B3BEC"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "magic-20-regular":
      return (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="vsm:relative vsm:left-[2px]"
        >
          <path
            d="M11.3335 11.6667L8.83345 9.16675M13.0087 2.91675V1.66675M16.2915 4.2173L17.1754 3.33341M16.2915 10.8334L17.1754 11.7173M9.67541 4.2173L8.79153 3.33341M17.5921 7.50008H18.8421M5.60959 17.3906L13.3073 9.69289C13.6373 9.36288 13.8023 9.19787 13.8642 9.0076C13.9185 8.84023 13.9185 8.65994 13.8642 8.49257C13.8023 8.30229 13.6373 8.13729 13.3073 7.80727L12.6929 7.19289C12.3629 6.86288 12.1979 6.69787 12.0076 6.63605C11.8403 6.58166 11.66 6.58166 11.4926 6.63605C11.3023 6.69787 11.1373 6.86288 10.8073 7.19289L3.10959 14.8906C2.77958 15.2206 2.61457 15.3856 2.55275 15.5759C2.49837 15.7433 2.49837 15.9236 2.55275 16.0909C2.61457 16.2812 2.77958 16.4462 3.10959 16.7762L3.72398 17.3906C4.05399 17.7206 4.219 17.8856 4.40927 17.9475C4.57664 18.0018 4.75693 18.0018 4.9243 17.9475C5.11457 17.8856 5.27958 17.7206 5.60959 17.3906Z"
            stroke={props.isActive ? "white" : "#0B3BEC"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
});