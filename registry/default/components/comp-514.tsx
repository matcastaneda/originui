import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Step One",
    description: "Desc for step one",
  },
  {
    step: 2,
    title: "Step Two",
    description: "Desc for step two",
  },
  {
    step: 3,
    title: "Step Three",
    description: "Desc for step three",
  },
];

export default function Component() {
  return (
    <Stepper defaultValue={1}>
      {steps.map(({ step, title, description }) => (
        <StepperItem
          key={step}
          step={step}
          className="max-md:items-start [&:not(:last-child)]:flex-1"
        >
          <StepperTrigger className="max-md:flex-col">
            <StepperIndicator />
            <div className="text-center md:text-left">
              <StepperTitle>{title}</StepperTitle>
              <StepperDescription className="max-sm:hidden">{description}</StepperDescription>
            </div>
          </StepperTrigger>
          {step < steps.length && <StepperSeparator className="max-md:mt-3.5 md:mx-4" />}
        </StepperItem>
      ))}
    </Stepper>
  );
}
