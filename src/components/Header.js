import React, {useState} from 'react'
import { Header, Heading, Link, Frame, withStyles } from "arwes";
import { FaUserAstronaut } from 'react-icons/fa'

const styles = (theme) => ({
  navBar: {
    display: "flex",
    padding: ".5rem 1.5rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    display: "inline-block",
  },
  mainTitle: {
    fontSize: "2rem",
    display: "inline-block",
    margin: 0,
    paddingRight: "1rem",
  },
  secondary: {
    padding: " 0 .5rem",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  icon: {
    fontSize: "1.5rem",
    position: "relative",
    top: 5,
  },
  dropdown: {
    position: 'absolute',
    zIndex: 5,
    right: 15,
    top: 50,
    ['& ul']: {
      listStyleType: 'none',
      margin: 0,
      padding: '1rem',
    }
  },
  modal: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'pink',
    zIndex: 4,

   }

});

const TopHeader = ({classes}) => {
    const [showDropdown, changeDropdown] = useState(false);

    const toggleDropdown = e => {
      // e.preventDefault();
      changeDropdown(!showDropdown);
    }
    return (
      // <div style={{ padding: 20 }}>
      <Header animate layer="header">
        <nav className={classes.navBar}>
          <div className={classes.navLinks}>
            <Link href="/">
              <Heading node="h2" className={`${classes.mainTitle} title-style`}>
                StarTrader
              </Heading>
            </Link>
            <Link href="#" className={classes.secondary}>
              Marketplace
            </Link>
            <Link href="#" className={classes.secondary}>
              Sell Ships
            </Link>
          </div>

          <div>
            <Link>
              <FaUserAstronaut
                className={classes.icon}
                onClick={toggleDropdown}
              />
            </Link>
            {showDropdown ? (
              <>
                <div className={classes.dropdown}>
                  <Frame animate level={3} corners={4} onClick={toggleDropdown}>
                    <ul>
                      <li>
                        <Link href="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link href="/sell-ship">Sell Ship</Link>
                      </li>
                      <li>
                        <Link href="/logout">Logout</Link>
                      </li>
                    </ul>
                  </Frame>
                </div>
                <div className={classes.modal} onClick={toggleDropdown}></div>
              </>
            ) : (
              ""
            )}
          </div>
        </nav>
      </Header>
      // </div>
    );
}

export default withStyles(styles)(TopHeader);