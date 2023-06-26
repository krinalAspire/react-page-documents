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


export default function MultiActionAreaCard() {
  return (
    <Card sx={{}}>
        <Typography
            gutterBottom
            component="p"
            color="textSecondary"
            sx={{ mb: 3, mt: 2, fontSize: "small" }}  >
            Select one or more document types you'd like to process in this
            workspace.You can add more later.
          </Typography>

      <CardActionArea>
        <CardHeader
          sx={{
            backgroundColor: "#d3d3d3",
       height:70
          }}
          title={<Typography sx={{ fontWeight: "bolder", mb: 1, fontSize: '3  vh' , mt:1 }}> Create an Organization</Typography>}
          action={<Avatar src={Img } sx={{ marginLeft: "auto" , height:'3vh', width:'3vh' , mb:2 ,marginTop:'2vh' ,mr:2 }} />}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="p"
            color="textSecondary"
            sx={{ mb: 3, mt: 2, fontSize: "small" }}
          >
            Organizations allow you to invite team members and assign them to
            workspaces
          </Typography>
          <div>
            <Typography sx={{ fontWeight: "bolder", mb: 1, fontSize: "small" }}>
              {" "}
              Organization Name
            </Typography>
            <TextField
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
            mt:2,
            textTransform: "none",
            ml: 1,
            ":hover": {
              bgcolor: "#9F77EB",
              color: "white",
            },
          }}
        >
          Create Organization
        </Button>
      </CardActions>
    </Card>
  );
}
