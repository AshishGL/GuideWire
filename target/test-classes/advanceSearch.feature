Feature: As a user I want to test the advance search functionality
@search
Scenario: Advance Search with random name
Given Navigate to linkedin website
And I enter username "coupondhaba@gmail.com" and password "Test@1234"
And I hit Login button
 And I should be on home page of my account
When I enter some random name in search box
Then Total number of results should be zero
