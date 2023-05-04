import { Icon } from "@clinia-ui/react";

export const TooltipIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M512 938.667c235.642 0 426.667-191.025 426.667-426.667 0-235.641-191.025-426.667-426.667-426.667C276.359 85.333 85.334 276.36 85.334 512c0 235.642 191.025 426.667 426.666 426.667Zm-12.288-397.995c-5.916 13.653-8.875 29.582-8.875 47.787h68.267c0-18.66 4.324-34.361 12.971-47.104 9.102-12.743 22.983-27.535 41.642-44.374 14.564-13.198 26.169-24.576 34.817-34.133 8.647-9.557 15.928-21.39 21.845-35.499 6.371-14.563 9.557-31.175 9.557-49.834 0-37.775-14.563-67.357-43.691-88.747C607.118 266.923 567.751 256 518.144 256c-39.139 0-73.728 6.599-103.765 19.797-29.582 13.199-53.931 32.086-73.046 56.662l49.835 35.498c28.217-35.953 68.949-53.93 122.197-53.93 30.493 0 54.386 6.826 71.681 20.48 17.294 13.198 25.941 30.947 25.941 53.248 0 16.384-4.324 30.492-12.971 42.325-8.647 11.378-22.073 25.031-40.277 40.96-14.564 13.198-26.397 24.576-35.499 34.133-8.647 9.558-16.156 21.391-22.528 35.499Zm-6.144 190.464c8.647 8.192 19.342 12.288 32.086 12.288 12.287 0 22.527-4.096 30.719-12.288 8.648-8.647 12.971-19.115 12.971-31.403s-4.096-22.528-12.288-30.72c-8.192-8.647-18.659-12.97-31.402-12.97-12.744 0-23.439 4.323-32.086 12.97-8.192 8.192-12.288 18.432-12.288 30.72s4.096 22.756 12.288 31.403Z"
    />
  </Icon>
);
