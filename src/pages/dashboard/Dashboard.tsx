import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Stats */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Total Hours" value="1,248" subtitle="This month" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Active Users" value="32" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Projects" value="12" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatsCard title="Pending Approvals" value="5" />
        </Grid>
      </Grid>

      {/* Activity */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>

              <Typography variant="body2" color="text.secondary">
                John logged 8h on Project Alpha
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Anna submitted timesheet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mark updated calendar event
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>

              <Typography variant="body2">
                Weekly utilization is on track.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;