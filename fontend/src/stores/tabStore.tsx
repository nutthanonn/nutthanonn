import { observable, makeObservable, action } from "mobx";

export class TabStoreImpl {
  tabStore: string = "1";

  constructor() {
    makeObservable(this, {
      tabStore: observable,
      changeTab: action,
    });
  }

  changeTab(value: string) {
    this.tabStore = value;
  }
}

export const tabStore = new TabStoreImpl();
