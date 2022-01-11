import { PureComponent } from "react";
import './header.scss';

class Header extends PureComponent {
    render() {
        return (
            <div className="conatainer-main">

                <nav>
                    <div className="container-inner">
                        <div className="logo"><img src="images/logo-bookmark.svg" /></div>
                            <ul>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li className="btn_red"><button>LOGIN</button> </li>
                            </ul>
                            <div className="menu">
                                <img src="images/icon-hamburger.svg" alt="" />
                            </div>
                    </div>
                </nav>

                <div className="container_header">
                    <div className="row_main">
                        <div className="col1">
                            <h1>A Simple Bookmark Manager</h1>
                            <p>
                                A clean and simple interface to organize your favourite websites. Open a new
                                browser tab and see your sites load instantly. Try it for free.
                            </p>
                            <div className="butts">
                                <button className="btn1">Get it on Chrome</button>
                                <button className="btn2">Get it on Firefox</button>
                            </div>
                        </div>

                        <div className="col2">
                            <img src="images/illustration-hero.svg" alt="img" />
                            <div className="blue-bg_right"></div>
                        </div>

                    </div>
                </div>
            </div>  
        );
    }
}
export default Header;