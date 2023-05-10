import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Button, Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import PersonalDetails from "./businessInformation";
import Billing from "./Billing";
import Review from "./Review";

const steps = [{ label: "Business Information" }, { label: "Billing" }, { label: "Finish" }];

const MultiStepper = ({
  variant,
}: {
  variant: "circles" | "circles-alt" | "simple" | undefined;
}) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  const bg = useColorModeValue("gray.200", "gray.700");

  // const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Flex flexDir="column" my={10} width={{base: '100%', lg: '70%'}}>
      <Steps variant={variant} colorScheme="blue" activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <Box sx={{ p: 8, '@media (max-width: 780px)': {px: 2, py:4}, bg, my: 8, rounded: "md" }}>
              {index === 0 && (
                <PersonalDetails />
              )}

              {index === 1 && (
                <Billing />
              )}

              {index === 2 && (
                <Review />
              )}
            </Box>
          </Step>
        ))}
      </Steps>

      {hasCompletedAllSteps && (
        <Box sx={{ bg, my: 8, p: 8, rounded: "md" }}>
          <Review />
        </Box>
      )}

      <Flex width="100%" justify="flex-end" gap={4}>
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={reset}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>

            {isLastStep ? (
              <Link href={'/dashboard'}>
                <Button size="sm">
                    Finish
                </Button>
              </Link>
            ) : (
            <Button size="sm" onClick={nextStep}>
               Next
            </Button>
            )}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default MultiStepper