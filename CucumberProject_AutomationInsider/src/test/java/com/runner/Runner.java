package com.runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features",
				glue= {"com.stepDefination"},
				monochrome=true,
				plugin= {"html:Reports\\HTMLReports", "json:Reports\\JsonReports\\cucumber.json",
						"junit:Reports\\JunitReports\\cucumber.xml"},
				dryRun=false,
				strict=false,
				tags= {"@FunctionalTest"}
				)



public class Runner {

}
