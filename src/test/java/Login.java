import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login {
	
	DriverFactory driverFactory=new DriverFactory();
	WebDriverWait wait=new WebDriverWait(driverFactory.getDriver(), 5);

	@When("^I enter username \"(.*?)\" and password \"(.*?)\"$")
	public void i_enter_username_and_password(String username, String password) throws Throwable {
	    
		driverFactory.getDriver().findElement(By.cssSelector("#login-email")).sendKeys(username);
		driverFactory.getDriver().findElement(By.cssSelector("#login-password")).sendKeys(password);
	    
	}

	@When("^I hit Login button$")
	public void i_hit_Login_button() throws Throwable {
		driverFactory.getDriver().findElement(By.cssSelector("#login-submit")).click();
	   
	   
	}

	@Then("^I should be on home page of my account$")
	public void i_should_be_on_home_page_of_my_account() throws Throwable {
		
		boolean flag=driverFactory.getDriver().findElement(By.cssSelector("#feed-tab-icon")).isDisplayed();
		
		if(flag==false)
		{
			System.out.println("Invalid user credentials");
			
		}
		Assert.assertEquals(true,flag);
		
		
	    
	}
	
	@Then("^I should remain on login page$")
	public void i_should_remain_on_login_page() throws Throwable {
	   
	
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#btn-primary")));
		
    boolean flag=driverFactory.getDriver().findElement(By.cssSelector("#btn-primary")).isDisplayed();
		
		
		Assert.assertEquals(true,flag);
		
		
	    
	}
	}
	
	

