import { Box, Typography, Avatar, Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { users } from "./mockUsers";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "User",
    flex: 1,
    renderCell: (params) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar sx={{ width: 32, height: 32 }} />
        {params.value}
      </Box>
    ),
  },
  { field: "role", headerName: "Role", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "Active" ? "success" : "default"}
        size="small"
      />
    ),
  },
];

const Users = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={users}
          columns={columns}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Users;