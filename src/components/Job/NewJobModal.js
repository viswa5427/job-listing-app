import React, {useState} from 'react';
import {Box, Grid, FilledInput, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, CircularProgress, RadioGroup, Radio, FormControlLabel} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons'

 const initState = {
    jobTitle:'',
    companyName:'',
    industry:'',
    jobLocation:'',
    remoteType:'',
    type:'Part-Time',//Full time
    experienceMin:'',
    experienceMax:'',
    salaryMin:'',
    salaryMax:'',
    totalEmployee:'',
    applyType:'',
}

export default (props) => {
    const [loading, setLoading]=useState(false);
    const [jobDetails,setJobDetails] = useState(initState);

    const handleChange = e => {
        e.persist();
        setJobDetails(oldState => ({ ...oldState, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async () => {
        for (const field in jobDetails){
            if(field==="jobTitle" && !jobDetails[field]) return;
            if(field==="companyName" && !jobDetails[field]) return;     
            if(field==="industry" && !jobDetails[field]) return;          
        }
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
    };
    const closeModal = () => {
        setJobDetails(initState);
        setLoading(false);
        props.closeModal();
    };

    return(
         <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton onClick={closeModal}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                </DialogTitle>
                <DialogContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box mb={1} display="flex">
                            <Box>Job title</Box>
                            <Box color={"#D86161"}>*</Box>
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="jobTitle"
                            value={jobDetails.jobTitle}
                            autoComplete="off" 
                            placeholder="ex. UX UI Designer" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mb={1} display="flex">
                            <Box>Company name</Box>
                            <Box color={"#D86161"}>*</Box>
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="companyName"
                            value={jobDetails.companyName}
                            autoComplete="off" 
                            placeholder="ex. Google" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mb={1} display="flex">
                            <Box>Industry</Box>
                            <Box color={"#D86161"}>*</Box>
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="industry"
                            value={jobDetails.industry}
                            autoComplete="off" 
                            placeholder="ex. Information Technology" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mb={1}>
                            Location
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="jobLocation"
                            value={jobDetails.jobLocation}
                            autoComplete="off" 
                            placeholder="ex. Chennai" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mb={1}>
                            Remote type
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="remoteType"
                            value={jobDetails.remoteType}
                            autoComplete="off" 
                            placeholder="ex. In-office" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mb={1}>
                            Experience
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="experienceMin"
                            value={jobDetails.experienceMin}
                            autoComplete="off" 
                            placeholder="Minimum" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mt={3.3}>
                            <FilledInput 
                                onChange={handleChange}
                                name="experienceMax"
                                value={jobDetails.experienceMax}
                                autoComplete="off" 
                                placeholder="Maximum" 
                                disableUnderline fullWidth>
                            </FilledInput>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mb={1}>
                            Salary
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="salaryMin"
                            value={jobDetails.salaryMin}
                            autoComplete="off" 
                            placeholder="Minimum" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Box mt={3.3}>
                            <FilledInput 
                                onChange={handleChange}
                                name="salaryMax"
                                value={jobDetails.salaryMax}
                                autoComplete="off" 
                                placeholder="Maximum" 
                                disableUnderline fullWidth>
                            </FilledInput>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mb={1}>
                            Total Employee
                        </Box>
                        <FilledInput 
                            onChange={handleChange}
                            name="totalEmployee"
                            value={jobDetails.totalEmployee}
                            autoComplete="off" 
                            placeholder="ex. 100" 
                            disableUnderline fullWidth>
                        </FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                    <RadioGroup
                            row
                            defaultValue = {jobDetails.applyType}
                            name = "applyType"
                            onChange = {handleChange}
                            >
                            <FormControlLabel value = "Quick Apply" control = {<Radio />} label = "Quick Apply" />
                            <FormControlLabel value = "External Apply" control = {<Radio />} label = "External Apply" />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box width="100%" 
                    display="flex" 
                    justifyContent="space-between" 
                    color="red" 
                    alignItems={"center"}>
                    <Typography variant="caption">* Required fields</Typography>
                    <Button onClick={handleSubmit} 
                            variant="contained" 
                            disableElevation color="primary"
                            disabled={loading}
                            >   
                            {loading ? (<CircularProgress color="secondary" size={22}/>)
                                     : ("Post job")}
                        
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}


