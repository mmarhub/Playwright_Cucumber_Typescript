Feature: GitHub Scenarios for GitHub Pricing

  @regression @high @pricing
  Scenario: GitHub pricing - positive scenario
    Given Open the browser and start "github" application
    And Navigate to "signin" page
    Then Login to user account with user as "test@test.com" and pass as "test123"
    Then I click the Create an account
    Then I click on the github icon and navigate to home page
    And I goto Pricing page
    Then I verify the title text is "Get the complete developer platform."

  @regression @low @pricing
  Scenario: GitHub pricing - negative scenario
    Given Open the browser and start "github" application
    And Navigate to "signin" page
    Then Login to user account with user as "test@test.com" and pass as "test123"
    Then I click the Create an account
    Then I click on the github icon and navigate to home page
    And I goto Pricing page
    Then I verify the title text is "Get the complete developer platform. - fail"

