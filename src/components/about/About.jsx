import * as React from "react";
import { red } from "@mui/material/colors";
import { Fab } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import classes from "./About.module.scss";
import EditUser from "./edit-user/EditUser";
import crateContext, { ACTION_SET_USER } from "../../context/Provider";

function About() {
  const { state, dispatch } = React.useContext(crateContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    dispatch({
      type: ACTION_SET_USER,
      payload: user,
    });
  }, []);

  return (
    <div className={classes["about-box"]}>
      <EditUser open={open} handleClose={handleClose} />
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: red[500],
                width: 56,
                height: 56,
              }}
              aria-label="recipe"
            >
              <span>{state?.user?.gender}</span>
            </Avatar>
          }
          action={
            <Fab
              className="MuiFab"
              color="secondary"
              size="small"
              aria-label="edit"
              style={{ zIndex: 1 }}
              onClick={handleOpen}
            >
              <EditIcon />
            </Fab>
          }
          title={
            <span className={classes["about-box--title"]}>
              {`First name: ${state?.user?.firstName}`}
              <br />
              {`Last name: ${state?.user?.lastName}`}
            </span>
          }
          subheader={
            <span
              color="text.secondary"
              className={classes["about-box--username"]}
            >{`Username: ${state?.user?.username}`}</span>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={state?.user?.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            className={classes["about-box--token"]}
            variant="h6"
            color="text.secondary"
          >
            Token: {state?.user?.token}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default About;
