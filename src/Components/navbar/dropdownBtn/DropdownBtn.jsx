
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function DropdownBtn() {
  const data = {
    Maths: 98,
    Physics: 81,
    Chemistry: 92
  }
  const [subject, setSubject] = React.useState('');
  const [mark, setMark] = React.useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
    setMark(data[event.target.value])
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Jack</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={subject}
          onChange={handleChange}
          autoWidth
          label="Jack"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Maths"}>Maths</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
        </Select>
      </FormControl>

      <div><h1>{mark}</h1></div>
    </div>
  )
}

export default DropdownBtn


