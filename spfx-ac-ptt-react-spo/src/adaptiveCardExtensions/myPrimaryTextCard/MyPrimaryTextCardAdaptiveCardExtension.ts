import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { MyPrimaryTextCardPropertyPane } from './MyPrimaryTextCardPropertyPane';

export interface IMyPrimaryTextCardAdaptiveCardExtensionProps {
  title: string;
}

export interface IMyPrimaryTextCardAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'MyPrimaryTextCard_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'MyPrimaryTextCard_QUICK_VIEW';

export default class MyPrimaryTextCardAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IMyPrimaryTextCardAdaptiveCardExtensionProps,
  IMyPrimaryTextCardAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: MyPrimaryTextCardPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'MyPrimaryTextCard-property-pane'*/
      './MyPrimaryTextCardPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.MyPrimaryTextCardPropertyPane();
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
