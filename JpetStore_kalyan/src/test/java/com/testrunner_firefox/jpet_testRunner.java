
package com.testrunner_firefox;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//To run the cucumber feature file
@RunWith (Cucumber.class)
@CucumberOptions(
		
		features="src\\main\\resources\\feature\\testcase.feature",
				plugin = {"pretty", "html:firefoxreports/cucumber-html-report","json:firefoxreports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:firefoxreports/report.html"},
		glue= {"com.stepdefinitionfirefox"},
		monochrome=true
		)

public class jpet_testRunner {
	@AfterClass
	public static void extendreport()
	{
		Reporter.loadXMLConfig("src\\test\\resources\\extent-config.xml");
	}

}
