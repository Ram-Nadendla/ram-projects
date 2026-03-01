import {
  Box,
  Typography,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  TextField,
  Stack,
} from "@mui/material";

const Settings = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Stack spacing={3}>
            <TextField label="Company Name" fullWidth />
            <TextField label="Email" fullWidth />

            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable notifications"
            />

            <FormControlLabel
              control={<Switch />}
              label="Allow weekly reports"
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;