// next
import Head from 'next/head';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Button, Typography, IconButton, InputAdornment } from '@mui/material';
// hooks
import useCountdown from '../hooks/useCountdown';
import CompactLayout from '@/layouts/compact';
import { MarriedIllustration } from '@/assets/illustrations';
// ----------------------------------------------------------------------

ComingSoonPage.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function ComingSoonPage() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('07/23/2023 00:00'));

  return (
    <>
      <Head>
        <title> Coming Soon | Minimal UI</title>
      </Head>

      <Typography variant="h3" paragraph>
        Coming Soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <MarriedIllustration sx={{ my: 10, height: 240 }} />
     
      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>

      
    </>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
