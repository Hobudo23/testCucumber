Feature: All fields in login page are required

  Scenario Outline: User click "Login" button, when fileds are not fieled

    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then User should see “Epic sadface: Username is required” error message
