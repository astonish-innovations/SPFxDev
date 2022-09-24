import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './NoJsWebPartWebPart.module.scss';
import * as strings from 'NoJsWebPartWebPartStrings';
// import * as jq from 'jquery';
// require('bootstrap/dist/js/bootstrap.bundle.js');
// require('bootstrap/dist/css/bootstrap.min.css');

import { SPComponentLoader } from '@microsoft/sp-loader';
import * as jquery from 'jquery';
require('bootstrap');

export interface INoJsWebPartWebPartProps {
  description: string;
}

export default class NoJsWebPartWebPart extends BaseClientSideWebPart<INoJsWebPartWebPartProps> {

  public render(): void {
    let cssURL = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);

    // let scriptURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
    // SPComponentLoader.loadScript(scriptURL);
    this.domElement.innerHTML = `
      <div class=${styles.myContainer}>
      <h1 id="helloText" class=${styles.boldItalicText}></h1>
      <main>
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
              <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
              <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" >Sign up</button>
                <hr class="my-4">
                <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
              </form>
            </div>
          </div>
        </div>
      </main>
      </div>`;
    // jq('#helloText').text('Hello World!!!');
    jquery('#helloText').text('Hello World!!!');
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
