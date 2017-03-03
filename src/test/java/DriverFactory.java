import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class DriverFactory {

    protected static WebDriver driver;

    
    public DriverFactory() {
        initialize();
    }

    @Before
    public void initialize() {
        if (driver == null)
            createNewDriverInstance();
    }

    private void createNewDriverInstance() {
        driver = new FirefoxDriver();
    }

    public WebDriver getDriver() {
        return driver;
    }

    @After
    public void destroyDriver() {
        driver.quit();
        driver = null;
    }
}