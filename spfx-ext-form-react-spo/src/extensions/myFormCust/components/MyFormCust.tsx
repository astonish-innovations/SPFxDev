import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';

import styles from './MyFormCust.module.scss';

export interface IMyFormCustProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const LOG_SOURCE: string = 'MyFormCust';

export default class MyFormCust extends React.Component<IMyFormCustProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: MyFormCust mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: MyFormCust unmounted');
  }

  public render(): React.ReactElement<{}> {
    return <div className={styles.myFormCust} />;
  }
}
