import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../App.css";
import { DataContext } from "../context/Context";
import axios from "axios";
import { actions } from "../context/Reducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#314f64",
  borderRadius: "5px",
  boxShadow: 24,
  color: "white",
  p: 4,
};

export default function Edit() {
  const { state, dispatch } = React.useContext(DataContext);
  const [input, setInput] = React.useState({
    invoice_currency: "",
    cust_payment_terms: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInput({
      invoice_currency: "",
      cust_payment_terms: "",
    });
    dispatch({ type: actions.SET_DESELECT });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    input.sl_no = state.selected[0];
    try {
      if (!Object.values(input).includes("")) {
        const res = await axios.post(
          "http://localhost:8080/Backend/update",
          null,
          {
            params: input,
          }
        );
        const index = state.myData.findIndex((row) => row.sl_no === input.sl_no);
        dispatch({ type: actions.EDIT_DATA, payload: { input, index } });
        handleClose();
      } else {
        alert("All field should be filled");
      }
    } catch (e) {
      console.log(e);
      handleClose();
    }
  };

  return (
    <div>
      <Button
        style={{ color: "white", borderRadius: 0 }}
        onClick={handleOpen}
        disabled={state.selected.length === 1 ? false : true}
        fullWidth
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ marginBottom: "20px", marginLeft: "27px" }}
          >
            EDIT
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
                backgroundColor: "white",
                borderRadius: 2,
                textAlign: "center",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ textAlign: "center" }}>
              <TextField
                id="outlined-basic"
                label="Invoice Currency Type"
                variant="filled"
                name="invoice_currency"
                value={input.invoice_currency}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Customer Payment Terms"
                variant="filled"
                name="cust_payment_terms"
                value={input.cust_payment_terms}
                onChange={handleChange}
              />
            </div>

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <Button sx={{ flex: ".5" }} onClick={handleClick}>
                EDIT
              </Button>
              <Button
                sx={{ flex: ".5", backgroundColor: "red" }}
                onClick={handleClose}
                color="error"
              >
                CANCEL
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
