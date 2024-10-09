const { resolveRef } = require("ajv/dist/compile")

describe("Authentication", () => {

    it("BasicAuthentication",()=> {

        cy.request(
            {
                method : 'GET',
                url : "https://postman-echo.com/basic-auth",
                auth:{
                    user:'postman',
                    pass:'password'
                }
            })
        
        .then((response)=> {

            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })

    }) //it closes

    it("Digest Authentication",()=> {

        cy.request(
            {
                method : 'GET',
                url : "https://postman-echo.com/basic-auth",
                auth:{
                    user:'postman',
                    pass:'password',
                    method:'digest'
                }
            })
        
        .then((response)=> {

            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })

    })// it closes


    const token='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'  //we get this token from Github/settings/tokens

    it("BearerToken Authentication",()=> {

        cy.request(
            {
                method : 'GET',
                url : "https://api.github.com/users/repos",
                headers:{
                    Authorization:'Bearer '+token                
                }
            })
        
        .then((response)=> {

            expect(response.status).to.eq(200)
           // expect(response.body.authenticated).to.eq(true)
        })

    })// it closes


    it("APIKey Authentication",()=> {

        cy.request(
            {
                method : 'GET',
                url : "api.openweathermap.org/data/2.5/forecast/daily",
                qs:{
                    q:'Delhi',
                    appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c',    //this is API key and value

                }
               
            })
        
        .then((response)=> {

            expect(response.status).to.eq(200)
           // expect(response.body.authenticated).to.eq(true)
        })

    })// it closes


})