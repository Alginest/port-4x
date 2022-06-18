import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SpeedIcon from "@material-ui/icons/Speed";
const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.about}>
      <Container className={classes.bigCont}>
        <Typography align="center" className={classes.title}>
          About
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        <Grid container className={classes.hexBox} spacing={2}>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}>
                <SpeedIcon className={classes.icon} />
              </div>
              <Typography>Fast</Typography>
              <Typography>
                Fast load times and lag free interaction, my highest priority.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}></div>
              <Typography>Fast</Typography>
              <Typography>
                Fast load times and lag free interaction, my highest priority.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}></div>
              <Typography>Fast</Typography>
              <Typography>
                Fast load times and lag free interaction, my highest priority.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}></div>
              <Typography>Fast</Typography>
              <Typography>
                Fast load times and lag free interaction, my highest priority.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
