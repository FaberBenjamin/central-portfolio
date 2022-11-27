import { useState } from "react";
import classes from "./NavigationNavbar.module.css";
import { Link } from "react-router-dom";

const NavigationNavbar = (props) => {

    const [dropbarVisible, setDropbarVisible] = useState(false)
    const [navbarCollapse, setNavbarCollapse] = useState(false)

let classCondition = classes.menu_hidden;
let linkCondition = classes.link_hidden;
let navbarCondition = classes.body

const MenuToogleHandler = () => {
    if (dropbarVisible === false){
   setDropbarVisible(true)} else if (dropbarVisible === true) {
    setDropbarVisible(false)
   }
}

const HoverOutHandler = () => {
    setDropbarVisible(false)
}

const navbarHandler = () => {
    if (navbarCollapse === false){
    setNavbarCollapse(true)} else if (navbarCollapse === true) {
        setNavbarCollapse(false)
    }
}

navbarCollapse === true ? navbarCondition = classes.navbar_active : navbarCondition = classes.navbar_basic;
dropbarVisible === true ? classCondition = classes.menu_visible : classCondition = classes.menu_hidden;

    return (

        <div className={`${classes.navbar_body} ${navbarCondition}`}>

            <h1 className={classes.navbar_text}>{props.pageName}</h1>

            <div className={classes.hamburger} onClick={navbarHandler}><img src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"></img></div>
            <div className={`${classes.subtitles} ${navbarCondition}`}>
               
                <div><Link className={`${classes.link} ${linkCondition}`} to="/about"><h2>About Me</h2></Link></div>
                <div className={`${classes.jobs_container_fix} ${linkCondition}`} >
                    <h2 onClick={MenuToogleHandler}>Previous Jobs</h2>
                    <div onMouseLeave={HoverOutHandler} className={`${classes.jobs_container} ${classCondition}`}>
                        <Link className={classes.link} to="/petrol-work"><h3>Petrol-Station</h3></Link>
                        <Link className={classes.link} to="/airport-work"><h3>Budapest Airport</h3></Link>
                        <Link className={classes.link} to="/frontend-work"><h3>Frontend Dev</h3></Link>
                    </div>
                </div>
                <div><Link className={`${classes.link} ${linkCondition}`} to="./skills"><h2>Skills</h2></Link></div>
                <div><Link className={`${classes.link} ${linkCondition}`} to="./contact"><h2>Contact</h2></Link></div>

               
            </div>

        </div>

    )
}

export default NavigationNavbar