$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TagsDemo.feature");
formatter.feature({
  "name": "Using of Tags in cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario1",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.TagsDemo.this_is_Scenario1()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario2",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.TagsDemo.this_is_Scenario2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SanityTest"
    },
    {
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario3",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.TagsDemo.this_is_Scenario3()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SamokeTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario4",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.TagsDemo.this_is_Scenario4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario5",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario5",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.TagsDemo.this_is_Scenario5()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario6",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario6",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefination.TagsDemo.this_is_Scenario6()"
});
formatter.result({
  "status": "passed"
});
});