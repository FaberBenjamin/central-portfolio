import classes from "./ContactPage.module.css"

const ContactPage = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.text_container}>
                <h2>If I raised your attention you can contact me on the following platforms:</h2>
                <div> <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png"></img><h1>Email: benjamin.faber00@gmail.com</h1></div>
                <div>   <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png"></img><h1>Github: github.com/FaberBenjamin</h1></div>
                <div>  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png"></img><h1>Twitter: twitter.com/Faber_Benjamin0</h1></div>
            </div>
        </div>
    )
}

export default ContactPage;