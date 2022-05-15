$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginFeature.feature");
formatter.feature({
  "name": "Test the login functionality of OrangeHRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on loginPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefination.LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefination.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefination.LoginSteps.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
});