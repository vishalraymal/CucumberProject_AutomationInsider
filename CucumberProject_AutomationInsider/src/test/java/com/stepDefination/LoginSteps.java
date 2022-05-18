package com.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {
	
	WebDriver driver;
	
	@Given("user is on loginPage")
	public void user_is_on_login_page() {
		System.out.println("STEP 1 : Navigation to login Page");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
		
	}

	@When("user enters (.*) and (.*)$")
	public void user_enters_username_and_password(String uname, String pswd) {
		System.out.println("STEP 2 : Enter username and password");
	    driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(uname);
	    driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(pswd);
	}

	@And("click on login button")
	public void click_on_login_button() {
		System.out.println("STEP 3 : User will click on Submit button");
	    driver.findElement(By.xpath("//input[@name='Submit']")).click();		
	}

	@Then("user should land on home page")
	public void user_should_land_on_home_page() {
		System.out.println("STEP 4(Expected Result) : User will click on Submit button");
		System.out.println(driver.getTitle());
		driver.quit();
	}



}
