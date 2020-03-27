package com.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main_search {

	WebDriver driver;

	By searchbar=By.xpath("//*[@id=\"SearchContent\"]/form/input[1]");
	By senddata=By.xpath("//*[@id=\"SearchContent\"]/form/input[1]");
	By sclick=By.xpath("//*[@id=\"SearchContent\"]/form/input[2]");
	By animalid=By.xpath("//*[@id=\"Catalog\"]/table/tbody/tr[2]/td[2]/b/a/font");

	public Main_search(WebDriver driver)
	{
		this.driver=driver;
	}
	public void jpet_search()
	{
		//Clicks on search bar and insert the given data
		driver.findElement(searchbar).click();
		driver.findElement(senddata).sendKeys("bulldog");
		//driver.findElement(sclick).click();			
	}

	public void senddata() throws InterruptedException 
	{
		//Clicks on the selected products
		Thread.sleep(3000);
		driver.findElement(sclick).click();		
		driver.findElement(animalid).click();
	}

	public void sbutton() throws InterruptedException 
	{
		//Closes the browser
		Thread.sleep(5000);
		driver.close();
		System.out.println("search completed");
	}

}
