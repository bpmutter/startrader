import React from 'react'
import {Header, Heading, Link, Button} from "arwes";
import Input from './Input';
import { FaSearch } from "react-icons/fa";


const TopHeader = () => {
    
    const style = {
      navBar: {
        display: 'flex',
        padding: '1rem 1.5rem',
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
      searchBar: {
        display: "flex",
        alignItems: 'center',
        searchButton: {
          paddingLeft: '.5rem',
        },
      },
    };
    return (
      // <div style={{ padding: 20 }}>
        <Header animate layer='header'>
          <nav style={style.navBar}>
            <div style={style.navLinks}>
              <Link href="/">
                <Heading node="h2" style={style.navLinks.mainTitle}>
                  StarTrader
                </Heading>
              </Link>
              <Link href="#" style={style.navLinks.secondary}>Home</Link>
              <Link href="#" style={style.navLinks.secondary}>Profile</Link>
            </div>

            <div style={style.searchBar}>
              <Input width={300} type={"search"} />
              <Button style={style.searchBar.searchButton}>
                <FaSearch />
              </Button>
            </div>

          </nav>
        </Header>
      // </div>
    );
}

export default TopHeader;