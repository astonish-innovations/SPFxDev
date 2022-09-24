import * as React from "react";
import styles from "./MyReactWp.module.scss";
import { IMyReactWpProps } from "./IMyReactWpProps";

import { escape } from "@microsoft/sp-lodash-subset";

import 'office-ui-fabric-react/dist/css/fabric.css';

import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import MyServices from "./MyServices/MyServices";
import MyForm from "./MyForm/MyForm";

export default class MyReactWp extends React.Component<IMyReactWpProps, {}> {
  public render(): React.ReactElement<IMyReactWpProps> {
    // const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName,
    // } = this.props;

    return (
      <div className={`ms-Grid`} dir="ltr">
          <div className={`ms-Grid-row`}>
              <div className={`ms-Grid-col ms-sm12 ms-xl12`}>
                <MyForm title="My Form"/>
              </div>
          </div>
          <div className={`ms-Grid-row`}>
              <div className={`ms-Grid-col ms-sm4 ms-xl4`}>
                <AboutUs heading={"About Astonish"} subHeading={"My sub-heading"}/>
              </div>
              <div className={`ms-Grid-col ms-sm8 ms-xl8`}>
                <ContactUs heading={"Contact Astonish Team"}/>
              </div>
          </div>
          <div className={`ms-Grid-row`}>
              <div className={`ms-Grid-col ms-sm12 ms-xl12`}>
                <MyServices title="My Services"/>
              </div>
          </div>
      </div>
    );
  }
}
