import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import shopping1 from "../../images/shopping1.svg";
import shopping2 from "../../images/shopping2.svg";
import shopping3 from "../../images/shopping3.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: "1",
    imgPath: shopping1,
  },
  {
    id: "2",
    imgPath: shopping2,
  },
  {
    id: "3",
    imgPath: shopping3,
  },
];

const CarouselSlide = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  bgcolor: "#f1f2f3",
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default CarouselSlide;
