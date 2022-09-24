import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'MyPrimaryTextCardAdaptiveCardExtensionStrings';
import { IMyPrimaryTextCardAdaptiveCardExtensionProps, IMyPrimaryTextCardAdaptiveCardExtensionState } from '../MyPrimaryTextCardAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
}

export class QuickView extends BaseAdaptiveCardView<
  IMyPrimaryTextCardAdaptiveCardExtensionProps,
  IMyPrimaryTextCardAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: strings.SubTitle,
      title: strings.Title
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}