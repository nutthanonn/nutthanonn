import { observable, makeObservable, action } from "mobx";

export class SearchStoreImpl {
  searchState: Boolean = false;
  wordSearch: string = "";

  constructor() {
    makeObservable(this, {
      searchState: observable,
      wordSearch: observable,
      clickSearch: action,
    });
  }

  clickSearch(item: boolean) {
    this.searchState = item;
  }

  wordOnChange(text: string) {
    if (text.trim().length >= 3) {
      this.wordSearch = text;
    }
  }
}

export const searchStore = new SearchStoreImpl();
export const wordSearch = new SearchStoreImpl();
