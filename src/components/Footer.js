import React from 'react';
import {Footer, Content, Link} from 'arwes';
import { FaGithub } from 'react-icons/fa'
const  Foot = () =>{
    const style = { 
      footer: {
        padding: '.5rem 2rem 1rem',
        display: 'flex',
        alignItems: 'center',
        githubIcon: {
          position: 'relative',
          top: 6,
          fontSize: 30,
          paddingRight: '.75rem'
        },
        about: {
          margin: 0
        }
      }
    }
    return (
      <Footer animate>
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