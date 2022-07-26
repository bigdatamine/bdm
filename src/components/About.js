import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import about from "../images/about2.png";
import Image from "material-ui-image";
import Divider from "./Divider";
import { Container, Typography } from "@material-ui/core";
import LinkedButton from "./LinkedButton";
import Grid from "@material-ui/core/Grid";
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    height: "auto",
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    backgroundColor: "#EBECEC",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  about: {
    paddingTop: "80px",
  },
  illustration: {
    paddingTop: "60px",
    paddingLeft: "30px",
    paddingRight: "30px",
    alignContent: "center",
    display: "grid",
    backgroundColor: "transparent",
  },
}));

function About() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Divider />
        <div className={classes.wrapper}>
          <Grid container spacing={2}>
            <Grid item xs={6} lg={7}>
              <div className={classes.about}>
                <div class="views-field views-field-title">
                  <Typography color="primary" variant="h2">
                    About
                  </Typography>
                </div>
                <div class="views-field views-field-body">
                  <div class="field-content">
                    <Typography variant="body1" paragraph>
                    Big Data Mining (BDM) is a whole citizen owned company, it is as a dynamic Information Technology company that provide IT-Enable Solutions, Services and Training around the country. It is offering the global community the finest of software products and solutions that not just fulfilling their needs today but offer them a competitive advantage tomorrow...
                    </Typography>
                  </div>
                </div>
                <div class="about-button">
                  <span class="field-content">
                    <LinkedButton to='About' size="medium">Read More</LinkedButton>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} lg={5}>
              <div className={classes.illustration}>
                <Image src={about} style={{ backgroundColor: "transparent" }} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default About;
