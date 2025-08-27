import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { FaFileDownload } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { AiOutlineRollback } from "react-icons/ai";
import Edit from "./Edit";

const Preview = () => {
  return (
    <div>
      <Box>
        {/* buttons */}
        <Stack direction={'row'} justifyContent={'end'} spacing={2}>
          <Button className="fs-2" title="download" >
            {" "}
            <FaFileDownload />
          </Button>
          
          <Edit />
          <Button className="fs-2" title="history">
            {" "}
            <FaHistory />
          </Button>
          <Button  title="Back">
            {" "}
            {/* <AiOutlineRollback /> */}
            Back
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          width: "700px",
          height: "700px",
          m: 5,
          display: "flex",
          flexWrap: "wrap",
          p: 5,
          borderRadius: "10px",
        }}
      >
        <Paper className="w-100 p-4" elevation={7}>
          <Typography variant="h4" align="center">
            Full name
          </Typography>
          <Typography variant="subtitle2" align="center" color="blue">
            Job Title
          </Typography>
          <Typography variant="subtitle2" align="center">
            Location
          </Typography>

          <Typography variant="subtitle2" align="center">
            {" "}
            Phone | Email
          </Typography>

          <Typography align="center" variant="body2" mb={4}>
            {" "}
            <Link>Github</Link> | <Link>LinkedIn</Link> | <Link>Portfolio</Link>
          </Typography>

          <Divider>Summary</Divider>
          <Typography variant="body2">Summary</Typography>

          <Divider>Education</Divider>
          <Typography align="center" variant="h5">
            Course Name
          </Typography>
          <Typography align="center" variant="body1" mb={4}>
            college name | university | year
          </Typography>

          <Divider>Professional Experience</Divider>
          <Typography variant="h5" align="center">
            Job Name
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            company name | location | duration
          </Typography>

          <Divider>Skills</Divider>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Skills</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Preview;
