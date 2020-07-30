import React from 'react';
import { Footer, withStyles, Link } from "arwes";
import { FaGithub } from 'react-icons/fa';
import ThemeSelect from './ThemeSelect';

const styles = (theme) => ({
  container: {
    [`@media (max-width: ${theme.responsive.medium + 1}px)`]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
});

const  Foot = withStyles(styles)(({classes}) =>{
    const style = {
      footerContainer: {
        position: "static",
        maxheight: "100vh",
        width: "100%",
      },
      contentWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em 2em",
      },
      footerContent: {
        display: "inline-flex",
        alignItems: "center",

        githubIcon: {
          position: "relative",
          top: 6,
          fontSize: 30,
          paddingRight: ".75rem",
        },
        about: {
          margin: 0,
        },
      },
    };
    return (
      <Footer animate style={style.footerContainer}>
        <div style={style.contentWrapper} className={classes.container}>
          <span style={style.theme}>
            <ThemeSelect />
          </span>
          <span style={style.footerContent}>
            <Link
              href="https://github.com/bpmutter/sw-trader-frontend"
              target="_blank"
              style={style.footerContent.githubIcon}
            >
              <FaGithub />
            </Link>
            <p style={style.footerContent.about}>
              Made with great force focus by{" "}
              <Link
                href="https://bradsimpson213.github.io/bradsimpson/"
                target="_blank"
              >
                Brad Simpson
              </Link>{" "}
              and{" "}
              <Link href="http://ben.perlmutter.io/" target="_blank">
                Ben Perlmutter
              </Link>
              .{" "}
            </p>
          </span>
        </div>
      </Footer>
    );
})

export default Foot;