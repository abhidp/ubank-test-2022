import Page from './page'

class CommonPageElements extends Page {
  public get btnSubmit() {
    return $('input[type="submit"]')
  }
}
export default new CommonPageElements()
