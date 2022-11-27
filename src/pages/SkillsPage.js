import classes from "./SkillsPage.module.css"

const SkillsPage = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.content_container}>
                <div className={classes.description} >
                    <h3>Here you can see the fields that I've studied
                        and how confident I am within the fields.
                    </h3>
                    <p>Basically the percentages are a combination of indicators on how much
                        have I used these languages, how much documentation did I read about them
                        and how confidently can I programm with them just by my knowledge.

                        Here you can also see some of the courses I completed:
                    </p>

                    <div className={classes.course_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3829/3829780.png"></img>
                        <h2>Udemy</h2>
                    </div>
                    <p>The complete 2023 Web Development Bootcamp by Dr.Angela Yu</p>
                    <p>React - The Complete Guide by Maximilian Schwarzmüller</p>

                    <div className={classes.course_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></img>
                        <h2>LinkedIn</h2>
                    </div>
                    <p>Bootstrap 5 Essential Training by Ray Villalobos</p>
                    <p>Learning SVG by Morten Rand-Hendriksen</p>
                    <p>React.js Essential Training by Eve Porcello</p>
                    <p>Interactive Animations with CSS and JavaScript by W. Scott Means</p>
                    <p>React Hooks by Eve Porcello</p>
                </div>


                <div className={classes.progressbars_container}>

                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/186/186320.png" />
                        <h3>HTML5</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.HTML}`}></span>
                            </div>
                        </div>
                        <h3>80%</h3>
                    </div>

                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/186/186319.png" />
                        <h3>CSS3</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.CSS}`}></span>
                            </div>
                        </div>
                        <h3>90%</h3>
                    </div>

                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/136/136530.png" />
                        <h3>JavaScript</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.JS}`}></span>
                            </div>
                        </div>
                        <h3>70%</h3>
                    </div>

                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/875/875209.png" />
                        <h3>ReactJS</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.React}`}></span>
                            </div>
                        </div>
                        <h3>70%</h3>
                    </div>


                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" />
                        <h3>APIs</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.API}`}></span>
                            </div>
                        </div>
                        <h3>60%</h3>
                    </div>

                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" />
                        <h3>Bootstrap</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.Bootstrap}`}></span>
                            </div>
                        </div>
                        <h3>70%</h3>
                    </div>

                    <div className={classes.progressbar_container}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6954/6954406.png" />
                        <h3>SVG</h3>
                        <div className={classes.progressbar_wrapper}>
                            <div className={classes.progressbar}>
                                <span className={`${classes.progressbar_fill} ${classes.SVG}`}></span>
                            </div>
                        </div>
                        <h3>70%</h3>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default SkillsPage;