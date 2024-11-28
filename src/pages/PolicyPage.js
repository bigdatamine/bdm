import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Box, List, ListItem, Link, Divider } from '@material-ui/core';
import './Policy.css';
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
function PolicyPage() {
  const classes = styles();
  const { state = { drawer: false } } = useContext(StateContext);

  const { drawer } = state;

  return (
    <main className={clsx(classes.content, { [classes.contentShift]: drawer })}>
      <div className={classes.drawerHeader} />
      <div className="privacy-policy-container">
      <header>
        <h1 className="title">Privacy Policy for BMD App</h1>
        <p className="last-updated">Last updated: 27 November 2024</p>
      </header>

      <section className="policy-section">
        <p>Big Data Mining (Pty) Ltd ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the BMD App ("the App"). By using the App, you agree to the terms outlined in this policy.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>

        <ul>
          <li><strong>1.1. Personal Information</strong>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Contact information</li>
              <li>Account login credentials</li>
            </ul>
          </li>
          <li><strong>1.2. Non-Personal Information</strong>
            <ul>
              <li>Device information (e.g., device type, operating system)</li>
              <li>IP address</li>
              <li>App usage data (e.g., time spent, pages viewed)</li>
            </ul>
          </li>
          <li><strong>1.3. Sensitive Data</strong>
            <ul>
              <li>If applicable, we may collect sensitive data, such as location data, only with your explicit consent.</li>
            </ul>
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Provide and improve the App’s functionality.</li>
          <li>Personalize user experiences.</li>
          <li>Communicate with you, including updates or support.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share your data with:</p>
        <ul>
          <li>Service Providers: To facilitate app functionality (e.g., hosting, analytics).</li>
          <li>Legal Authorities: When required by law or to protect our rights.</li>
          <li>Affiliates: Companies under Big Data Mining (Pty) Ltd for internal purposes.</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>We retain your data only as long as necessary for the purposes outlined in this policy or as required by law. Once no longer needed, your data is securely deleted or anonymized.</p>

        <h2>5. Your Rights</h2>
        <p><strong>Under GDPR (for EU residents):</strong></p>
        <ul>
          <li>Right to access your data.</li>
          <li>Right to rectify incorrect or incomplete data.</li>
          <li>Right to delete your data (“Right to be Forgotten”).</li>
          <li>Right to restrict or object to data processing.</li>
          <li>Right to data portability.</li>
          <li>Right to lodge a complaint with a supervisory authority.</li>
        </ul>

        <p><strong>Under CCPA (for California residents):</strong></p>
        <ul>
          <li>Right to know what data we collect and how we use it.</li>
          <li>Right to request deletion of your data.</li>
          <li>Right to opt out of the sale of your data.</li>
        </ul>
        <p>You can exercise these rights by contacting us at [Insert Contact Email].</p>

        <h2>6. Data Security</h2>
        <p>We implement technical and organizational measures to protect your data against unauthorized access, alteration, or loss. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>7. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar technologies to enhance your experience. You can manage your preferences or disable cookies in your device settings.</p>

        <h2>8. Third-Party Services</h2>
        <p>The App may link to third-party services (e.g., payment processors, analytics tools). This Privacy Policy does not apply to those services, and we encourage you to review their policies before engaging.</p>

        <h2>9. International Data Transfers</h2>
        <p>Your data may be stored and processed outside your country of residence. We ensure adequate protection measures are in place, in line with GDPR and other applicable regulations.</p>

        <h2>10. Children’s Privacy</h2>
        <p>The App is not intended for children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect data from children. If we become aware that a child’s data has been collected, we will delete it promptly.</p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted with a "Last updated" date at the top. Continued use of the App signifies acceptance of the revised policy.</p>

        <h2>12. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
        <p><strong>Big Data Mining (Pty) Ltd</strong></p>
        <p>Email: <a href="mailto:info@bigdatamining.co.bw">info@bigdatamining.co.bw</a>, <a href="mailto:privacy@bigdatamining.co.bw">privacy@bigdatamining.co.bw</a></p>
        <p>Phone: +267 76571 602</p>
        <p>Address: 38722, Block 6, Gaborone Botswana</p>
      </section>
    </div>
  
    </main>
  );
}

export default PolicyPage;
