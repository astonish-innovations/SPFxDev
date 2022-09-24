import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { MyImageCardPropertyPane } from './MyImageCardPropertyPane';

export interface IMyImageCardAdaptiveCardExtensionProps {
  title: string;
}

export interface IMyImageCardAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'MyImageCard_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'MyImageCard_QUICK_VIEW';

export default class MyImageCardAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IMyImageCardAdaptiveCardExtensionProps,
  IMyImageCardAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: MyImageCardPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'MyImageCard-property-pane'*/
      './MyImageCardPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.MyImageCardPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
