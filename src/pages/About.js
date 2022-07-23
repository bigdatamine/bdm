import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { StateContext } from "../StateContext";

const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));
function Home() {
  const classes = styles();
  const { state = { drawer: false } } = useContext(StateContext);

  const { drawer } = state;

  return (
    <main className={clsx(classes.content, { [classes.contentShift]: drawer })}>
      <div className={classes.drawerHeader} />
      <Typography variant="h3" paragraph>About Us</Typography>
      <Typography paragraph>
      Big Data Mining (BDM) is a whole citizen owned company, it is as a dynamic Information Technology company that provide IT-Enable Solutions, Services and Training around the country. It is offering the global community the finest of software products and solutions that not just fulfilling their needs today but offer them a competitive advantage tomorrow. We have started with the aim of providing world-class service at an affordable price without compromising strength and reliability. We aim to be recognized as one of the leading Web, SMS &amp; Application solution provider in the industry. We also understand that every successful company is a team of skilled and dedicated people. We are having best team of Hardworking, Honest, talented &amp; certified professionals with the necessary skills and drive to provide our customer with a superior service. It is also our mission to provide employment opportunities and business opportunities to young Batswana.


      </Typography>
      <Typography variant="h3" paragraph>Our Vision</Typography>
      <Typography paragraph>
      To be at the forefront of data management and business analytic for our client in the way setting the highest standards of professionalism and Quality of Service.
      </Typography>
    </main>
  );
}

export default Home;
