import React, { Component } from "react";
import "../../style/style.css";
import apiAxios from "../../services/apiAxios";
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

class Home extends Component {
  state = {
    colorHeader: false,
    dataHome: {
      templatesImages: [],
      features: [],
    },
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHeader);
    apiAxios.get("/home").then(res => {
      this.setState({ dataHome: res.data });
    });
  }

  scrollHeader = e => {
    if (!window.scrollY) {
      this.setState({ colorHeader: false });
    } else if (window.scrollY && !this.state.colorHeader) {
      this.setState({ colorHeader: true });
    }
  };

  scrollToElement = e => {
    // TODO: определить начальные координаты элемента
    document.documentElement.scrollTo(0, 0);
  };

  render() {
    const { colorHeader, dataHome } = this.state;
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
        <NicheTemplates templatesImages={dataHome.templatesImages} />
        <PreMadeLayouts />
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
        <KeyFeatures features={dataHome.features} />
        <GetIt titleText={"24/7 Effective and Friendly Premium Support"} />
      </div>
    );
  }
}

export default Home;
