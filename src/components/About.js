import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
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
          to their interest, technology is meant to brin us closer to what we
          care about in the best posible way. Arc Development will use that
          princeiple to provide fast, moderm inexpensive, and aesthetic software
          to the Midwest and beyond.
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
                We're the new kid on the bolck
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Ac orci phasellus egestas tellus rutrum tellus pellentesque eu
                tincidunt. Tellus orci ac auctor augue mauris augue neque
                gravida.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Lectus nulla at volutpat diam ut venenatis tellus. Velit aliquet
                sagittis id consectetur. Tortor id aliquet lectus proin nibh
                nisl condimentum id venenatis.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                sed augue lacus viverra vitae congue eu. At auctor urna nunc id
                cursus metus aliquam eleifend mi.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                All this change can be a lot to keep up with, and that's where
                we come in.
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
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding about 2 years ago.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
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
                src={yearbook}
                alt="yearbook page about founder"
                style={{maxWidth: matchesMD ? 300 : undefined}}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophmore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
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
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src={puppy}
                alt="grey spotted puppy"
                style={{maxWidth: matchesMD ? 300 : undefined}}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
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
