import { ButtonGroup, ButtonGroupProps } from "@mui/material";

export default function ShineButtonGroup({
  children,
  ...rest
}: ButtonGroupProps) {
  return (
    <ButtonGroup {...rest} aria-label="button group">
      {children}
    </ButtonGroup>
  );
}
