import { PureComponent } from "react";
import './section2.scss';

class Section2 extends PureComponent {
    render() {
        return (
            <div className="section2">
                <div className="download_section2">
                    <h3>Download the extension</h3>
                    <p>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve
                        got a favourite you’d like us to prioritize.
                    </p>
                </div>
                <div className="cards_section2">
                    <div className="card card1">
                        <div className="cards_img">
                            <img src="images/logo-chrome.svg" alt="chrome_img" /></div>
                            <div className="card_text">
                            <h4>
                                Add to Chrome
                            </h4>
                            <p>Minimum version 62</p></div>
                        
                            <div className="line_img"> <img src="images/bg-dots.svg" alt="bg" /></div>
                      <div>  <button class="btn_cards">Add &
                            Install Extension</button></div>
                   </div>

                    <div className="card card2" >
                        <div className="cards_img">
                            <img src="images/logo-firefox.svg" alt="firefox_img" /></div>
                            <div className="card_text">
                            <h4>
                            Add to Firefox
                            </h4>
                            <p>Minimum version 62</p></div>
                        
                        <div className="line_img"><img src="images/bg-dots.svg" alt="bg" /></div>
                        
                       <div><button class="btn_cards">Add &
                            Install Extension</button></div>


                    </div>
                    <div className="card card3">
                        <div className="cards_img">
                            <img src="images/logo-opera.svg" alt="opera_img" /></div>
                            <div className="card_text">
                            <h4>
                            Add to Opera
                            </h4>
                            <p>Minimum version 62</p></div>
                        
                            <div className="line_img"> <img src="images/bg-dots.svg" alt="bg" /></div>
                       <div><button class="btn_cards">Add &
                            Install Extension</button></div> 


                    </div>

                </div>
            </div>


        );
    }
}
export default Section2;