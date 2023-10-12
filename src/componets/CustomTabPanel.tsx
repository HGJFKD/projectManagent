import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanelProps from '../interfacies/typeTabPanelProps';

export default function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >
            {children}
          </Typography>
        </Box>
      )}
    </Box>
  );
}