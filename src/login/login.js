import {
  Button,
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import styles from "./style/login.module.css";

const Login = () => {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <Grid container className={styles.grid}>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <h3>Login</h3>

              <form action="">
                <div className={styles.inputGroup}>
                  <Avatar>
                    <i class="fas fa-user"></i>
                  </Avatar>
                  <TextField
                    className={styles.input}
                    id="standard-basic"
                    label="Email"
                    required="true"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <Avatar>
                    <i class="fas fa-user"></i>
                  </Avatar>
                  <TextField
                    className={styles.input}
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    required="true"
                    color="#c90028"
                  />
                </div>
                <Button
                  className={styles.btn}
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
                <div className={styles.typo}>
                  <Typography>Have no account? </Typography>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
