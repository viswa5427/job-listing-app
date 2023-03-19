import React, {useState} from 'react';
import { Box, Button, Select, MenuItem, makeStyles, CircularProgress} from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        "& > *":{
            flex:1,
            height:"45px",
            margin: "8px",
        }
    }
})

export default (props) =>{
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [jobsearch, setJobsearch] = useState({
        type:'Full-Time',
        remoteType:'In-office'
    })
    const handleChange = e => {
        e.persist();
        setJobsearch(oldState => ({ ...oldState, [e.target.name]: e.target.value}))
    }
    // console.log(jobsearch);
    const search  = async() =>{
        setLoading(true);
        await props.fetchJobsCustom(jobsearch);
        setLoading(false);
    }
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} name="type" value={jobsearch.type} disableUnderline variant="filled">
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part-Time">Part-Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select onChange={handleChange} name="remoteType" value={jobsearch.remoteType} disableUnderline variant="filled">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <Button onClick={search} disabled={loading} variant ="contained" color="primary" disableElevation>
            {loading ? (<CircularProgress color="secondary" size={22}/>)
                                     : ("Search")}
            </Button>
        </Box>
    )
}