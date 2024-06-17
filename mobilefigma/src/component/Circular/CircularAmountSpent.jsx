// import { CircularProgress } from '@chakra-ui/react'
import React from 'react';
import styles from "./CircularAmountSpent.module.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularAmountSpent = () => {

  const percentage = 49;


  return (
    <div className={styles.app}>

    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`}
      styles={{
        text: {
          fill: '#0466C8',
        },
        trail: {
          stroke: 'white',
        },
        path: {
          stroke: '#0466C8'
        },
      }}
      />
    </div>
    </div>
  )
}

export default CircularAmountSpent;
