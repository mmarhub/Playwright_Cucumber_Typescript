Feature: GitHub Scenarios for GitHub Login

  @regression @low @signin
  Scenario: GitHub login - negative scenario
    Given Open the browser and start "github" application
    And Navigate to "signin" page
    When Login to user account with user as "test@test.com" and pass as "test123"
    Then Validate the app message as "Login Successful."

  @regression @high @signin
  Scenario: GitHub login - positive scenario
    Given Open the browser and start "github" application
    And Navigate to "signin" page
    When Login to user account with user as "test@test.com" and pass as "test123"
    Then Validate the app message as "Incorrect username or password."

# The npm CLI command to invoke the test with CLI arguments parameterized. 
# npm run test --TAGS="@regression" --ENV="qa" --BROWSER="chrome"
