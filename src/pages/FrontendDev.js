import classes from "./FrontendDev.module.css";

const FrontendDev = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.text_container}>


                <h1 className={classes.main_text}>Here you can check some of my previous works.
                    They are still in development (as client requests change and my knowledge is growing)
                    but these are the current stable versions.
                </h1>


                <div className={classes.portfolio_work_container}>
                <a href="https://faberbenjamin.github.io/the-nutrition-comparer/"><img src={require('../images/React_project_image.png')}></img></a>
                    <h2>React-based project</h2>
                    <p className={classes.paragraph_correction}>The nutrition comparer is an early-stage webpage which
                        compares different kinds of dishes by their nutrition values.
                    </p>
                    <p>This project was based on:</p>
                    <div className={classes.icon_container}>

                        <div className={classes.icon_adjustment}>
                            <img className={classes.icon} src="https://cdn-icons-png.flaticon.com/512/875/875209.png" />
                            <h2>React</h2>
                        </div>
                        <div className={classes.icon_adjustment}>
                            <img className={classes.icon} src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" />
                            <h2>APIs</h2>
                        </div>

                        <div className={classes.icon_adjustment}>
                            <img className={classes.icon} src="https://cdn-icons-png.flaticon.com/512/186/186319.png" />
                            <h2>CSS</h2>
                        </div>

                    </div>
                </div>

                <div className={classes.portfolio_work_container}>
                    <a href="//www.szentgyörgybirtok.hu"><img src={require('../images/Lovarda.png')}></img></a>
                    <h2>Bootstrap-based project</h2>


                    <p className={classes.paragraph_correction}>Szent György lovarda is a Hungarian family-run riding hall. I had the honor to make their
                        official website. It you happen to be around, be sure to visit them.
                    </p>

                    <p>This project was based on:</p>
                    <div className={classes.icon_container}>

                        <div className={classes.icon_adjustment}>
                            <img className={classes.icon} src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" />
                            <h2>Bootstrap</h2>
                        </div>
                        <div className={classes.icon_adjustment}>
                            <img className={classes.icon} src="https://cdn-icons-png.flaticon.com/512/186/186319.png" />
                            <h2>CSS</h2>
                        </div>

                        <div className={classes.icon_adjustment}>
                            <img className={classes.icon} src="https://cdn-icons-png.flaticon.com/512/136/136530.png" />
                            <h2>JavaScript</h2>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FrontendDev