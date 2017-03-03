import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Random;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AdvanceSearch {
	DriverFactory driverFactory=new DriverFactory();
	Actions action =new Actions(driverFactory.getDriver());
	WebElement searchBox;
	WebDriverWait wait=new WebDriverWait(driverFactory.getDriver(), 5);
	
	String saltStr;
	
	//String result;
	public static String generateSessionKey(int length){
		String alphabet = 
		        new String("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"); //9
		int n = alphabet.length(); //10

		String result = new String(); 
		Random r = new Random(); //11

		for (int i=0; i<length; i++) //12
		    result = result + alphabet.charAt(r.nextInt(n)); //13

		return result;
		}
	
	@Given("^I click on advance search option$")
	public void i_click_on_advance_search_option() throws Throwable {
	
		searchBox=driverFactory.getDriver().findElement(By.xpath("//*[contains(@id, 'a11y-ember')]"));
		searchBox.click();
		
	    
	}

	@When("^I enter some random name in search box$")
	public void i_enter_some_random_name_in_search_box() throws Throwable {
		searchBox=driverFactory.getDriver().findElement(By.xpath("//*[contains(@id, 'a11y-ember')]"));
		searchBox.sendKeys(generateSessionKey(10));
		action.sendKeys(Keys.ENTER).perform();
		
		
	    
	}

	@Then("^Total number of results should be zero$")
	public void total_number_of_results_should_be_zero() throws Throwable {
		boolean totalResults= false;
 
		
        
      totalResults=  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(@id, 'ember')]/h1"))).isDisplayed();
        
       
       
       Assert.assertEquals(true, totalResults);
		
	  
	}

	
	
	
}
