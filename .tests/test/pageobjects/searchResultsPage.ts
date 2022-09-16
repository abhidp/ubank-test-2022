import Page from './page'
import CommonPageElements from './common'

class SearchResultsPage extends Page {
  public get searchResults() {
    return $('#srp-river-results')
  }
}

export default new SearchResultsPage()
