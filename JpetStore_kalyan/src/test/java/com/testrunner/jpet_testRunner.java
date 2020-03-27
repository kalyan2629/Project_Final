
package com.testrunner;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//To run the cucumber feature file
@RunWith (Cucumber.class)
@CucumberOptions(
		
		features="src\\main\\resources\\feature\\testcase.feature",
				plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:extent_reports/extent_report.html"},
		glue= {"com.stepdefinition"},
		monochrome=true
		)

public class jpet_testRunner {
	@AfterClass
	public static void extendreport()
	{
		Reporter.loadXMLConfig("src\\test\\resources\\extent-config.xml");
	}

}
