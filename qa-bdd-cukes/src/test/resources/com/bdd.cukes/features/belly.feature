Feature: Belly

  Scenario Outline: a few cukes
    Given I have <cukes> cukes in my belly
    When I wait <waitingTime> hour
    Then my belly should <expectedSound>
    Examples:
      | cukes | waitingTime | expectedSound |
      | 80    | 1           | growl         |
