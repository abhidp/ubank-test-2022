import Page from './page'
import CommonPageElements from './common'

class HomePage extends Page {
  public get searchForAnything() {
    return $('.ui-autocomplete-input') //CSS Selector for  search bar
  }

  public get linkSignIn() {
    return $('.gh-ug-guest') //CSS Selector locator for Sign In link
  }

  public async search(item: string) {
    await this.searchForAnything.setValue(item)
    await CommonPageElements.btnSubmit.click()
  }

  public open() {
    return super.open('/')
  }
}

export default new HomePage()
