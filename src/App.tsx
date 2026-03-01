import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import { getTheme } from "./theme";
import Layout from "./components/layout/Layout";

import Dashboard from "./pages/dashboard/Dashboard";
import Timesheet from "./pages/timesheet/Timesheet";
import Calendar from "./pages/calendar/Calendar";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout onToggleTheme={() => setMode(mode === "light" ? "dark" : "light")}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;