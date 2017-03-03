import java.util.List;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.google.common.base.Verify;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Language {
	
	DriverFactory driverFactory=new DriverFactory();
    String url="http://www.linkedin.com";
    List<WebElement> languages;
	
	@Given("^I open \"(.*?)\" browser$")
	public void i_open_browser(String browser) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		driverFactory.getDriver();
		
		
	   
	}

	@Given("^Navigate to linkedin website$")
	public void navigate_to_linkedin_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driverFactory.getDriver().get(url);
		
	    
	}

	@When("^I Click on language option$")
	public void i_Click_on_language_option() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
		WebElement w1=driverFactory.getDriver().findElement(By.className("lang-selector-state-label"));
		w1.click();
		
		WebElement ulList=driverFactory.getDriver().findElement(By.className("lang-selector"));
		
		languages=ulList.findElements(By.tagName("li"));
		
		
		System.out.println(languages.size());
		
		for(WebElement w:languages)
		{
			System.out.println(w.getText());
			
		}

	}
	
	
		

	@When("^print all the languages available$")
	public void print_all_the_languages_available() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		
	}

	
	@Then("^check wheter English language is present in list$")
	public void check_wheter_English_language_is_present_in_list() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		
		System.out.println(languages.size());
		boolean flag=false;
		for(int i=0;i<languages.size();i++)
		{
			
			System.out.println(languages.get(i).getText());
			
			if(languages.get(i).getText().equalsIgnoreCase("English"))
			{
				flag=true;	
			}
			
		}
		
		Assert.assertEquals(true, flag);
		
	}   
	}
	

