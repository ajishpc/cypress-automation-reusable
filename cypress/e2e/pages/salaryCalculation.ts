///<reference types="cypress"/>

class SalaryCalculation{

    elements ={

        acceptPopUpButton:()=> cy.get('div.sd-cmp-3V2Vm > button:nth-of-type(2) > span'),
        blockButton:()=>cy.get('div#nadzCloseDesktop'),
        mensuelNetTextbox:()=>cy.get('#net-mensuel'),
        statutSalaireNonCadreRadio:()=>cy.get('#salarienoncadre'),
        statutSalaireCadreRadio:()=>cy.get('#salarienoncadre'),
        statutFonctionPubliqueRadio:()=>cy.get('#fonctionpublique'),
        statutProfessionLiberaleRadio:()=>cy.get('#professionliberale'),
        statutPortageSalarialRadio:()=>cy.get('#portageSalarial'),
    }

    closeAcceptPopUp(){
        this.elements.acceptPopUpButton().click()
        this.elements.blockButton().click()

    }
    addMensuelNet(mensuelNet:string){
        this.elements.mensuelNetTextbox().type(mensuelNet)
    }
    clickStatut(statut:string){
        if
    }

}

export default new SalaryCalculation();