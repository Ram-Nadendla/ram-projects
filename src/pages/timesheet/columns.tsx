import type { GridColDef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";

export const columns: GridColDef[] = [
  { field: "date", headerName: "Date", flex: 1 },
  { field: "user", headerName: "User", flex: 1 },
  { field: "project", headerName: "Project", flex: 1 },
  { field: "hours", headerName: "Hours", flex: 0.5 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params: any) => {
      const color =
        params.value === "Approved"
          ? "success"
          : params.value === "Pending"
          ? "warning"
          : "error";

      return <Chip label={params.value} color={color} size="small" />;
    },
  },
];