import { Card, CardContent, Typography } from "@mui/material";

const EventCard = (props:any) => {
  const { title, time } = props;
  return (
    <Card variant="outlined" sx={{ mb: 1 }}>
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="body2" fontWeight={500}>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;