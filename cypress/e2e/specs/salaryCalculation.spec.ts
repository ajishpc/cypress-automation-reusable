import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import salaryCalculationPage from "../pages/salaryCalculation";


  Given("I am on the website", function () {

    cy.visit("/")
    salaryCalculationPage.closeAcceptPopUp()

  });

  When("I add the net salary {string} for statut {string}", function (mensuelNet:string, statut:string) {

    salaryCalculationPage.addMensuelNet(mensuelNet)
    salaryCalculationPage.clickStatut(statut)

  });

  Then("the value for gross salary is {string}, annual net salary is {string} and annual gross salary is {string}", function (string, string2, string3) {

    return "pending";

  });