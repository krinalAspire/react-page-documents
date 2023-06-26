import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { FileText } from "react-feather";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ResizableIcon = styled(FileText)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;

// const endIcon = styled(FileText)`
//   width: 1.2rem;
//   height: 1.5rem;
//   padding: 0.3rem;
//   display: grid;
// `;

// const CheckCircleicon = styled(CheckCircleIcon)`
//   width: 1.2rem;
//   height: 1.5rem;
//   padding: 0.3rem;
//   display: flex;
//   justify-content: flex-end;
// `;


const ButtonComponent = ({isActive,buttonId , name }) => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (id) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(id)) {
        return prevSelectedButtons.filter((buttonId) => buttonId !== id);
      } else {
        return [...prevSelectedButtons, id];
      }
    });
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        startIcon={<ResizableIcon />}
        size="medium"
        endIcon={selectedButtons.includes(buttonId) ?<CheckCircleIcon sx={{position:"absolute", bottom:"42%", right:7 , translate:"translateY(1px)"}}/>:null}
        //className={isActive ? "active" : null}
        // onClick={handleClose}
        onClick={() => handleButtonClick(buttonId)}
        sx={{
          backgroundColor:selectedButtons.includes(buttonId) ? "#9F77EB" : "#D3D3D3",
          fontSize: "1.5",
          fontWeight: "bolder",
          color: selectedButtons.includes(buttonId) ? "white": "black",
          height: "8vh",
          textTransform: "none",
          padding: "4px 20px",
          justifyContent: "start",
          position:"relative",
          // justifyContent:"flexDirection: 'column-reverse', alignItems: 'flex-end'",
          ml: 1,
            // ":hover": {
            //   bgcolor: selectedButtons.includes(buttonId) ? "#9F77EB": "#D3D3D3",
            //   color: selectedButtons.includes(buttonId) ? "white": "black", 
            // },
            ":hover": {
              bgcolor: "#9F77EB",
              color: "white", 
            },
            // '&:active': {
            //   boxShadow: 'none'},          
        }}
      >
        {name}
        <Grid> </Grid>
      </Button>
    </>
  );
};

export default ButtonComponent;
