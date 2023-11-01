Feature: Authentication
    Scenario Outline: Login to Parabank
        Given I am on the website
        When I add the net salary "<mensuel_net>" for statut "<statut>"
        Then the value for gross salary is "<mensuel_brut>", annual net salary is "<annuel_net>" and annual gross salary is "<annuel_brut>"

        Examples:
            |mensuel_net|mensuel_brut|annuel_brut|annuel_net|statut|
            |3000|3846|46152|35999|NonCadre|