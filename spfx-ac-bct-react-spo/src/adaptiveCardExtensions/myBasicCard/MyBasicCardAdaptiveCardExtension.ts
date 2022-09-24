import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { MyBasicCardPropertyPane } from './MyBasicCardPropertyPane';

export interface IMyBasicCardAdaptiveCardExtensionProps {
  title: string;
}

export interface IMyBasicCardAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'MyBasicCard_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'MyBasicCard_QUICK_VIEW';

export default class MyBasicCardAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IMyBasicCardAdaptiveCardExtensionProps,
  IMyBasicCardAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: MyBasicCardPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'MyBasicCard-property-pane'*/
      './MyBasicCardPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.MyBasicCardPropertyPane();
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
