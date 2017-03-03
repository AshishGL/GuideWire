$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("language.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to check if English language is present in list",
  "description": "",
  "id": "as-a-user-i-want-to-check-if-english-language-is-present-in-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@common"
    }
  ]
});
formatter.before({
  "duration": 6945164447,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Check for English language for linkedin",
  "description": "",
  "id": "as-a-user-i-want-to-check-if-english-language-is-present-in-list;check-for-english-language-for-linkedin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@language"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to linkedin website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on language option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "print all the languages available",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check wheter English language is present in list",
  "keyword": "Then "
});
formatter.match({
  "location": "Language.navigate_to_linkedin_website()"
});
formatter.result({
  "duration": 2590415464,
  "status": "passed"
});
formatter.match({
  "location": "Language.i_Click_on_language_option()"
});
formatter.result({
  "duration": 1885939691,
  "status": "passed"
});
formatter.match({
  "location": "Language.print_all_the_languages_available()"
});
formatter.result({
  "duration": 22182,
  "status": "passed"
});
formatter.match({
  "location": "Language.check_wheter_English_language_is_present_in_list()"
});
formatter.result({
  "duration": 780869994,
  "status": "passed"
});
formatter.after({
  "duration": 1956681052,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to test the login functionality of Linkedin",
  "description": "",
  "id": "as-a-user-i-want-to-test-the-login-functionality-of-linkedin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@common"
    }
  ]
});
formatter.before({
  "duration": 5195151618,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login using valid credentails",
  "description": "",
  "id": "as-a-user-i-want-to-test-the-login-functionality-of-linkedin;login-using-valid-credentails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@validLogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to linkedin website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"coupondhaba@gmail.com\" and password \"Test@1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I hit Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on home page of my account",
  "keyword": "Then "
});
formatter.match({
  "location": "Language.navigate_to_linkedin_website()"
});
formatter.result({
  "duration": 2279251273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coupondhaba@gmail.com",
      "offset": 18
    },
    {
      "val": "Test@1234",
      "offset": 55
    }
  ],
  "location": "Login.i_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1178805500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_hit_Login_button()"
});
formatter.result({
  "duration": 11408987964,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_on_home_page_of_my_account()"
});
formatter.result({
  "duration": 166232150,
  "status": "passed"
});
formatter.after({
  "duration": 1647436680,
  "status": "passed"
});
formatter.before({
  "duration": 5547493457,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login using Invalid credentials",
  "description": "",
  "id": "as-a-user-i-want-to-test-the-login-functionality-of-linkedin;login-using-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Navigate to linkedin website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"coupondhaba@gmail.com\" and password \"Test@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I hit Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should remain on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Language.navigate_to_linkedin_website()"
});
formatter.result({
  "duration": 2433199750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coupondhaba@gmail.com",
      "offset": 18
    },
    {
      "val": "Test@12345",
      "offset": 55
    }
  ],
  "location": "Login.i_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1180555156,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_hit_Login_button()"
});
formatter.result({
  "duration": 610681009,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_remain_on_login_page()"
});
formatter.result({
  "duration": 2507204706,
  "status": "passed"
});
formatter.after({
  "duration": 1858579850,
  "status": "passed"
});
formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Feature",
  "description": "",
  "id": "test-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5273265035,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "India test",
  "description": "",
  "id": "test-feature;india-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Foo step",
  "keyword": "Given "
});
formatter.match({
  "location": "OtherClassSteps.fooStep()"
});
formatter.result({
  "duration": 2578627721,
  "status": "passed"
});
formatter.after({
  "duration": 1458179598,
  "status": "passed"
});
formatter.uri("test2.feature");
formatter.feature({
  "line": 1,
  "name": "Test Feature-2",
  "description": "",
  "id": "test-feature-2",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5686843486,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "India test",
  "description": "",
  "id": "test-feature-2;india-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@second"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "second step",
  "keyword": "Given "
});
formatter.match({
  "location": "SecondStep.second_step()"
});
formatter.result({
  "duration": 12059675329,
  "status": "passed"
});
formatter.after({
  "duration": 2852145356,
  "status": "passed"
});
});