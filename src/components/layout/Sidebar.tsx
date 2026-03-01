import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";
const Sidebar = ({ onNavigate }: { onNavigate?: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <List>
        <ListItemButton
          selected={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          selected={location.pathname === "/timesheet"}
          onClick={() => navigate("/timesheet")}
        >
          <ListItemIcon><AccessTimeIcon /></ListItemIcon>
          <ListItemText primary="Timesheet" />
        </ListItemButton>

        <ListItemButton
          selected={location.pathname === "/calendar"}
          onClick={() => navigate("/calendar")}
        >
          <ListItemIcon><CalendarMonthIcon /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>

        <ListItemButton
          selected={location.pathname === "/users"}
          onClick={() => navigate("/users")}
        >
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton
          selected={location.pathname === "/settings"}
          onClick={() => navigate("/settings")}
        >
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;