import HomePage from '../pageobjects/homePage'
import searchResultsPage from '../pageobjects/searchResultsPage'

const itemToSearch: string = 'xbox'

describe('Search for item in eBay homepage', () => {
  it('should open the homepage and display signin and register links', async () => {
    await HomePage.open()

    expect(browser).toHaveUrl('ebay.com.au')
    expect(HomePage.linkSignIn).toBeDisplayedInViewport()
  })

  it('should search for an item in search bar and display results', async () => {
    await HomePage.search(itemToSearch)

    expect(searchResultsPage.searchResults).toBeDisplayed()
  })
})
