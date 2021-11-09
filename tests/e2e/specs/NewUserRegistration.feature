Feature: Register New User
    Background: 
    Given user on the homepage
  
    Scenario: Register a New User 
        When user fills "userName textbox" with "Mark Daussmann"
        And user fills "password textbox" with "Mark231Daussmann"  
        And user clicks "Register User"
        Then a dialogue window shows up that says "Congrats! Mark Daussmann has been registered with password Mark231Daussmann"
# a dialogue window shows up that says "Congrats! Mark Daussmann has been registered with password (Mark231Daussmann)"