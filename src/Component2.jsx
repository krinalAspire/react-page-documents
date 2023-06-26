import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Img from "../src/images/x-circle.svg";
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  TextField,
} from "@mui/material";
import CardComponent2 from "./CardComponent2";

function Component2({ handleClose , isActive}) {
  // const [open, setOpen] = React.useState(true);

  // const handleClose = () => {
  //   console.log("open",open);
  //   setOpen(!open);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  return (
    <Card sx={{ width: "65vw", height: "95vh" }}>
      <CardActionArea>
        <CardHeader
          sx={{
            backgroundColor: "#d3d3d3",
            height: 30,
          }}
          title={
            <Typography
              sx={{ fontWeight: "bolder", mb: 1, fontSize: "3  vh", mt: 1 }}
            >
              Create a Document
            </Typography>
          }
          action={
            <Avatar
              onClick={handleClose}
              src={Img}
              sx={{
                marginLeft: "auto",
                height: "3vh",
                width: "3vh",
                display: "flex",
                marginTop : '0.5rem',
                alignItems: 'center',
                mr: 2,
              }}
            />
          }
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            mb={2}
            mt={1}
            color="textSecondary"
            sx={{ fontSize: "small" }}
          >
            Select one or more documents type you'd like to process in this
            workplace. You can add more later.
          </Typography>
          <div>
            <CardComponent2 isActive={isActive} handleClose={handleClose} />
          </div>

          <div>
            <Typography
              sx={{ fontWeight: "bolder", mb: 1, mt: 3, fontSize: "small" }}
            >
              Workplace Name
            </Typography>
            <TextField
              // defaultValue={"hello"}
              id="outlined-basic"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#9F77EB",
            fontSize: "small",
            fontWeight: "bold",
            textTransform: "none",
            ml: 1,
            ":hover": {
              bgcolor: "#9F77EB",
              color: "white",
            },
          }}
          onClick={handleClose}
        >
          Create Documents
        </Button>
        {/* </div> */}
      </CardActions>
    </Card>
  );
}

export default Component2;
