import React from 'react';
import PropTypes from 'prop-types'; 
import { makeStyles } from '@mui/styles';
import { Grid, Link, Paper, Typography } from '@mui/material';
import useStyles from '../hooks/useStyles';

  
export default function Banner() {
  const classes = useStyles();
  const post = {
    title: 'This could be a title',
    description:
      "Multiple lines of text that form the slogan or same information about how to do a purchase.",
    image: 'https://http2.mlstatic.com/D_NQ_NP_907895-MLA52183869643_102022-OO.jpg',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})`, marginBottom: '1rem', marginTop: '.2rem' }}>
      {<img style={{ display: 'none' }} src={post.image} alt={post.imgText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent} style={{opacity: '0'}}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Banner.propTypes = {
  post: PropTypes.object,
};