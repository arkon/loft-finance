# loft-finance

A quick POC created in 2 hours to showcase some web dev skills.


## Goals

- Use data from Google Finance to show stock data
- Create some form of MVC web app, making use of some ES2015 features like promises
- Webpage should have a header, footer, and sidebar/content
  - Header with logo/searchbox
  - Sidebar (aside) with persistant search history
    - History should be clickable, same as the previous search
    - Item should show stock ticker and movement
  - Content: show a dump of the JSON data (e.g. in a `<pre>`)
- Stretch goals:
  - Live updating ticker data in sidebar
  - Display data content in a nice way
- Should support fairly new browsers (+1, -2) + IE11


## References

- https://www.google.com/finance?q=GOOG
- https://groups.google.com/forum/#!topic/google-finance-apis/xOBpvoNQ2Ec
- http://finance.google.com/finance/info?client=ig&q=GOOG
- https://www.google.com/finance/historical?q=GOOG&output=csv


## TODO

- [ ] Better organization of styles/components
- [ ] Break out searchbar into component
- [ ] Better handle errors
- [ ] More thorough testing of data fetching module
- [ ] Better styling
- [ ] Ensure autoprofixer is configured properly
- [ ] Persist history across sessions
