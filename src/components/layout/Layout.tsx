import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({
  children,
  onToggleTheme,
}: {
  children: React.ReactNode;
  onToggleTheme: () => void;
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 260,
            },
          }}
        >
          <Sidebar onNavigate={() => setMobileOpen(false)} />
        </Drawer>
      ) : (
        <Sidebar />
      )}

      <Box sx={{ flex: 1 }}>
        <Header
          onToggleTheme={onToggleTheme}
          onMenuClick={() => setMobileOpen(true)}
          isMobile={isMobile}
        />

        <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;