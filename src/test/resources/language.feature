@common
Feature: As a user I want to check if English language is present in list

@language
Scenario: Check for English language for linkedin
Given Navigate to linkedin website
When I Click on language option
And print all the languages available
Then check wheter English language is present in list
