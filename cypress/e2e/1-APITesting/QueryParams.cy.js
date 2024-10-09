describe("API testing", ()=>{


    it("passing query parameters", () => {

        cy.request ({
            method: 'GET', 
            url:'https://reqres.in/api/users',
            qs: { page: 2 }

        }) //cy.request

    .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.status).equal(200)
        expect(response.body.page).to.eq(2)
        expect(response.body.data).has.length(6)

        expect(response.body.data[0]).have.property('id',7)
        expect(response.body.data[0]).has.property('first_name','Michael')


    }) //then close
    }) //it close

})  //Describe close



