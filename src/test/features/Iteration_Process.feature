@Iteration_Process
Feature: Simulating product selection, adding items to the cart,
proceeding to checkout, and completing an order.

Background:

    Given User navigates to the application 

    Scenario Outline: Login as standard user with valid login credentails should be successful 
    ##Step 1 : Iteration Process as standard_user and problem_user
    And enter username "<username>"
    And enter password "<password>"
    Then click login button
    And verify the standard_user is successfully logged in 
    # And verify the problem_user is successful logged in 

    ##Step 2: Adding items to the cart
    Then navigate to the product listing page 
    And randomly select theree items 
    And add items to the cart 
    # Then verify correct number of items  

    ##Step 3: Proceeding to checkout 
    And navigate to the checkout page with items in the cart
    And use random but valid test data

    ##Step 4: Completing the order
    Then Verify that the page displays the expected confirmation message.


     Examples: 
    | username | password |
    | standard_user | secret_sauce|
    | problem_user | secret_sauce|