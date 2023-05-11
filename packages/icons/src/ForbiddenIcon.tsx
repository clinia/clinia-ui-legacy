import { Icon } from "@clinia-ui/react";

export const ForbiddenIcon = (props: React.ComponentProps<typeof Icon>) => (
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
      d="M853.334 512C853.334 700.514 700.514 853.334 512 853.334C437.654 853.334 368.86 829.565 312.801 789.211L789.212 312.802C829.565 368.86 853.334 437.654 853.334 512ZM250.246 731.087L731.087 250.246C671.803 200.573 595.394 170.667 512 170.667C323.487 170.667 170.667 323.487 170.667 512C170.667 595.394 200.573 671.803 250.246 731.087ZM938.668 512C938.668 747.642 747.642 938.668 512 938.668C276.359 938.668 85.3333 747.642 85.3333 512C85.3333 276.359 276.359 85.3333 512 85.3333C747.642 85.3333 938.668 276.359 938.668 512Z"
    />
  </Icon>
);
