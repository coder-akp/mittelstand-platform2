import { Card, CardContent, Typography, Button } from '@mui/material';

function HomePage() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome to the Mittelstand Platform
          </Typography>
          <Typography variant="body1" paragraph>
            Our platform helps German Mittelstand companies adopt digital tools, improve cybersecurity, and address succession planning.
          </Typography>
          <Button variant="contained" color="primary" href="/about">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
