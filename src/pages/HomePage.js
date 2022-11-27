import classes from "./HomePage.module.css"
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.button_container}>
            <Link className={classes.link} to="/curriculum"><button className={classes.custom_button}> Vitae</button></Link>
            <Link className={classes.link}  to="/contact"><button className={classes.custom_button}>Contact</button></Link>
            </div>
        </div>
    )
}

export default HomePage;
