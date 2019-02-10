import React, { Component } from "react";
import GetIt from "./components/GetIt/GetIt";
import "./style.css";
import logo from "./assets/img/logo.png";
import icon from "./assets/img/icon.png";
import icon2 from "./assets/img/icon2.png";
import laptop from "./assets/img/laptop.png";
import mac from "./assets/img/mac.png";
import MobileImage from "./assets/img/mobile.png";
const wrapperTemplatesImages = [
  require("./assets/img/home/home-00.jpg"),
  require("./assets/img/home/home-01.jpg"),
  require("./assets/img/home/home-02.jpg"),
  require("./assets/img/home/home-03.jpg"),
  require("./assets/img/home/home-04.jpg"),
  require("./assets/img/home/home-05.jpg"),
  require("./assets/img/home/home-06.jpg"),
  require("./assets/img/home/home-07.jpg"),
  require("./assets/img/home/home-08.jpg"),
  require("./assets/img/home/home-09.jpg"),
  require("./assets/img/home/home-10.3.jpg"),
  require("./assets/img/home/home-10.4.jpg"),
  require("./assets/img/home/home-10.5.jpg"),
  require("./assets/img/home/home-10.6.jpg"),
  require("./assets/img/home/home-10.7.jpg"),
  require("./assets/img/home/home-10.8.jpg"),
];

const wrapperPreMadeLayouts = [
  [require("./assets/img/premade/monstr-home-1.jpg"), "Home Default"],
  [require("./assets/img/premade/monstr-home-2.jpg"), "Home Business"],
  [require("./assets/img/premade/monstr-home-3.jpg"), "Home Commercial"],
  [require("./assets/img/premade/monstr-home-4.jpg"), "Home Creative"],
  [require("./assets/img/premade/monstr-home-5.jpg"), "Home Modern"],
  [require("./assets/img/premade/monstr-home-6.jpg"), "Home Portfolio"],
  [require("./assets/img/premade/monstr-home-7.jpg"), "Home Default1"],
  [require("./assets/img/premade/monstr-home-8.jpg"), "Home Default2"],
];

const features = [
  "HTML5 + JS + CSS + SCSS",
  "Bootstrap 4+",
  "Blog Pages",
  "Shop Pages",
  "SEO Optimized",
  "Google Fonts Support",
  "Amazing Plugins",
  "Premium Resources",
];

