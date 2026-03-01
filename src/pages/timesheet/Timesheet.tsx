import { Box, Typography, Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { rows } from "./mockData";

const Timesheet = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Timesheet
      </Typography>

      <Card sx={{ height: 420 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          rowHeight={48}
          sx={{ border: "none" }}
        />
      </Card>
    </Box>
  );
};

export default Timesheet;