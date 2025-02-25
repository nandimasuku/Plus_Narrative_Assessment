@Login
Feature: Login with various users roles

Background:

    Given User navigates to the application 

Scenario Outline: Login as standard user with valid login credentails should be successful 
    ##Step 1 : Login as standard_user
    And enter username "<username>"
    And enter password "<password>"
    Then click login button
    And verify the standard_user is successfully logged in 
    And verify the problem_user is successful logged in 
    And verify blocked user validation message 

    Examples: 
    | username | password |
    | standard_user | secret_sauce|
    | problem_user | secret_sauce|
    | locked_out_user | secret_sauce|



    
