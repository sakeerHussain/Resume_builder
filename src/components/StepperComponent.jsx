import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const StepperComponent = () => {
  const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Work Experience",
    "Skills and Certifications",
    "Review & Submit",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  const displayFormDetails = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h3>Personal Details</h3>
            <TextField
              className="w-100"
              id="standard-basic"
              label="Full Name"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Job Title"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Location"
              variant="standard"
            />
          </>
        );
      case 1:
        return (
          <>
            <h3>Contact Details</h3>
            <TextField
              className="w-100"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              className="w-100"
              id="standard-basic"
              label="Phone Number"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Github Profile Link"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="LinkedIn Profile Link"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Portfolio Link"
              variant="standard"
            />
          </>
        );
      case 2:
        return (
          <>
            <h3>Educational Details</h3>
            <TextField
              className="w-100"
              id="standard-basic"
              label="Course Name"
              variant="standard"
            />
            <TextField
              className="w-100"
              id="standard-basic"
              label="College Name"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="University"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Year of Passout"
              variant="standard"
            />
          </>
        );
      case 3:
        return (
          <>
            <h3>Work Experience</h3>
            <TextField
              className="w-100"
              id="standard-basic"
              label="Job or Internship"
              variant="standard"
            />
            <TextField
              className="w-100"
              id="standard-basic"
              label="Company Name"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Location"
              variant="standard"
            />

            <TextField
              className="w-100"
              id="standard-basic"
              label="Duration"
              variant="standard"
            />
          </>
        );

      case 4:
        return (
          <>
            <h3>Skills</h3>
            <TextField
              className="w-100 mb-2"
              id="standard-basic"
              label="Add Skill"
              variant="standard"
            />
 
            <Button variant="outlined">Add</Button>
            <h4>Suggestions:</h4>
            <Stack direction={"row"} spacing={2}>
              <Button variant="outlined">React</Button>
              <Button variant="outlined">Node</Button>
              <Button variant="outlined">Express</Button>
              <Button variant="outlined">Angular</Button>
              <Button variant="outlined">Mongo DB</Button>
            </Stack>
          </>
        );
      case 5:
        return (
          <>
            <h3>Proffessional Summary</h3>
            <TextField
              className="w-100"
              id="standard-multiline-static"
              label="Write a short summery of yourself"
              multiline
              rows={4}
              defaultValue="I am a passionate full-stack developer with hands on experience in React, Node ..."
              variant="standard"
            />
          </>
        );
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/*  */}
          <Box>{displayFormDetails(activeStep)}</Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default StepperComponent;
