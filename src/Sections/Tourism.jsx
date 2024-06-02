import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Overview from '../Components/Overview';
import Packages from '../Components/Packages';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className='mt-10'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider',   }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='mt-24'
        indicatorColor='primary'
        textColor='inherit'
        TabIndicatorProps={{
            style:{
                backgroundColor: '#3e939b'
            }
        }}
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Our Packages" {...a11yProps(1)} />
          <Tab label="Meet Our Guides" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Overview></Overview>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Packages></Packages>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}