package com.bdd.gct;

/**
 * Created by fhumayun on 4/13/15.
 */

import cucumber.api.junit.*;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
        dryRun = false,
        strict = true,
        features = "src/test/java/features/",
        //glue = "com.sample",
        tags = { "~@wip", "@executeThis","@pending","@passing","@failing","@to-implement" },
        monochrome = false,
        format = {
                "pretty",
                "html:target/cucumber",
                "json:target_json/cucumber.json",
                "junit:target_junit/cucumber.xml"
        }
)

public class CukesRunner {
}
