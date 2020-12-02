import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const cardData = [
  {confirmedTitle: "Infected", confirmedDesc: "Number of active cases of COVID-19"},
  {recoveredTitle: "Recovered", recoveredDesc: "Number of recoveries from COVID- 19"},
  {deathsTitle: "Deaths", deathsDesc: "Number of deaths from COVID-19"},
];

const countUpData = [{duration: 3}];
const cardSize = [{small: 12}, {medium: 3}];

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <h1 className={styles.container}>
      <Grid container spacing={3} justify='center' >
        <Grid
          item
          component={Card}
          xs={cardSize.map(({small}) => small)}
          md={cardSize.map(({medium}) => medium)}
          className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              {cardData.map(({confirmedTitle}) => confirmedTitle)}
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={countUpData.map(({duration}) => duration)}
                separator=','></CountUp>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>
              {cardData.map(({confirmedDesc}) => confirmedDesc)}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={cardSize.map(({small}) => small)}
          md={cardSize.map(({medium}) => medium)}
          className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              {cardData.map(({recoveredTitle}) => recoveredTitle)}
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={countUpData.map(({duration}) => duration)}
                separator=','></CountUp>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>
              {cardData.map(({recoveredDesc}) => recoveredDesc)}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={cardSize.map(({small}) => small)}
          md={cardSize.map(({medium}) => medium)}
          className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              {cardData.map(({deathsTitle}) => deathsTitle)}
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={countUpData.map(({duration}) => duration)}
                separator=','></CountUp>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>{cardData.map(({deathsDesc}) => deathsDesc)}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </h1>
  );
};
export default Cards;
