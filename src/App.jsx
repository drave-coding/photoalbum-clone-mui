import React from 'react';
import { Typography, CardContent,Button,AppBar, Card, CardActions, CardMedia, CssBaseline, Grid,Toolbar,Container } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles'


const cards = [1 ,2,3,4,5,6,7,8,9];

const App = () => {
    const classes = useStyles();
    return(
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'>
                        Photo Section
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Get Captivated Here
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary'>
                            This is a replica I tried making using my knowledge in material-ui by taking inspiration out of pre-made template of material-ui website. Hope you like it.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item> 
                                    <Button variant='contained'color="primary">
                                        See the clips
                                    </Button>
                                </Grid>
                                <Grid item> 
                                    <Button variant='outlined'color="primary">
                                        Check the story
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image='https://source.unsplash.com/random'
                                title="Image Title"
                                />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h5'>
                                    The Pic
                                </Typography>
                                <Typography>
                                    This is currently using a random picture from unsplash and is being repeated as I am maping it in a array of length 9.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>View</Button>
                                <Button size='small' color='secondary'>Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                        

                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                        This is the End of this page
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                        Do contact me at 'abhishek2022.work@gmail.com'.
                </Typography>
            </footer>
        </>
    )
}
export default App;