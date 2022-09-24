import * as React from "react";

export interface IMyServicesProps {
  title: string;
}
export interface IMyServicesState {
  number: number;
  squareOfNumber: number;
}
export default class MyServices extends React.Component<
  IMyServicesProps,
  IMyServicesState
> {
  constructor(props: IMyServicesProps) {
    super(props);
    this.state = {
      number: 5,
      squareOfNumber: 0,
    };
  }

  public render(): React.ReactElement<IMyServicesProps> {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>Number: {this.state.number}</div>
        <div>Square of Number: {this.state.squareOfNumber}</div>
        <button
          onClick={() =>
            this.setState({
              squareOfNumber: this.state.number * this.state.number,
            })
          }
        >
          Get Square
        </button>

        {this.state.squareOfNumber < 10 ? (
          <h3>Square is less than 10</h3>
        ) : (
          <h3>Square is greater than 10</h3>
        )}
        
      </div>
    );
  }
}
