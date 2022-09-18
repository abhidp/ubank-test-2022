import Page from './page'

class SearchResultsPage extends Page {
  public get searchResults() {
    return $('#srp-river-results')
  }
}

export default new SearchResultsPage()
