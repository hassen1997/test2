import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';



export default function Liste() {
  // حالة مستقلة لكل قائمة
  const [openStates, setOpenStates] = React.useState([false, false, false, false]);

  // أسماء القوائم
  const listNames = ['Intro', 'Base', 'Pro', 'Enterprise'];

  const handleClick = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <Box sx={{width:"400px"}}>
      {listNames.map((name, index) => (
        <List
          key={index}
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: openStates[index] ? '#7D4283' : '#1A1A1A', // التحكم بلون الخلفية بناءً على حالة القائمة
            color: 'white',
            borderRadius: '8px',
            transition: 'background-color 0.3s',
            mb: 2, // مسافة بين القوائم
          }}
        >
          <ListItemButton onClick={() => handleClick(index)}>
            <ListItemText
              primary={`${name} `} // استخدم اسم القائمة هنا
              sx={{ color: openStates[index] ? 'white' : '#7D4283' }}
            />
            {openStates[index] ? (
              <ExpandLess
                sx={{ bgcolor: '#7D4283', color: 'white', borderRadius: '100px' }}
              />
            ) : (
              <ExpandMore
                sx={{ bgcolor: '#7D4283', color: 'white', borderRadius: '100px' }}
              />
            )}
          </ListItemButton>
          <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2, flexDirection: 'column' }}>
                <ListItemText primary="Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu" />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '120px',
                  }}
                >
                  <ListItemText primary="$123/month" />
                  <Button
                    sx={{
                      bgcolor: 'white',
                      color: '#000',
                      width: '130px',
                    }}
                  >
                    Try 1 month
                  </Button>
                </Box>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      ))}
    </Box>
  );
}
