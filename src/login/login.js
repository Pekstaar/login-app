import { Grid, Paper, TextField } from "@material-ui/core";
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
                <div className={styles.icon}>
                <i class="fas fa-user"></i>
                </div>
                <TextField className={styles.input} id="standard-basic" label="Email" />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
