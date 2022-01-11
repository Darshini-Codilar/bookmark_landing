import { PureComponent } from "react";
import './section1.scss';

class Section1 extends PureComponent {
    render() {
        return (
            <div className="section1">
                <div className="features">
                    <h2>Features</h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
                <ul className="options">
                    <li className="option" data-position="0">Simple bookmarking</li>
                    <li className="option" data-position="1">Speedy searching</li>
                    <li className="option" data-position="2">Easy sharing</li>
                </ul>

                <div className="row_section1">
                    <div className="col1_section1">
                        <div className="img"><img src="images/illustration-features-tab-1.svg" alt="img" /></div>
                        <div className="blue-bg_left"></div>
                    </div>
                    <div className="col2_section1">
                    <h3>Bookmark in one click</h3>
                            <p>
                            Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites.
                            </p>
                            <button class="btn_section1">More Info</button>
                        </div>

                </div>
            </div>
        );
    }
}
export default Section1;