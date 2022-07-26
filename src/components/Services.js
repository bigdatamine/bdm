import React from "react";
import Slider from "react-slick";
import Service from "./Service";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Divider from "./Divider";

const styles = makeStyles((theme) => ({
  root: {
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    minHeight: "588px",
    paddingTop: "50px",
    paddingBottom: "125px",
    backgroundColor: "#EBECEC",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  slider: {
    "& > button": {
      width: "36px",
      height: "36px",
      "&:before": {
        color: theme.palette.primary.main,
        fontSize: "36px",
        opacity: 0.85,
      },
      "&:hover": {
        color: theme.palette.primary.dark,
      },
      "&.slick-prev": {
        "&.slick-arrow": { left: "-50px" },
      },
      "&.slick-next": {
        "&.slick-arrow": { right: "-50px" },
      },
    },
  },
}));

function Carousel() {
  const classes = styles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Divider />
        {/* <Typography color="primary" variant="h2">
          Services
        </Typography> */}
        <Slider className={classes.slider} {...settings}>
        <Service title="Data Management Services" link="/service1">
      
      This includes: Document Management Solutions, Cloud Service Consultations, Database Design & Development, Reports Formulation from existing Data, Imaging, Data Capture and Migration services, Data center Maintenance & Hosting facilities
                </Service>
          <Service title="App Development Services" link="/service2">      
              Domain Name Registration, Website Designing and Development, Multimedia Presentations, Web Hosting, Internet & SMS Based Marketing, Search Engine Optimization, Live Chart Service, Web Server Configuration, Integrated Web Application Development.
          </Service>

          <Service title="Other ICT services" link="/service3">
                  
          ICT consultancy services , Security Management and Maintenance Services, Supplies, Digital Forensic and Network management services
          </Service>
        </Slider>
      </Container>
    </div>
  );
}

export default Carousel;
