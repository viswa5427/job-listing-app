import React, {useState, useEffect} from "react";
import theme from "./theme/theme"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import { Box, CircularProgress, Grid, ThemeProvider, Button } from "@material-ui/core";
import NewJobModal from "./components/Job/NewJobModal";
import {firestore, app} from './firebase/config';
import {Close as CloseIcon} from '@material-ui/icons';


export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading,setLoading] = useState(true);
  const [customSearch, setcustomSearch] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const fetchJobs = async () => {
    setcustomSearch(false);
    setLoading(true);
    const req = await firestore
    .collection('jobsData')
    .orderBy('postedOn','desc')
    .get();
    const tempJobs = req.docs.map(job => ({...job.data(), id: job.id}));
    //console.log(tempJobs)
    setJobs(tempJobs)
    setLoading(false);

  };

  const fetchJobsCustom = async (jobSearch) => {
    setcustomSearch(true);
    setLoading(true);
    const req = await firestore
    .collection('jobsData')
    .orderBy('postedOn','desc')
    .where("remoteType","==", jobSearch.remoteType)
    .where("type","==", jobSearch.type)
    .get();
    const tempJobs = req.docs.map(job => ({...job.data(), id: job.id}));
    //console.log(tempJobs)
    setJobs(tempJobs)
    setLoading(false);

  }

  const postJob = async jobDetails => {
    await firestore.collection('jobsData').add({
       ...jobDetails,
       postedOn: app.firestore.FieldValue.serverTimestamp()
      })
      fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  },[]);
  return(
  <ThemeProvider theme={theme}>
    <Header openNewJobModal={() => setNewJobModal(true)} />
    <NewJobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob}/>
    <Box mb={3}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom ={fetchJobsCustom} />
          {
            loading ? (
            <Box display="flex" justifyContent="center"><CircularProgress /> </Box>)
            : (
              <>
             { customSearch && (
                <Box my={2} display='flex' justifyContent="flex-end">
                  <Button onClick={fetchJobs}>
                    <CloseIcon size={20} />
                    Custome Search
                  </Button>
                </Box>
              )}
              <Grid container spacing={5} >
              {jobs.map(job => (
                <JobCard key={job.id} {...job} />
              ))}
              </Grid>
              </>
          )}
        </Grid>
      </Grid>
      </Box>
    
    
  </ThemeProvider>
  )
};
