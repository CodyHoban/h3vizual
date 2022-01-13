import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import history from "../assets/history.svg";
import profile from "../assets/Gallery-364.jpg";
import twister from "../assets/twister.jpg";
import facePaint from "../assets/facePaint.jpg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fonstStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid cotainer direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{marginTop: matchesMD ? "1em" : "2em"}}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{marginTop: "3em"}}
      >
        <Typography
          variant="h4"
          align="center"
          className="classes.missionStatement"
        >
          Whether it be person to person, business to consumer, or an individual
          to their interest, technology is meant to bring us closer to what we
          care about in the best posible way. H3Vizual will use that princeiple
          to provide fast, moderm inexpensive, and aesthetic software to
          wherever your needs are greatest.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-around"
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{marginTop: "10em", marginBottom: "10em"}}
      >
        <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
          <Grid item>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{fontWeight: 700, fontStyle: "italic"}}
              >
                We've always been intrested in technology
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                We grew up playing with everything together. We'd get stuck on a
                boulder in the snow, shaking it up on the tire swing, or have
                fun playing board games together. But as kids we always stuck
                together.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Eventually our intrest turned to tech. We played with video
                games, created geocities websites, or looked at the moon through
                a telescope. We took different paths to start but we all ended
                up interested in the ever advancing technological age.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Since we're close it allows us to work tegether, but having
                different intrests allows us to specialize in different things
                that we enjoy doing. That's what allows H3Vizual to work so well
                together since we can all tackle the parts of the project that
                we love best and still have all our bases covered.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                The world has taken us to different parts of the globe, so we've
                grown acustom to working with each other from a distance or
                behind a screen. With todays challenges we think that gives us a
                little bit of an edge that we could pass along to you as well.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{maxHeight: matchesMD ? 200 : "22em"}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{marginBottom: "15em"}}
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Cody Hoban - Website/Design
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Cory Hoban - iOS/Android
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Kristin Hoban - Design/Creative
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founders" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
              <Typography variant="body1" align="center" paragraph>
                Est placerat in egestas erat. Accumsan in nisl nisi scelerisque
                eu ultrices vitae auctor eu. Placerat vestibulum lectus mauris
                ultrices eros in cursus. Aliquam ut porttitor leo a. At erat
                pellentesque adipiscing commodo elit at imperdiet.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Est placerat in egestas erat. Accumsan in nisl nisi scelerisque
                eu ultrices vitae auctor eu. Placerat vestibulum lectus mauris
                ultrices eros in cursus. Aliquam ut porttitor leo a. At erat
                pellentesque adipiscing commodo elit at imperdiet.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{marginBottom: matchesMD ? "2.5em" : 0}}
          >
            <Grid item>
              <img
                src={twister}
                alt="yearbook page about founder"
                style={{maxWidth: matchesMD ? 300 : 375, marginTop: "1em"}}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                clowing aroung OFF the job
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
              <Typography variant="body1" align="center" paragraph>
                We're truly a family company, with family values. We try and
                enjoy what we do, while also eniching those around us. We'll do
                everything we can to make sure your satisfied with your project.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                H3Vizual works as a team because we started as a team. We'd love
                for you to join the H3Vizual family too.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src={facePaint}
                alt="grey spotted puppy"
                style={{maxWidth: matchesMD ? 300 : 375, marginTop: "1em"}}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">showing some spirit!</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
