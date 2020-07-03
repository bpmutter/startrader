import React from 'react';
import {Footer, Content, Link} from 'arwes';
import { FaGithub } from 'react-icons/fa'
const  Foot = () =>{

    return (
      <Footer animate>
        <Content>
          <p>
            Made with great force focus by{" "}
            <Link href="#" target="_blank">
              Brad Simpson
            </Link>{" "}
            and{" "}
            <Link href="http://ben.perlmutter.io/" target="_blank">
              Ben Perlmutter
            </Link>
            .{" "} <Link href="" target="_blank"><FaGithub/></Link>
          </p>
        </Content>
      </Footer>
    );
}

export default Foot;