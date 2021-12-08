import { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiSvgIcon-root': {
    width: '2rem',
    right: 8,
  },
  '& .MuiInputBase-input': {
    borderRadius: 30,
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.54)',
    fontSize: 16,
    padding: '10px 36px 10px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: ['Circe', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 30,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 192,
      width: 160,
      borderRadius: 8,
    },
  },
};

export default function CustomizedSelects() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div>
        <FormControl sx={{ m: 0 }} variant="standard" fullWidth={true}>
          <InputLabel
            sx={{
              top: '-4px',
              left: '8px',
              fontFamily: 'Circe',
            }}
            id="filter-month-label"
            variant="outlined"
          >
            Month
          </InputLabel>
          <Select
            labelId="filter-month-label"
            id="filter-month"
            name="month"
            value={month}
            onChange={handleChange}
            input={<BootstrapInput />}
            IconComponent={ExpandMoreOutlinedIcon}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>January</MenuItem>
            <MenuItem value={2}>February</MenuItem>
            <MenuItem value={3}>March</MenuItem>
            <MenuItem value={4}>April</MenuItem>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={6}>June</MenuItem>
            <MenuItem value={7}>July</MenuItem>
            <MenuItem value={8}>August</MenuItem>
            <MenuItem value={9}>September</MenuItem>
            <MenuItem value={10}>October</MenuItem>
            <MenuItem value={11}>November</MenuItem>
            <MenuItem value={12}>December</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 0 }} variant="standard" fullWidth={true}>
          <InputLabel
            sx={{
              top: '-4px',
              left: '8px',
              fontFamily: 'Circe',
            }}
            id="filter-year-label"
            variant="outlined"
          >
            Year
          </InputLabel>
          <Select
            labelId="filter-year-label"
            id="filter-year"
            name="year"
            value={year}
            onChange={handleChange}
            input={<BootstrapInput />}
            IconComponent={ExpandMoreOutlinedIcon}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
