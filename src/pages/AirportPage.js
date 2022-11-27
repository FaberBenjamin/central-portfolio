import classes from "./AirportPage.module.css"

const AirportPage = () => {
    return (
        <div className={classes.background_img}>
            <img className={classes.plain} src={require('../images/airplane.png')}></img>
            <img className={classes.cloud_1} src={require('../images/Cloud1.png')}></img>
            <img className={classes.cloud_2} src={require('../images/Cloud2.png')}></img>
            <div className={classes.page_wrapper}>

                <div className={classes.content_container}>
                    <div className={classes.description}>
                        <h1>My most recent job was at Budapest Aiport</h1>
                        <h3>I have been working at the airport for 3 years now.
                        </h3>
                        <h3>During my time at the airport I had a very supportive team. First I was
                            working just to earn some pocket money besides learning. Eventually I became
                            a 'full-timer'. Of course I have also went through the usual ladder of success.
                            First I was just student, then I gradually learned all the different positions, 
                            became instructor etc. Since I was really ambitious (especially at the first stages) so 
                            climbing the ladder was relatively easy and quick.
                        </h3>
                        <h3>I am most greateful to my team. I really did learn it here how to work in team,
                            how to deliver the best quality always and how to maintain a life-work balance.
                        </h3>
                        <h3>The airport staff had a sort of 'Airport carpe diem' which I really liked: "Magasan a legjobb!" (It's best to be high above)
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirportPage;