import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <button
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)


// import React from "react";
// import { Link, Button, withStyles } from "@material-ui/core";
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
// const LinkButton = withStyles((theme) => ({

// }))(Button);
// function LinkedButton(props) {
//   const { link, children } = props;
//   return (
//         <Link to="{link}">
//         <button size="medium" type="button">
//            {children}
//         </button>
//     </Link>
//     // <LinkButton  component={link}>
//     //   {children}
//     // </LinkButton>
//   );
// }

// export default LinkedButton;


// root: {
//   fontSize: "14px",
//   lineHeight: "14px",
//   color: "#fff",
//   display: "inline-block",
//   padding: "12px 32px",
//   width: "auto",
//   borderRadius: "35px",
//   textTransform: "capitalize",
//   background: theme.palette.primary.main,
//   "&:hover": {
//     backgroundColor: theme.palette.primary.dark,
//     borderColor: theme.palette.primary.dark,
//   },
//   "&:active": {
//     backgroundColor: theme.palette.primary.dark,
//     borderColor: theme.palette.primary.dark,
//   },
//   "&:focus": {
//     boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
//   },
// },
