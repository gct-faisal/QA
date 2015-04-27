$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/SodaMachine.feature");
formatter.feature({
  "line": 1,
  "name": "Soda machine",
  "description": "",
  "id": "soda-machine",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Get soda",
  "description": "",
  "id": "soda-machine;get-soda",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have $2 in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I wave my magic ring at the machine",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should get a soda",
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