Feature("search");

Scenario("test something", ({ I }) => {
  I.amOnPage("https://codecept.io/");
  I.fillField({ xpath: "//input[@id='algolia-search-input']" }, "locators");
  I.click({ xpath: "//p/a" });
  I.see("# \n Quickstart", { xpath: "//h1[@id='quickstart']" });
  pause();
});
