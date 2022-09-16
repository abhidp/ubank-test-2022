import HomePage from '../pageobjects/homePage'
import searchResultspage from '../pageobjects/searchResultspage'

const itemToSearch: string = 'xbox'

describe('Search for item in eBay homepage', () => {
  it('should open the homepage and have signin and register links', async () => {
    await HomePage.open()

    expect(browser).toHaveUrl('ebay.com.au')
    expect(HomePage.linkSignIn).toBeDisplayedInViewport()
  })

  it('should search for an item in search bar', async () => {
    await HomePage.search(itemToSearch)

    expect(searchResultspage.searchResults).toBeDisplayed()
  })
})
