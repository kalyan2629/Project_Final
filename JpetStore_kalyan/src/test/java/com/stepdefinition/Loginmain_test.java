package com.stepdefinition;

import com.pages.Login_main;

import baseclass.WrapperClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import excelutility.Read_excelsheet;

public class Loginmain_test extends WrapperClass {

	Login_main obj=new Login_main(driver);
	Read_excelsheet read=new Read_excelsheet();
	@Given("^the user launches the website in chrome browser$")
	public void the_user_launches_the_website_in_chrome_browser() throws Throwable 
	{
		// Write code here that turns the phrase above into concrete actions
		//throw new PendingException();
		launchBrowser("chrome");
		getUrl();
	}

	@When("^opens the login page$")
	public void opens_the_login_page() throws Throwable
	{
		obj.homepage();
	}

	@Then("^enter username and password$")
	public void enter_username_and_password() throws Throwable
	{
		// Write code here that turns the phrase above into concrete actions
		// throw new PendingException();
		for(int i=0;i<=1;i++)
		{
			obj.Jpet_username(i);
			obj.Jpet_password(i);
			obj.Login_click();
			Thread.sleep(6000);
		}
		//read.screenshot();
		//obj.Jpet_username();
		//obj.Jpet_password();
		//obj.Login_click();
	}

	@And("^click on login button$")
	public void click_on_login_button() throws Throwable
	{
		// Write code here that turns the phrase above into concrete actions
		//throw new PendingException();
		obj.close();
	}


}
