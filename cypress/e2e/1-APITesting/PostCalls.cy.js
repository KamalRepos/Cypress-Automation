describe("api testing", ()=> {

    it.only("Approach1 - Hard coded json object", ()=> {

        const requestBody={
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        cy.request(
            {
                method: "POST",
                url:"https://reqres.in/api/register",
                body:requestBody
            }

        )

        .then((response)=> {

            expect(response.status).to.eq(200)
            //expect(response.body.email).to.eq("eve.holt@reqres.in")    //This commented because we dont get email id in the response for this example test
        })

    })


        it.only("Approach2 - Dynamically generating json object", ()=> {

            const requestBody={
                //email: Math.random().toString(5).substring(2)+"gmail.com",   //this example is not creating any dynamic values so commented and provided hardcoded values
                email:"eve.holt@reqres.in",
                password: "pistol"
            }
    
            cy.request(
                {
                    method: "POST",
                    url:"https://reqres.in/api/register",
                    body:requestBody
                }
    
            )
    
            .then((response)=> {
    
                expect(response.status).to.eq(200)
                //expect(response.body.email).to.eq(requestBody.email)

   
                    

        })
})

it.only("Approach3 - using Fixture", ()=> {

    cy.fixture('UserEmail').then((myfixturedata)=>{           //Fetching the fixture block and storing in variable - myfixture data
      const requestBody=myfixturedata;

    cy.request(
        {
            method: "POST",
            url:"https://reqres.in/api/register",
            body:requestBody
        }

    )

    .then((response)=> {

        expect(response.status).to.eq(200)
        expect(response.body.id).equal(4)
        //expect(response.body.email).to.eq(requestBody.email)


            //verify the property and value
                expect(response.body).has.property('id')
                expect(response.body).has.property('token')
            
    })
})
})




    })