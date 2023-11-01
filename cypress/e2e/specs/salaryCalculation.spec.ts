import { Given,When } from "@badeball/cypress-cucumber-preprocessor";
import salaryCalculationPage from "../pages/salaryCalculation";


  Given("I am on the website", function () {

    cy.visit("/")
    salaryCalculationPage.closeAcceptPopUp()

  });


  When("I add the net salary {string} for statut {string}", function (mensuelNet:string, statut:string) {

    salaryCalculationPage.addMensuelNet(mensuelNet)

  });