@common
Feature: As a user I want to test the login functionality of Linkedin

@validLogin
Scenario: Login using valid credentails
Given Navigate to linkedin website
When I enter username "coupondhaba@gmail.com" and password "Test@1234"
And I hit Login button
Then I should be on home page of my account 

@invalidLogin
Scenario: Login using Invalid credentials
Given Navigate to linkedin website
When I enter username "coupondhaba@gmail.com" and password "Test@12345"
And I hit Login button
Then I should remain on login page 
 
