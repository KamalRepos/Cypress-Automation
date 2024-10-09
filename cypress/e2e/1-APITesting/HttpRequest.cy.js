describe("HTTP Requests", () =>{

    it("GET Call", ()=> {

        cy.request('GET','https://reqres.in/api/Users?page=2')
        .its('status')
        .should('equal', 200);

    })

    it("Post Call", ()=>{

        cy.request( {

            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {     

                name: "morpheus",
                job: "leader"

            }
            })

            .its('status')
            .should('equal', 201)


        })

    it("PUT call", ()=> {

        cy.request({

            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                name: "morpheus",
                job: "zion resident"

            }
        })

        .its('status')
        .should('equal',200)


        })


        it("DELETE CALL",()=> {

            cy.request({

                method: "DELETE",
                url: "https://reqres.in/api/users/2"          
            })

            .its("status")
            .should("equal",204)

        })


    })
