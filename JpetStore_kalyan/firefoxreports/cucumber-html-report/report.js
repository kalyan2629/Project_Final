$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Jpet Website",
  "description": "",
  "id": "jpet-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Jpetstore845014_feature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Registration to the application",
  "description": "",
  "id": "jpet-website;registration-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc01_register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter user ID and password",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Add the account information",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Save the account inforamtion",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Complete the registration",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_test.enter_user_ID_and_password()"
});
formatter.result({
  "duration": 89589851600,
  "error_message": "org.openqa.selenium.TimeoutException: connection refused\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6AVKPC6E\u0027, ip: \u0027192.168.43.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat baseclass.WrapperClass.launchBrowser(WrapperClass.java:32)\r\n\tat com.stepdefinitionfirefox.Registration_test.enter_user_ID_and_password(Registration_test.java:18)\r\n\tat ✽.Given Enter user ID and password(src/main/resources/feature/testcase.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Registration_test.add_the_account_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration_test.save_the_account_inforamtion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration_test.complete_the_registration()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Login to the Jpet store application",
  "description": "",
  "id": "jpet-website;login-to-the-jpet-store-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc02_Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the website in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginmain_test.the_user_launches_the_website_in_chrome_browser()"
});
formatter.result({
  "duration": 73045648000,
  "status": "passed"
});
formatter.match({
  "location": "Loginmain_test.opens_the_login_page()"
});
formatter.result({
  "duration": 3000786900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.pages.Login_main.homepage(Login_main.java:30)\r\n\tat com.stepdefinitionfirefox.Loginmain_test.opens_the_login_page(Loginmain_test.java:28)\r\n\tat ✽.When opens the login page(src/main/resources/feature/testcase.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginmain_test.enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginmain_test.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Search for the animal in the application",
  "description": "",
  "id": "jpet-website;search-for-the-animal-in-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc03_Searchmain"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the search bar in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "search for the animal you are looking for",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "enter the product id and name in the search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "Mainsearch_test.the_search_bar_in_the_login_page()"
});
formatter.result({
  "duration": 26606428900,
  "status": "passed"
});
formatter.match({
  "location": "Mainsearch_test.search_for_the_animal_you_are_looking_for()"
});
formatter.result({
  "duration": 327248100,
  "status": "passed"
});
formatter.match({
  "location": "Mainsearch_test.enter_the_product_id_and_name_in_the_search_bar()"
});
formatter.result({
  "duration": 8897869800,
  "status": "passed"
});
formatter.match({
  "location": "Mainsearch_test.click_on_the_Search_button()"
});
formatter.result({
  "duration": 14070233400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid login to the Jpet store application",
  "description": "",
  "id": "jpet-website;invalid-login-to-the-jpet-store-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tc04_invalidlogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": ":Open the jpet website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": ":opens the next login page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": ":enter invalid username and invalid password",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": ":click on login click button",
  "keyword": "And "
});
formatter.match({
  "location": "Invalidlogin_test.open_the_jpet_website()"
});
formatter.result({
  "duration": 19496513000,
  "status": "passed"
});
formatter.match({
  "location": "Invalidlogin_test.opens_the_next_login_page()"
});
formatter.result({
  "duration": 4301257000,
  "status": "passed"
});
formatter.match({
  "location": "Invalidlogin_test.enter_invalid_username_and_invalid_password()"
});
formatter.result({
  "duration": 154360500,
  "status": "passed"
});
formatter.match({
  "location": "Invalidlogin_test.click_on_login_click_button()"
});
formatter.result({
  "duration": 14081457100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Select the animal and add to cart",
  "description": "",
  "id": "jpet-website;select-the-animal-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@tc05_addtocart"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user launches the website in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "opens the signin page",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click on cat logo and select one of them",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "add product to the cart and proceed to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart_test.user_launches_the_website_in_browser()"
});
formatter.result({
  "duration": 18290615800,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.opens_the_signin_page()"
});
formatter.result({
  "duration": 9076656300,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.click_on_cat_logo_and_select_one_of_them()"
});
formatter.result({
  "duration": 111374300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003carea href\u003d\"Catalog.action?viewCategory\u003d\u0026categoryId\u003dCATS\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6AVKPC6E\u0027, ip: \u0027192.168.43.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200325213426, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 8804, moz:profile: C:\\Users\\SAIRAM\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: eb9553c0-842e-4ea3-9525-9d06b57d66e1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Addtocart.addto_cart(Addtocart.java:70)\r\n\tat com.stepdefinitionfirefox.Addtocart_test.click_on_cat_logo_and_select_one_of_them(Addtocart_test.java:39)\r\n\tat ✽.Then click on cat logo and select one of them(src/main/resources/feature/testcase.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Addtocart_test.add_product_to_the_cart_and_proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  formatter.result({
  "duration": 43997278700,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.opens_the_signin_page()"
});
formatter.result({
  "duration": 111769354500,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.click_on_cat_logo_and_select_one_of_them()"
});
formatter.result({
  "duration": 1086176100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003carea href\u003d\"Catalog.action?viewCategory\u003d\u0026categoryId\u003dCATS\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6AVKPC6E\u0027, ip: \u0027192.168.43.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200325213426, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 25796, moz:profile: C:\\Users\\SAIRAM\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e9a23008-e3a1-421f-bc17-ca54eaa8d67c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Addtocart.addto_cart(Addtocart.java:70)\r\n\tat com.stepdefinitionfirefox.Addtocart_test.click_on_cat_logo_and_select_one_of_them(Addtocart_test.java:39)\r\n\tat ✽.Then click on cat logo and select one of them(src/main/resources/feature/testcase.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Addtocart_test.add_product_to_the_cart_and_proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
});