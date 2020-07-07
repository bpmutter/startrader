import React from 'react';
import {Footer, Content, Link} from 'arwes';
import { FaGithub } from 'react-icons/fa'
const  Foot = () =>{
    const style = {
      // footerContainer: {
      //   position: "absolute",
      //   bottom: 0,
      //   left: 0,
      //   right: 0,
      //   marginBottom: 0
      // },
      footer: {
        padding: ".5rem 2rem 1rem",
        display: "flex",
        alignItems: "center",
        height: 100,
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
        <Content style={style.footer}>
          <Link
            href="https://github.com/bpmutter/sw-trader-frontend"
            target="_blank"
            style={style.footer.githubIcon}
          >
            <FaGithub />
          </Link>
          <p style={style.footer.about}>
            Made with great force focus by{" "}
            <Link href="#" target="_blank">
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