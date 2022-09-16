export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string) {
    const url = `https://www.ebay.com.au${path}`
    return browser.url(url)
  }
}
