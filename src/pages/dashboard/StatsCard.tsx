import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  title: string;
  value: string;
  subtitle?: string;
}

const StatsCard = ({ title, value, subtitle }: Props) => {
  return (
    <Card sx={{ bgcolor: "background.paper",height: "100%" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" sx={{ my: 1 }}>
          {value}
        </Typography>

        {subtitle && (
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;