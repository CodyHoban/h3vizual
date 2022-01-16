import React from "react";
import Lottie from "react-lottie";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

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
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
        <Typography
          variant="h2"
          align={matchesMD ? "center" : undefined}
          style={{fontFamily: "pacifico"}}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{marginTop: "5em"}}
      >
        <Grid item lg>
          <img
            src={vision}
            style={{
              maxWidth: matchesSM ? 200 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
            alt="mountain through binoculars"
          />
        </Grid>
        <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              If you are looking for a fresh new look for your website or app
              you've come to the right place. H3Vizual is a company with our
              eyes on the future we have got the knowhow to get you up and
              running with an eye catching sight your customers will love.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              From the start we'll be in communication with your likes and
              disslikes. Everything you want your app to be. The sky is the
              limit. what colors, what lines do you see for yourself? Are you a
              minimalistic Mary with smooth lines and creamy colors, or are you
              a Party Pat with bright bold colors and graphics that shout!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Whatever you have in store for yourself and your app, you are in
              good hands here at H3Vizual and we will do whatever we can to help
              make your vision a really.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{marginTop: "10em", marginBottom: "10em"}}
      >
        <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              The fact is technology is constantly evolving. It will always be a
              boon to those who can adapt to use it. It can be hard to keep up
              with, but with varied intrests we can all find new ways to make
              our designs and creations what's right for you.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              One of the ways we like to adapt is by being consistent with
              community outreach. By joining in the Tampa Bay Javascript meetup
              we stay in tune with what other developers are thinking, the tools
              that they are using, and what's becoming waysided in the business
              to make way for better performing tools such as the swap that many
              people are making to hooks in the current programming environment.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Designs are also on the forefront of our thoughts. With not only
              the best tools, but where the industry is going as well to better
              reach clients and customers. Our continuous looks into conventions
              like Adobe Max allow us to know where other companies are going
              and the equipment they are spotlighting for the future.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            ></Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              With the right tools, Humans made fire, the wheel, landed on the
              moon, and put a computer in your pocket. We don't know where
              technology will continue to go, but we do know that it's possible
              for us to use it to our advantage.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              The knowledge we gain from the technology we use will continue to
              help us grow and succeed.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesMD ? "center" : "flex-end"}
          lg
        >
          <Lottie
            options={defaultOptions}
            style={{maxWidth: "40em", margin: 0}}
          />
        </Grid>
      </Grid>
      {/* <Grid
        item
        container
        direction="row"
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid> */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#B3B3B3", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{color: "#000", marginTop: "5em"}}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              We love working with people and expressing ideas together. If you
              have an idea that you think can take off, or maybe just needs a
              little help and a nudge in the right direction these are things
              H3Vizual can help with.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Need help with search engine optimization? Let us help get the
              ball rolling. Don't know if your idea is better as a website or a
              phone app? We'll help you piece together the ideas. Do you have an
              idea but just don't know how it might turn into business? We can
              help with that too so you understand how monetization works.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              The way you prefer to communicate matters to us. Do you like phone
              calls to get your business done, or maybe just something as simple
              as an email? That's fine by us. Would you rather get connected and
              do a face to face live screen talk? That's great! We can share
              screens and delve into it for a great collaborative environment.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Working together lets us seemlessly transform your ideas into
              reality.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={consultation}
            alt="hand shake"
            width="100%"
            style={{maxWidth: 700}}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#FF7373", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              After we map out your thoughts for your project we'll get to work
              on the mockup. The mockup will function as a basic trial run on
              how everything will look, and how it will all be put into
              practice.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              You'll be able to see how everything would look and work togther.
              It's easy to make any changes at this stage. Depending on how
              thorough you are with consultation we may not need to make any
              changes during this stage. But if your ideas change along the way,
              or it ends up turning out a little different than you thought we
              can work with you to make it right and make it your own.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              If the mockup looks good to you we'll move onto the next stage of
              the development process.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={mockup}
            alt="basi website design outline"
            width="100%"
            style={{maxWidth: 1000}}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#A67C52", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              At H3Vizual we are obsessed with design. We love looking at new
              color ways and fresh ideas so you've definitely come to the right
              place if you are interested in pushing the envelope and showing
              off to your customers. There's always new things to learn and gain
              inspiration from so we are always out there seeking new techniques
              to bring the best of the best to our customers.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              We've done work in everything from logos to stickers, to website
              design and illustration, so there's no job we aren't ready to take
              on. If you want to expand your current offerings we are here to
              help you do so and can easily match any designs you already have
              to help take your project to the next level.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={design}
            alt="paint brush leading stoke of paint"
            width="100%"
            style={{maxWidth: 1000}}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#39B54A", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              This is an important part of any process, and one we don't take it
              lightly. Not only is it important to review the work that we make
              together, but it's also important to have your work reviewed by
              others.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              If you already have a project that you've been working on that
              you'd like a second set of eyes on we'd be happy to take a look.
              Sometimes it takes a different prospective or angle to give light
              to a project. This is where we can help. Maybe finding bugs in
              code, or rather what colors might clash next season, it never
              hurts to have a second opinion.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Without any sort of review it's possible to let mistakes slip
              through the cracks, and here at H3Vizual we strive to have a
              seamless foundation that can support any project or load.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              If we're only as strong as our weakest link, let's catch that link
              before it makes it to production.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={review}
            width="100%"
            style={matchesMD ? {maxHeight: 400} : undefined}
            alt="magnifine glass"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#FBB03B", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Legos, K'NeX, or Erectors Sets. We've been building for a long
              time. That's why when it comes to building what you need we can
              often different blocks or solutions for whatever fits your ideas.
              It always helps to have different options available.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              If you have specifics on how you'd like things to be built know
              that we have a wide variety of expertice to pull from. This allows
              us to tackle projects in any size, or from any angle.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Structure is important. Having the right materials can play a
              pivotal tool in reaching your customers or clients. No one want's
              to sit on a hammock made of steel, or a bench made from cactus.
              This is why the building materials matter to us.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Apps and websites might need different languages to complete which
              offer better tools for your job. Artists may need the look of an
              oil painting, or a 3D render of an object.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Knowing is half the battle, and with our strong mockup and design
              process it makes building that much easier.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={build}
            alt="building construction site"
            width="100%"
            style={{maxWidth: matchesMD ? 700 : 1000}}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#C1272D", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              1-2-3 Blast Off!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              When everything is finalized it's time to launch. H3Vizual will be
              there every step of the way to make sure your launch date is as
              seemless for you and your customers.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              The launch day can be one of the most stressful time of your
              buisness because first impressions with customers matter. H3Vizual
              will be there all hands on deck to be sure your first impresion is
              a homerun with customers. An event that will engage them and keep
              them coming back for the special experience you are offering.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={launch}
            alt="rocket"
            width="100%"
            style={
              matchesMD ? {maxHeight: 600, maxWidth: 200} : {maxWidth: 200}
            }
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#8E45CE", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              If you want a hands off solution you've come to the right place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Along with helping with the setup of your project we can also help
              with the maintenance of your project. If you are looking to have a
              fresh new update each year we can take care of that, if you are
              not wanting to worry about your own business and customers we can
              take the worry from the behind the screens work allowing you to
              focus on what's important to you.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Keeping your app or website running correctly is important in this
              fast paced world we live in today. Customers that have to spend
              too long messing around with a confusing ill maintained website
              often end up going elsewhere, so we are here with you to help keep
              customers happy and engaged with your project.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              A well maintained good looking and easy to use website results in
              happy, repeat customers.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img
            src={maintain}
            alt="wrench tightening bolts"
            width="100%"
            style={
              matchesMD ? {maxHeight: 420, maxWidth: 500} : {maxWidth: 500}
            }
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{backgroundColor: "#20ABE2", height: "90em"}}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{color: "#000", marginTop: "5em"}}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Once your initial project is done, doesn't mean it has to end
              there, it's only the beginning. After launch is when your users
              start getting involved and new interesting ideas can come to
              light.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              Like your initial designs but want to stay updated? Go seasonal.
              Have a web fourm from your niche? Let's set up a storefront. Just
              becasue we've completed a project doesn't mean we can't continue
              to expand on it.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{color: "#FFF", maxWidth: "20em"}}
              paragraph
            >
              We want to help with your continued sucess. Let us help you get
              from the single project, to the lasting conglomerate.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img src={iterate} alt="falling dominos" width="100%" />
        </Grid>
      </Grid>
    </Grid>
  );
}
