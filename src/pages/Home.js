import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import firebase from "../firebaseConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("success");
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
        console.log("error");
      });
  };
  console.log(props.user);

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.user && props.user.displayName}
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
