import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.content_container}>
                <div className={classes.profile_card}>
                    <img className={classes.profile_img} src={require('../images/profile.png')}></img>
                    <h3>Hi, I'm Benjamin Kovács</h3>
                    <p>I'm a 20 years old enthusiastic student who would like to work
                        as a Frontend Developer.
                    </p>
                    <p>
                        I worked at many fields throught my life. I was a cashier at a petrol station,
                        instructor at a restaurant at Budapest Airport, private teacher and many other.
                    </p>
                    <p>
                        What all of these jobs have taught me, was that I love working with people and I successfully developed
                        a custumer-oriented thinking.
                    </p>
                    <p>
                        I love learning languages and meeting with people all around the globe. I consider myself
                        to be a patient, cooperative and tolerant person.
                    </p>
                </div>

                <div className={classes.cards_container}>
                    <div className={classes.card}>
                        <h3>I live in Budapest, Hungary.</h3>
                        <p>I have a relatively simple life. I always like to learn new things,
                            I very much enjoy video games, art, moving out and broadening my knowledge on basically anything.
                        </p>
                    </div>

                    <div className={classes.card}>
                        <h3>I study at University.</h3>
                        <p>
                            I study to become a History&English teacher. I very much enjoy the fields I study and my results are promising. Currently I'm on a gap year in order to fully turn my energies on learning programming.
                        </p>
                    </div>

                    <div className={classes.card}>
                        <h3>I like adventures.</h3>
                        <p>
                            Though I love spending my chilly mornings with programming and my warm coffee, I am always happy to have some adventure as well. Whether it is a new job abroad, a new project or new skills I can learn - I'm in.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;