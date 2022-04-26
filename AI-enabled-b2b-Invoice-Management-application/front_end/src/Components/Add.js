import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Axios from "axios";
import { actions } from "../context/Reducer";
import { DataContext } from "../context/Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 950,
  bgcolor: "#2a3e4c",
  borderRadius: "5px",
  boxShadow: 24,
  color: "white",
  p: 4,
};

export default function BasicModal() {
  const { state, dispatch } = React.useContext(DataContext);
  const data = {
    total_open_amount: "",
    cust_number: "",
    baseline_create_date: "2000-10-17",
    business_code: "",
    clear_date: "2000-10-17",
    posting_id: "",
    doc_id: "",
    cust_payment_terms: "",
    buisness_year: new Date().getFullYear(),
    invoice_id: "",
    document_create_date: "2000-10-17",
    posting_date: "2000-10-17",
    invoice_currency: "",
    due_in_date: "2000-10-17",
    document_type: "",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInput(data);
  };

  const [input, setInput] = React.useState(data);

  const handleAdd = () => {
    
    if (! Object.values(input).includes("")) {
      Axios.post("http://localhost:8080/Backend/insert", null, {
        params: input,
      })
        .then((res) => {
          if(res.status==200){
            dispatch({ type: actions.INSERT_DATA, payload: input });
            handleClose();
          }else{
            alert("Cannot insert data to datbase")
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("All fields should be filled");
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button
        style={{
          color: "white",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        }}
        onClick={handleOpen}
        fullWidth
      >
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h1" sx={{ marginBottom: "20px" }}>
            ADD
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
                backgroundColor: "white",
                borderRadius: 2,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-basic"
                label="Business Code"
                variant="filled"
                name="business_code"
                value={input.business_code}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Customer number"
                type="number"
                variant="filled"
                name="cust_number"
                value={input.cust_number}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Clear Date"
                variant="filled"
                type="date"
                name="clear_date"
                value={input.clear_date}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Business Year"
                variant="filled"
                type="number"
                name="buisness_year"
                value={input.buisness_year}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Document Id"
                variant="filled"
                name="doc_id"
                type="number"
                value={input.doc_id}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Posting Date"
                variant="filled"
                type="date"
                name="posting_date"
                value={input.posting_date}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Document Create Date"
                variant="filled"
                type="date"
                name="document_create_date"
                value={input.document_create_date}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Due Date"
                variant="filled"
                type="date"
                name="due_in_date"
                value={input.due_in_date}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Invoice Currency"
                variant="filled"
                name="invoice_currency"
                value={input.invoice_currency}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Document Type"
                variant="filled"
                name="document_type"
                value={input.document_type}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Posting Id"
                variant="filled"
                name="posting_id"
                type="number"
                value={input.posting_id}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Total Open Amount"
                variant="filled"
                name="total_open_amount"
                type="number"
                value={input.total_open_amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Baseline Create Date"
                variant="filled"
                type="date"
                name="baseline_create_date"
                value={input.baseline_create_date}
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
              <TextField
                id="outlined-basic"
                label="Invoice Id"
                variant="filled"
                name="invoice_id"
                type="number"
                value={input.invoice_id}
                onChange={handleChange}
              />
            </div>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button sx={{ flex: ".5" }} onClick={handleAdd}>
                ADD
              </Button>
              <Button
                color="error"
                sx={{ flex: ".5", backgroundColor: "red" }}
                onClick={handleClose}
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