class App extends Component {
  state = {
    colorHeader: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHeader);
  }

  scrollHeader = e => {
    if (window.scrollY !== 0) {
      this.setState({ colorHeader: true });
    } else {
      this.setState({ colorHeader: false });
    }
  };

  render() {
    const { colorHeader } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <div className="block-1">
            <header>
              <div className={`header-inner ${colorHeader ? "color" : ""}`}>
                <img alt="" className="logo" src={logo} />
                <ul className="menu">
                  <li>HOME</li>
                  <li>FEATURES</li>
                  <li>NICHE LAYOUTS</li>
                  <li>LAYOUTS</li>
                  <li>UPDATES</li>
                </ul>
                <button className="buy-template-button">BUY TEMPLATE</button>
              </div>
            </header>
            <div className="wrapper-info">
              <h1>Create Customise Your Own Website</h1>
              <h3>It has never beet easier!</h3>
              <button className="demo">LIVE DEMO</button>
            </div>
          </div>
          <div className="block-2">
            <GetIt />
          </div>
          <div className="block-3">
            <h2>
              Features are <p className="change-font"> ...ready to use </p>
            </h2>
            <div className="advantages">
              <div className="advantage">
                <i className="material-icons">file_copy</i>
                <h3>400+</h3>
                <p>HTML Pages</p>
              </div>
              <div className="advantage">
                <i className="material-icons">flip_to_front</i>
                <h3>∞</h3>
                <p>Unlimited Layouts</p>
              </div>
              <div className="advantage">
                <i className="material-icons">brush</i>
                <h3>700+</h3>
                <p>Visual Editor Presets</p>
              </div>
              <div className="advantage">
                <i className="material-icons">favorite_border</i>
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="block-4">
            <h1>Niche Templates</h1>
            <p>Monstroid² offers you lots of customizable niche layouts, with which you can build your website.</p>
            <div className="wrapper-templates">
              {wrapperTemplatesImages.map((img, i) => {
                return (
                  <div className="template" key={i}>
                    <img className="templateImage" src={img} alt="" />
                    <div className="templateText">
                      <div className="templateTitle">Lorem Ipsum</div>
                      <p>Dolor Sit Ammet</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="block-5">
            <h1>Pre-made layouts</h1>
            <p>Use these pre-made layouts with any page of Monstroid².</p>
            <div className="wrapper-pre-made-layouts">
              {wrapperPreMadeLayouts.map((arr, i) => {
                return (
                  <div className="pre-made-layout" key={i}>
                    <img src={arr[0]} alt="" />
                    <div>{arr[1]}</div>
                  </div>
                );
              })}
            </div>
            <button className="view-more">VIEW MORE</button>
          </div>
          <div className="block-6">
            <GetIt />
          </div>
          <div className="block-7">
            <h1>Monstroid² Advantages</h1>
            <div className="wrapper-monstroid-advantages">
              <div className="monstroid-advantage">
                <img alt="" src={icon} />
                <h3>Accelerate your development</h3>
                <p>Speedup your project development in 2 or even 3 times using this template.</p>
              </div>
              <div className="monstroid-advantage">
                <img alt="" src={icon} />
                <h3>Reduce your QA</h3>
                <p>Thanks to this template, your project fixes will be made in a blink of the eye.</p>
              </div>
              <div className="monstroid-advantage">
                <img alt="" src={icon} />
                <h3>Save your money</h3>
                <p>An accelered development lets you to save a thousands of dollars on creating your projects.</p>
              </div>
              <div className="monstroid-advantage">
                <img alt="" src={icon} />
                <h3>Suggest and get satisfied</h3>
                <p>The main idea is to create a product by people for the people.</p>
              </div>
            </div>
          </div>
          <div className="block-8">
            <div className="wrapper-optimized">
              <img src={MobileImage} alt="" />
              <div className="wrapper-infomation">
                <h1>Optimized for Mobile Devices</h1>
                <div className="wrapper-info-wrapper">
                  <div className="info">
                    <i className="material-icons">important_devices</i>
                    <div className="wrapper-info-text">
                      <h2>100% Responsive</h2>
                      <p>Monstroid² is fully responsive and will adapt itself to any mobile or tablet device.</p>
                    </div>
                  </div>
                  <div className="info">
                    <i className="material-icons">remove_red_eye</i>
                    <div className="wrapper-info-text">
                      <h2>Retina Ready</h2>
                      <p>
                        Monstroid² is Retina Ready and it guarantees that your website will always look perfect on any
                        device.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-9">
            <div className="wrapper-info-text">
              <div className="info-text">
                <div className="info">
                  <div className="wrap-text">
                    <h3>SEO Friendly</h3>
                    <p>Valid code and performance optimized framework make SEO easy and hassle-free.</p>
                  </div>
                  <i className="material-icons">zoom_in</i>
                </div>
                <div className="info">
                  <div className="wrap-text">
                    <h3>Advanced UI Kit</h3>
                    <p>
                      Monstroid² comes with a powerful and flexible extended toolkit in addition to basic Bootstrap.
                    </p>
                  </div>
                  <i className="material-icons">zoom_in</i>
                </div>
              </div>
              <img alt="" src={laptop} />
              <div className="info-text-2">
                <div className="info-2">
                  <i className="material-icons">zoom_in</i>
                  <div className="wrap-text">
                    <h3>Powerful flexbox grid system</h3>
                    <p>Monstroid² includes a powerful mobile-first flexbox grid system for building layouts.</p>
                  </div>
                </div>
                <div className="info-2">
                  <i className="material-icons">zoom_in</i>
                  <div className="wrap-text">
                    <h3>Flexible and Multipurpose</h3>
                    <p>Monstroid² allows to create various websites for complex and scalable projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-10">
            <GetIt />
          </div>
          <div className="block-11">
            <img alt="" src={mac} />
            <div className="wrapper-text-buy">
              <h3>Buy Monstroid² Once and Get Free Updates</h3>
              <p>Enjoy a range of new layouts and child themes with regular free updates.</p>
            </div>
          </div>
          <div className="block-12">
            <h1>Key Features</h1>
            <div className="wrapper-key-features">
              {features.map((text, i) => {
                return (
                  <div className="feature" key={i}>
                    <img src={icon2} alt="" />
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="block-13">
            <GetIt />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
