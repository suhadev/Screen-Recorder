import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function HomePage() {


    const clickRecordButton = async(displayMediaOptions)=>{
        console.log('aaaaaa')
        // chrome.desktopCapture.chooseDesktopMedia(["screen", "window", "tab"],(streamId, options)=>{
        //     console.log("q", options, streamId)
        // })
        let captureStream = null;

            try {
                captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            } catch(err) {
                console.error("Error: " + err);
            }
            return captureStream;
    }
    return(
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={12}>
                <Typography>Screen Recorder</Typography>
                </Grid>
                <Grid item xs={12}>
                <FormControl variant="outlined" style={{margin : "20px", width : '200px'}}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Screen</InputLabel>
        <Select
          native
        //   value={state.age}
        //   onChange={handleChange}
          label="Select Window"
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
                </Grid>
                <Grid item xs={6}>
                <Button onClick={()=>{clickRecordButton()}} variant="contained" color="primary">Record</Button>

                </Grid>
                <Grid item xs={6}>
                <Button variant = "contained" color="secondary">Stop</Button>

                </Grid>

                
            </Grid>
        </React.Fragment>
    )
}

export default HomePage