import React from 'react';
import { Box, Grid, Typography, Button, makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    wrapper:{
        border: '1px solid #e8e8e8',
        borderRadius: "5px",
        display:"flex",
        cursor:"pointer",
        transition:'.3s',

        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft:"6px solid #4D64E4",
        }
    },
    imageBox:
    {
        width:"60px",
        height:"60px",
        overflow: 'hidden',
    },

}));


export default (props) =>{
    const classes = useStyles();
 return(
    <Grid item sm={6}  >
    <Box p={2} className={classes.wrapper}>
    <Box mr={2} className={classes.imageBox}>
                <img width="60" height="60" src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" alt={"abc"} />
        </Box>
        <Box>
            <Typography variant="h5">{props.jobTitle}</Typography>
            <Box mt={-0.5}>
            <Typography variant="subtitle1">{props.companyName} - {props.industry}</Typography>
            </Box>
            <Box mt={-0.5} color="#7A7A7A">
            <Typography variant="body">{props.jobLocation} ({props.remoteType})</Typography>
            </Box>
            <Box mt={2}>
            <Typography>{props.type}(9:00 am - 5:00 pm IST)</Typography>
            </Box>
            <Box>
            <Typography>Experience ({props.experienceMin}-{props.experienceMax} years)</Typography>
            </Box>
            <Box>
            <Typography>INR(₹) {props.salaryMin} - {props.salaryMax} / Month</Typography>
            </Box>
            <Box>
            <Typography>{props.totalEmployee} employees</Typography>
            </Box>
            {
                props.applyType === "Quick Apply" ? (
                <Box mt={2}>
                    <Button variant ="contained" color="primary" disableElevation>Apply Now</Button>
                </Box>
                )
                :
                (
                    props.applyType === "External Apply" ? (
                        <Box mt={2}>
                            <Button variant ="contained" color="primary" disableElevation>External Apply</Button>
                        </Box>
                        )
                    :
                    (
                        <Box display={"flex"}>
                            <Box mt={2} mr={3}>
                                <Button variant ="contained" color="primary" disableElevation>Apply Now</Button>
                            </Box>
                            <Box mt={2}>
                                <Button variant='contained' color="primary" disableElevation>External Apply</Button>
                            </Box>
                        </Box>
                    )
                )
            }
        </Box>
        </Box>
    </Grid>
 )
}
