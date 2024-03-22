import { memo } from "react"

export const CardSwitchIcon = memo(function CardSwitchIcon({icon}: {icon: string}) {
    switch (icon) {
      case 'Visa':
        return (
          <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
              fill="white"
            />
            <path
              d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
              stroke="#DAE3E9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3336 21.1451H11.5872L9.52784 13.0573C9.43009 12.6852 9.22255 12.3563 8.91725 12.2013C8.15535 11.8118 7.31579 11.5017 6.3999 11.3454V11.034H10.824C11.4346 11.034 11.8925 11.5017 11.9689 12.045L13.0374 17.879L15.7824 11.034H18.4524L14.3336 21.1451ZM19.9789 21.1451H17.3852L19.5209 11.034H22.1146L19.9789 21.1451ZM25.4702 13.8351C25.5465 13.2905 26.0044 12.9791 26.5387 12.9791C27.3783 12.9009 28.2928 13.0573 29.0561 13.4455L29.514 11.2685C28.7508 10.9571 27.9112 10.8008 27.1493 10.8008C24.6319 10.8008 22.8002 12.2013 22.8002 14.1451C22.8002 15.6238 24.0977 16.4003 25.0136 16.868C26.0044 17.3344 26.3861 17.6458 26.3097 18.1122C26.3097 18.8118 25.5465 19.1232 24.7846 19.1232C23.8687 19.1232 22.9528 18.89 22.1146 18.5004L21.6567 20.6787C22.5725 21.0669 23.5634 21.2233 24.4793 21.2233C27.3019 21.3001 29.0561 19.9009 29.0561 17.8008C29.0561 15.1561 25.4702 15.0011 25.4702 13.8351ZM38.1332 21.1451L36.0738 11.034H33.8618C33.4038 11.034 32.9459 11.3454 32.7932 11.8118L28.9797 21.1451H31.6497L32.1826 19.6677H35.4632L35.7685 21.1451H38.1332ZM34.2434 13.7569L35.0053 17.5676H32.8696L34.2434 13.7569Z"
              fill="#172B85"
            />
          </svg>
        )
      default :
      return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z" fill="#2A4157" fill-opacity="0.24"/>
          <circle cx="6" cy="15" r="1" fill="#222222"/>
          <rect x="3" y="9" width="18" height="2" fill="#222222"/>
        </svg>
      )
    }
  }
)