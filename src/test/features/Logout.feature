@LogOut
Feature: Logout with various users roles

Background:

    Given User navigates to the application 

 Scenario Outline: User logout in the application
    ##Step 1 : Login as standard_user and problem_user
    And enter username "<username>"
    And enter password "<password>"
    Then click login button
    And verify the standard_user is successfully logged in 
    # And verify the problem_user is successful logged in 

    ##Step 2: Logout of the application 
    Then simulate the logout action by clicking the logout button.
    And verify that the user is logged out and redirected to the login page.
    
 Examples: 
    | username | password |
    | standard_user | secret_sauce|
    | problem_user | secret_sauce|
    | locked_out_user | secret_sauce|


    
