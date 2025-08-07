import React, { memo } from "react";
import { Box, Stepper, Step, StepLabel, StepperProps, StepLabelProps } from "@mui/material";

interface CustomStepperProps {
  steps: string[];
  activeStep: number;
  alternativeLabel?: boolean;
  orientation?: StepperProps["orientation"];
  labelProps?: StepLabelProps;
}

const CustomStepper: React.FC<CustomStepperProps> = ({
  steps,
  activeStep,
  alternativeLabel = true,
  orientation = "horizontal",
  labelProps = {},
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
        orientation={orientation}
      >
        {steps.map((label, index) => (
          <Step key={label + index}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default memo(CustomStepper);
