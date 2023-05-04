import { Icon } from "@clinia-ui/react";

export const SearchEmptyStateIcon = (
  props: React.ComponentProps<typeof Icon>
) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <circle cx="512" cy="512" r="512" fill="currentcolor" />
    <path
      fill="#FFFFFF"
      d="M589.679 558.649H573.337L567.544 553.064C587.818 529.481 600.023 498.864 600.023 465.558C600.023 391.292 539.824 331.094 465.558 331.094C391.292 331.094 331.094 391.292 331.094 465.558C331.094 539.824 391.292 600.023 465.558 600.023C498.864 600.023 529.481 587.818 553.064 567.544L558.649 573.337V589.679L662.083 692.907L692.907 662.083L589.679 558.649ZM465.558 558.649C414.048 558.649 372.467 517.068 372.467 465.558C372.467 414.048 414.048 372.467 465.558 372.467C517.068 372.467 558.649 414.048 558.649 465.558C558.649 517.068 517.068 558.649 465.558 558.649Z"
    />
  </Icon>
);
