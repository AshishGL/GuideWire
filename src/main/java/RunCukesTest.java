import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

plugin = {"pretty", "html:target"}
//features = "classpath:login.feature"
)
public class RunCukesTest{
}