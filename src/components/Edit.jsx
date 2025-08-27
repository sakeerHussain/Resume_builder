import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { RiEditBoxLine } from "react-icons/ri";

const Edit = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "auto",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* button */}
      <Button onClick={handleOpen} className="fs-2" title="Edit">
        {" "}
        <RiEditBoxLine />
      </Button>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="mb-3"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit Details
          </Typography>

          {/* Personal Details */}
          <Typography className="mb-4" variant="h5">
            Personal Details
          </Typography>
          <Stack>
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Job Title"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Location"
              variant="standard"
            />
          </Stack>

          {/* Contact Details */}
          <Typography className="mt-3 mb-4" variant="h5">
            Contact Details
          </Typography>
          <Stack>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Github Profile Link"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Linkedin Profile Link"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Portfolio Link"
              variant="standard"
            />
          </Stack>

          {/* Educational Details */}
          <Typography className="mt-3 mb-4" variant="h5">
            Education Details
          </Typography>
          <Stack>
            <TextField
              id="standard-basic"
              label="Course Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="College Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="University"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Year of Passout"
              variant="standard"
            />
          </Stack>

          {/* Professional Details */}
          <Typography className="mt-3 mb-4" variant="h5">
            Professional Details
          </Typography>
          <Stack>
            <TextField
              id="standard-basic"
              label="Job or Internship"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Company Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Location"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Duration"
              variant="standard"
            />
          </Stack>

          {/* Skills */}
          <Typography className="mt-3 mb-4" variant="h5">
            Skills
          </Typography>
          <Stack>
            <TextField
              id="standard-basic"
              label="Add Skill"
              variant="standard"
            />
            <Button className="mt-3" variant="text">
              ADD
            </Button>

            <Typography className="mt-3 mb-4" variant="h6">
              Selected Skills:
            </Typography>
          </Stack>

          {/* Professional Summary */}
          <Typography className="mt-3 mb-4" variant="h5">
            Professional Summary
          </Typography>

          <Stack>
            <TextField
              id="standard-multiline-static"
              label="Write a short summary of yourself"
              multiline
              rows={4}
              // defaultValue="Default Value"
              variant="standard"
            />{" "}
          </Stack>

          <Button className="mt-1" variant="text">Update</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Edit;
