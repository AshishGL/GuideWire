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
  "duration": 7077960468,
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
  "duration": 2204274655,
  "status": "passed"
});
formatter.match({
  "location": "Language.i_Click_on_language_option()"
});
formatter.result({
  "duration": 1708143594,
  "status": "passed"
});
formatter.match({
  "location": "Language.print_all_the_languages_available()"
});
formatter.result({
  "duration": 18871,
  "status": "passed"
});
formatter.match({
  "location": "Language.check_wheter_English_language_is_present_in_list()"
});
formatter.result({
  "duration": 770333990,
  "status": "passed"
});
formatter.after({
  "duration": 1781131863,
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
  "duration": 4688758671,
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
  "duration": 2807155875,
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
  "duration": 1180457824,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_hit_Login_button()"
});
formatter.result({
  "duration": 610643929,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_on_home_page_of_my_account()"
});
formatter.result({
  "duration": 7831580533,
  "status": "passed"
});
formatter.after({
  "duration": 1626274955,
  "status": "passed"
});
formatter.before({
  "duration": 5352533193,
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
  "duration": 1953609471,
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
  "duration": 1179278586,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_hit_Login_button()"
});
formatter.result({
  "duration": 841336227,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_remain_on_login_page()"
});
formatter.result({
  "duration": 1499634343,
  "status": "passed"
});
formatter.after({
  "duration": 1564491433,
  "status": "passed"
});
});