Feature: Checkout

  Scenario Outline: Checkout a banana # checkout.feature: 2
    Given the price of a "<fruit>" is <cost>c
    When I checkout <fruit> "banana"
    Then the total price should be <cost>c
    Examples:
      | fruit | cost |
      | banana| 40   |