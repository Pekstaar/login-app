import { Button, Grid, TextField} from "@material-ui/core";
import React from "react";
import style from './style/login.module.css';

const logo = `https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Star_Channel-Japan.svg/1200px-Star_Channel-Japan.svg.png`;

const Login = () => {
  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid className={style.img} item style={{}} md={6}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </Grid>
      <Grid  container item xs={12} md={6} className={style.grid}>
        <div ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid style={{ margin: "0 0 2em 0" }} container justify="center">
            <img
              style={{ objectFit: "cover", width: "20%" }}
              src={logo}
              alt="Logo"
            />
          </Grid>
          <TextField
            style={{ width: "45%" }}
            id="standard-basic"
            label="email"
          ></TextField>
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            style={{ width: "45%", margin: "2em 0" }}
          ></TextField>
          <Button
            style={{ width: "40%", margin: "1em 0 " }}
            variant="contained"
            color="primary"
            size="medium"
          >
            Login
          </Button>
          <Button style={{margin:'1.2em 0'}}> Have no Account?</Button>
          <Grid
            container
            style={{margin:'1em 0',}}
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Button> Get to home page</Button>
            </Grid>
            <Grid item>
              <Button>Forgot password?</Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
