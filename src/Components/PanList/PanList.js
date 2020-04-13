import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PanItem from './PanItem/PanItem';    

const useStyles = makeStyles(theme => ({
  root: {
        display: "flex",
        padding: 20,
        margin: "auto",
        width: "100%",
        boxSizing: "border-box",
  },
  icon: {
        width: 100,
        height: 100,
        paddingTop: 10
  }
}));

export default function SpacingGrid(props) {
  const classes = useStyles();

  const selectedPans = props.selectedPans;

  return (
    <Grid container className={classes.root} justify="center" spacing={2}>
      <Grid key={-1} item>
          <PanItem onClick={props.addHandler} create/>
      </Grid>
      {props.pans.map((pan, index) => (
        <Grid key={index} item>
          <PanItem key={index} selected={selectedPans.includes(index)} selectHandler={() => props.selectHandler(index)} shape={pan.type} dimensions={pan.measures}/>
        </Grid>
      ))}
    </Grid>
  );
}
