package com.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Invalid_login {
	WebDriver driver;

	By signin =By.xpath("/html/body/div[1]/div[2]/div/a[2]");
	By invalidid=By.name("username");
	By invalidpwd=By.name("password");
	By login=By.name("signon");
	By display=By.xpath("/html/body/div[2]/ul/li");

	//To collect the driver object
	public Invalid_login(WebDriver driver)
	{
		this.driver=driver;
	}

	public void signinclick() throws InterruptedException
	{
		//Clicks the signin button 
		driver.findElement(signin).click();
		Thread.sleep(2000);
	}

	public void user_name()
	{
		//Enters the invalid username 
		driver.findElement(invalidid).clear();
		driver.findElement(invalidid).sendKeys("kalyan");

	}

	public void pass_word()
	{
		//Enters the invalid password 
		driver.findElement(invalidpwd).clear();
		driver.findElement(invalidpwd).sendKeys("kalyan12");
	}
	public void signinbutton() throws InterruptedException
	{
		//Clicks on login button
		driver.findElement(login).click();
		Thread.sleep(3000);
		String s1=driver.findElement(display).getText();
		System.out.println(s1);
		Thread.sleep(5000);
	}

	public void closebrowser()
	{
		//Closes the browser
		driver.close();
	}
}
