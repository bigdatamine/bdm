import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { StateContext } from "../StateContext";
import Image from "material-ui-image";
import image1 from "../images/code.jpg";
import Divider2 from './../components/Divider_sub';

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
function ServicePage2() {
  const classes = styles();
  const { state = { drawer: false } } = useContext(StateContext);

  const { drawer } = state;

  return (
    <main className={clsx(classes.content, { [classes.contentShift]: drawer })}>
      <div className={classes.drawerHeader} />
      <div>
      <Image src={image1} aspectRatio={6 / 1} />
    </div>
    <Divider2 />
      <Typography variant="h3" >App Development</Typography>
      <Typography paragraph>
      Domain Name Registration, Website Designing and Development, Multimedia Presentations, Web Hosting, Internet & SMS Based Marketing, Search Engine Optimization, Live Chart Service, Web Server Configuration, Integrated Web Application Development.

      </Typography>
    </main>
  );
}

export default ServicePage2;
