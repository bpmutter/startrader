import React from 'react';
import {Footer, Content, Link} from 'arwes';
import { FaGithub } from 'react-icons/fa'
const  Foot = () =>{
    const style = {
      footerContainer: {
        // position: "relative",
        // // zIndex: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // marginBottom: 0,
        position: 'static',
        maxheight: '100vh',
        width: "100%",
      },
      footerContent: {
        padding: ".5rem 2rem 1rem",
        display: "flex",
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
        <Content style={style.footerContent}>
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
        </Content>
      </Footer>
    );
}

export default Foot;