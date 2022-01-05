import { PureComponent } from "react";
import './footer.css';

class Footer extends PureComponent {
    state = {
        value: "",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    }
    set = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        console.log(this.state);
        return (
            <div className="footer">
                <div className="question_freq">
                    <h3>Frequently Asked Questions</h3>
                    <p>
                        Here are some of our FAQs.If you have any other questions you’d like
                        answered please feel free to email us.
                    </p>
                </div>
                <div className="faqs">
                    <div className="faqs_content">
                        <div className="question">
                            <h4 className="question_text">What is Bookmark?</h4>
                            <img src="images/icon-arrow.svg" alt="Arrow up" />
                        </div>

                    </div>
                    <hr />
                    <div className="faqs_content">
                        <div className=" question ">
                            <h4 className="question_text">How can I request a new browser?</h4>
                            <img src="images/icon-arrow.svg" alt="Arrow up" />
                        </div>

                    </div>
                    <hr />
                    <div className="faqs_content">
                        <div className="question">
                            <h4 className="question_text">Is there a mobile app?</h4>
                            <img src="images/icon-arrow.svg" alt="Arrow up" />
                        </div>

                    </div>
                    <hr />
                    <div className="faqs_content">
                        <div className="question">
                            <h4 className="question_text">What about other Chromium browsers?</h4>
                            <img src="images/icon-arrow.svg" alt="Arrow up" />
                        </div>

                    </div>

                    <div className="button_faqs">
                        <button className="btn_faqs">More info</button>
                    </div>
                </div>

                <div className="main_footer">
                    <section className="section contact-section">
                        <div className="contact-content">
                            <p className="joined">35.000+ already joined</p>
                            <h3 className="heading3">Stay up-to-date with what we're doing</h3>
                        </div>
                        <form class="form">
                            <div className="input-container">
                                <div className="input-f">
                                    <input
                                        type="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        placeholder="example@email/com"
                                        onChange={this.set}
                                    />
                                    <img
                                        src="images/icon-error.svg"
                                        alt="Error image"
                                        className={this.state.value.length == 0 ? ("error-img") : ("error-img b")}
                                    /></div>
                                <div className="error-message">
                                    <h6>Whoops,make sure it's an email</h6>
                                </div>
                            </div>

                            <div className="button_contact">
                                <button className="btn_contact">Contact Us</button>
                            </div>

                        </form>

                    </section>
                <div className="footer-social">
                    <div className="footer_links">
                        
                        <div className="links-right">
                        <div className="logo_footer"><img src="images/logo-back.svg" /></div>
                            <a href="#features">Features</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="icons_footer">
                            <a href=""><img src="images/icon-facebook.svg" alt="" /></a>
                            <a href=""><img src="images/icon-twitter.svg" alt="" /></a>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;