$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("belly.feature");
formatter.feature({
  "line": 1,
  "name": "Belly",
  "description": "",
  "id": "belly",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I have \u003ccukes\u003e cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \u003cwaitingTime\u003e hour",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "my belly should \u003cexpectedSound\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "belly;a-few-cukes;",
  "rows": [
    {
      "cells": [
        "cukes",
        "waitingTime",
        "expectedSound"
      ],
      "line": 8,
      "id": "belly;a-few-cukes;;1"
    },
    {
      "cells": [
        "80",
        "1",
        "growl"
      ],
      "line": 9,
      "id": "belly;a-few-cukes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I have 80 cukes in my belly",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait 1 hour",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "my belly should growl",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checkout a banana # checkout.feature: 2",
  "description": "",
  "id": "checkout;checkout-a-banana-#-checkout.feature:-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the price of a \"\u003cfruit\u003e\" is \u003ccost\u003ec",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout \u003cfruit\u003e \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be \u003ccost\u003ec",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "checkout;checkout-a-banana-#-checkout.feature:-2;",
  "rows": [
    {
      "cells": [
        "fruit",
        "cost"
      ],
      "line": 8,
      "id": "checkout;checkout-a-banana-#-checkout.feature:-2;;1"
    },
    {
      "cells": [
        "banana",
        "40"
      ],
      "line": 9,
      "id": "checkout;checkout-a-banana-#-checkout.feature:-2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Checkout a banana # checkout.feature: 2",
  "description": "",
  "id": "checkout;checkout-a-banana-#-checkout.feature:-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40c",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout banana \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be 40c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});