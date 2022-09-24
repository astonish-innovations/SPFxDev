import * as React from "react";

interface IAboutUsProps {
	heading: string;
	subHeading: string;
}

export default class AboutUs extends React.Component<IAboutUsProps,{}> {

  constructor(props: IAboutUsProps){
    super(props);
  }

  public render(): React.ReactElement {
    return (
      <div className={`ms-Grid-row`}>
        <h1 className={`ms-Grid-col ms-sm12 ms-xl12`}>
          {this.props.heading}
        </h1>
        <h2 className={`ms-Grid-col ms-sm12 ms-xl12`}>
          {this.props.subHeading}
        </h2>
      </div>
    );
  }
}