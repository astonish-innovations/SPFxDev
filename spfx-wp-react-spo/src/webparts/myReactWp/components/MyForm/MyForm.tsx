import { TextField } from "office-ui-fabric-react";
import * as React from "react";

export interface IMyFormProps {
  title: string;
}
export interface IMyFormState {
  name: string;
}
export default class MyForm extends React.Component<
  IMyFormProps,
  IMyFormState
> {
  constructor(props: IMyFormProps) {
    super(props);
    this.state = {
      name: "ABC"
    };
  }

  public render(): React.ReactElement<IMyFormProps> {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <TextField value={this.state.name} label="Enter your name:" onChange={(ev, newValue)=> this.setState({name: newValue})}/>

        <h3>Welcome, {this.state.name}!</h3>
      </div>
    );
  }
}
