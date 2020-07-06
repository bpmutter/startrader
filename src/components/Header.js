import React from 'react'
import {Header, Heading, Link, Button} from "arwes";
import { FaUserAstronaut } from 'react-icons/fa'



const TopHeader = () => {
    
    const style = {
      navBar: {
        display: 'flex',
        padding: '.5rem 1.5rem',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      navLinks: {
        display: "inline-block",
        mainTitle: {
          fontSize: "2rem",
          display: "inline-block",
          margin: 0,
          paddingRight: '1rem',
        },
        secondary: {
          padding: ' 0 .5rem',
          fontSize: '1.25rem',
          fontWeight: 600,
        }
      },
      additionalInfo: {
        icon: {
          fontSize: '1.5rem',
          position: 'relative',
          top: 5,
        }
      }
      
    };
    return (
      // <div style={{ padding: 20 }}>
      <Header animate layer="header">
        <nav style={style.navBar}>
          <div style={style.navLinks}>
            <Link href="/">
              <Heading node="h2" style={style.navLinks.mainTitle} className='title-style'>
                StarTrader
              </Heading>
            </Link>
            <Link href="#" style={style.navLinks.secondary}>
              Marketplace
            </Link>
            <Link href="#" style={style.navLinks.secondary}>
              Sell Ships
            </Link>
          </div>

          <div>
            <Link href="#"><FaUserAstronaut style={style.additionalInfo.icon}/></Link>
          </div>
        </nav>
      </Header>
      // </div>
    );
}

export default TopHeader;