import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';

import styles from './MyFieldCust.module.scss';

export interface IMyFieldCustProps {
  text: string;
}

const LOG_SOURCE: string = 'MyFieldCust';

export default class MyFieldCust extends React.Component<IMyFieldCustProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: MyFieldCust mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: MyFieldCust unmounted');
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.myFieldCust}>
        { this.props.text }
      </div>
    );
  }
}
