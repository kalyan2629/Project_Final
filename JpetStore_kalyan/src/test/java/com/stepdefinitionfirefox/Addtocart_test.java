package com.stepdefinitionfirefox;

import com.pages.Addtocart;

import baseclass.WrapperClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Addtocart_test  extends WrapperClass{
Addtocart cart=new Addtocart(driver);
	
	@Given("^user launches the website in browser$")
	public void user_launches_the_website_in_browser() throws Throwable 
	{
		// Write code here that turns the phrase above into concrete actions
		   // throw new PendingException();
	launchBrowser("firefox");
	getUrl();
	}
	@When("^opens the signin page$")
	public void opens_the_signin_page() throws Throwable
	{
		// Write code here that turns the phrase above into concrete actions
		   // throw new PendingException();
		cart.signinclick();
		cart.Jpet_username();
		cart.Jpet_password();
		cart.Login_click();
		
	}
     
	@Then("^click on cat logo and select one of them$")
     public void click_on_cat_logo_and_select_one_of_them() throws Throwable
     {
		// Write code here that turns the phrase above into concrete actions
		   // throw new PendingException();
        cart.addto_cart();	 
     }
    
     @And("^add product to the cart and proceed to checkout$")
     public void add_product_to_the_cart_and_proceed_to_checkout() throws Throwable
     {
    	// Write code here that turns the phrase above into concrete actions
  	   // throw new PendingException();
    	cart.confirmation();
    	screenShot("src\\test\\resources\\Screenshots\\img.png");
        cart.closebrowser();
     }
}
