import React, { Component } from "react";
import "../../style/style.css";
import { API } from "../../services/api";
import { GetIt } from "../../components/Home/GetIt/GetIt";
import { StartHomeBlock } from "../../components/Home/StartHomeBlock/StartHomeBlock";
import { Features } from "../../components/Home/Features/Features";
import { NicheTemplates } from "../../components/Home/NicheTemplates/NicheTemplates";
import { PreMadeLayouts } from "../../components/Home/PreMadeLayouts/PreMadeLayouts";
import { Advantages } from "../../components/Home/Advantages/Advantages";
import { OptimizedMobile } from "../../components/Home/OptimizedMobile/OptimizedMobile";
import { Technologes } from "../../components/Home/Technologes/Technologes";
import { BuyMonstroid } from "../../components/Home/BuyMonstroid/BuyMonstroid";
import { KeyFeatures } from "../../components/Home/KeyFeatures/KeyFeatures";
const wrapperTemplatesImages = [
  "http://localhost:3001/home/img/home/home-00.jpg",
  "http://localhost:3001/home/img/home/home-01.jpg",
  "http://localhost:3001/home/img/home/home-02.jpg",
  "http://localhost:3001/home/img/home/home-03.jpg",
  "http://localhost:3001/home/img/home/home-04.jpg",
  "http://localhost:3001/home/img/home/home-05.jpg",
  "http://localhost:3001/home/img/home/home-06.jpg",
  "http://localhost:3001/home/img/home/home-07.jpg",
  "http://localhost:3001/home/img/home/home-08.jpg",
  "http://localhost:3001/home/img/home/home-09.jpg",
  "http://localhost:3001/home/img/home/home-10.3.jpg",
  "http://localhost:3001/home/img/home/home-10.4.jpg",
  "http://localhost:3001/home/img/home/home-10.5.jpg",
  "http://localhost:3001/home/img/home/home-10.6.jpg",
  "http://localhost:3001/home/img/home/home-10.7.jpg",
  "http://localhost:3001/home/img/home/home-10.8.jpg",
];

const wrapperPreMadeLayouts = [
  ["http://localhost:3001/home/img/premade/monstr-home-1.jpg", "Home Default"],
  ["http://localhost:3001/home/img/premade/monstr-home-2.jpg", "Home Business"],
  ["http://localhost:3001/home/img/premade/monstr-home-3.jpg", "Home Commercial"],
  ["http://localhost:3001/home/img/premade/monstr-home-4.jpg", "Home Creative"],
  ["http://localhost:3001/home/img/premade/monstr-home-5.jpg", "Home Modern"],
  ["http://localhost:3001/home/img/premade/monstr-home-6.jpg", "Home Portfolio"],
  ["http://localhost:3001/home/img/premade/monstr-home-7.jpg", "Home Default1"],
  ["http://localhost:3001/home/img/premade/monstr-home-8.jpg", "Home Default2"],
];

class Home extends Component {
  state = {
    colorHeader: false,
    features: [],
  };

  componentDidMount() {
    console.log(123);
    window.addEventListener("scroll", this.scrollHeader);
    API("GET", "/home/features").then(features => {
      console.log(features);
      this.setState({ features: features });
    });
  }

  scrollHeader = e => {
    if (window.scrollY !== 0) {
      this.setState({ colorHeader: true });
    } else {
      this.setState({ colorHeader: false });
    }
  };

  scrollToElement = e => {
    // TODO: определить начальные координаты элемента
    document.documentElement.scrollTo(0, 0);
  };

  render() {
    const { colorHeader, features } = this.state;
    return (
      <div className="wrapperHome">
        <StartHomeBlock colorHeader={colorHeader} scrollToElement={this.scrollToElement} />
        <GetIt
          titleText={"Monstroid² is the perfect start of your future website"}
          subtitleText={
            "We took into consideration all of the latest innovative user-experience researches and best practices."
          }
        />
        <Features />
        <NicheTemplates wrapperTemplatesImages={wrapperTemplatesImages} />
        <PreMadeLayouts wrapperPreMadeLayouts={wrapperPreMadeLayouts} />
        <GetIt
          titleText={"Monstroid² is a flexible solution with lots of advantages"}
          subtitleText={"Our template offers you a variety of elements to be combined."}
        />
        <Advantages />
        <OptimizedMobile />
        <Technologes />
        <GetIt
          titleText={"Monstroid² is a perfect web design solution for everybody"}
          subtitleText={"Become the owner of the best solutions for creating your own website!"}
        />
        <BuyMonstroid />
        <KeyFeatures features={features} />
        <GetIt titleText={"24/7 Effective and Friendly Premium Support"} />
      </div>
    );
  }
}

export default Home;
