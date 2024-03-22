"use client";

import { useTheme } from "next-themes";
import { memo } from "react";

export const ProfilePlansIcon = memo(function ProfilePlansIcon() {
  const { theme } = useTheme();

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="wallet-03">
        <path
          id="Icon"
          d="M11 9.33333H11.0067M2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V6C14 5.26362 13.403 4.66667 12.6667 4.66667L3.33333 4.66667C2.59695 4.66667 2 4.06971 2 3.33333ZM2 3.33333C2 2.59695 2.59695 2 3.33333 2H11.3333M11.3333 9.33333C11.3333 9.51743 11.1841 9.66667 11 9.66667C10.8159 9.66667 10.6667 9.51743 10.6667 9.33333C10.6667 9.14924 10.8159 9 11 9C11.1841 9 11.3333 9.14924 11.3333 9.33333Z"
          stroke={theme === "light" ? "#667085" : "#94969C"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
});
