import ReactPlayer from "react-player";
import Assigned from "./Assigned";
import classes from "./Training.module.css";
import TrainingTabs from "./TrainingTabs";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from 'react';

export const Training = () => {
  return (
    <div className={classes.newWrap}>
    <TrainingTabs labels={["Assigned", "General"]}>
      <div className={classes.contentWrap}>
        <Assigned />
      </div>
    </TrainingTabs>
    </div>
  );
};

export function TrainingSUPERV ()  {
  const [startDate, setStartDate] = useState(new Date("03/10/2000"));
  return (
    <>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <div className={classes.newWrap}>
    <TrainingTabs labels={["General"]}>
      <div className={classes.contentWrap}>
        <Assigned />
      </div>
    </TrainingTabs> 
    </div>
    </>
  );
};

