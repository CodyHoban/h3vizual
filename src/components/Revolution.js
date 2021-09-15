import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
}))

export default function Revolution() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined} style={{fontFamily: "pacifico"}}>The Revolution</Typography>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "5em"}}>
                <Grid item lg>
                    <img src={vision} style={{maxWidth: matchesSM ? 200 : "40em", marginRight: matchesMD ? 0 : "5em", marginBottom: matchesMD ? "5em" : 0}} alt="mountain through binoculars" />
                </Grid>
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="h4" gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis
                            pellentesque id nibh tortor. Ac orci phasellus egestas tellus. Suspendisse 
                            interdum consectetur libero id faucibus nisl. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                            Sed lectus vestibulum mattis ullamcorper velit sed. Fermentum leo vel orci porta 
                            non pulvinar neque laoreet suspendisse. Faucibus turpis in eu mi bibendum. 
                            Egestas maecenas pharetra convallis posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                            Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                            Consequat interdum varius sit amet mattis vulputate. Facilisis volutpat 
                            est velit egestas. Lacus sed turpis tincidunt id. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                            Purus gravida quis blandit turpis cursus in. Aenean pharetra magna ac 
                            placerat vestibulum. Amet mauris commodo quis imperdiet massa.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "10em", marginBottom: "10em"}}> 
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis
                            pellentesque id nibh tortor. Ac orci phasellus egestas tellus. Suspendisse 
                            interdum consectetur libero id faucibus nisl. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Sed lectus vestibulum mattis ullamcorper velit sed. Fermentum leo vel orci porta 
                            non pulvinar neque laoreet suspendisse. Faucibus turpis in eu mi bibendum. 
                            Egestas maecenas pharetra convallis posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Consequat interdum varius sit amet mattis vulputate. Facilisis volutpat 
                            est velit egestas. Lacus sed turpis tincidunt id. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Purus gravida quis blandit turpis cursus in. Aenean pharetra magna ac 
                            placerat vestibulum. Amet mauris commodo quis imperdiet massa.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
                    <Lottie options={defaultOptions} style={{ maxWidth: "40em", margin: 0 }} />
                </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>Process</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#B3B3B3", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "5em"}}>
                            Consultation
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel 
                            risus commodo viverra maecenas accumsan.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                            senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={consultation} alt="hand shake" width="100%" style={{maxWidth: 700}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#FF7373", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Mockup
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel 
                        risus commodo viverra maecenas accumsan.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={mockup} alt="basi website design outline" width="100%" style={{maxWidth: 1000}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel 
                        risus commodo viverra maecenas accumsan.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={review} width="100%" alt="magnifine glass" />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#A67C52", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Design
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel 
                        risus commodo viverra maecenas accumsan.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={design} alt="paint brush leading stoke of paint" width="100%" style={{maxWidth: 1000}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={review} width="100%" alt="magnifine glass" />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#FBB03B", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Build
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel 
                        risus commodo viverra maecenas accumsan.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={build} alt="building construction site" width="100%" style={{maxWidth: matchesMD ? 700 : 1000}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#C1272D", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Launch
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={launch} alt="rocket" width="100%" style={{maxWidth: 200}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#8E45CE", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Maintain
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                        Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                        senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={maintain} alt="wrench tightening bolts" width="100%" style={{maxWidth: 500}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#20ABE2", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}>
                            Iterate
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. 
                            Faucibus turpis in eu mi bibendum. Egestas maecenas pharetra convallis 
                            posuere morbi leo urna molestie.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}} paragraph>
                            Quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique 
                            senectus et netus et malesuada fames ac turpis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={iterate} alt="falling dominos" width="100%" />
                </Grid>
            </Grid>
        </Grid>
    )
}