/*
POST   https://gorest.co.in/public/v2/users
PUT    https://gorest.co.in/public/v2/users/${userId}
DELETE https://gorest.co.in/public/v2/users/${userId}

*/

describe("Gorest API Chaining",()=>{

    const auth_token = 'Bearer  b5f146dc5bf6f7d436abd50e046838d216196db4492187e74b95f9178f4d7e10'

    it("creating, update, delete user in Gorest API", ()=>{

        cy.request({

            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            body:{

                name:'Kamal',
                gender:"Male",
                email:Math.random().toString(5).substring(2)+"@gmail.com",
                status:'active'                
            },
            headers:{
                Authorization: auth_token
            }

        }) //cy

        .then((response)=>{

            expect(response.status).to.be(201)
            const userID = response.body.id

           //updating the username
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    name:'Lamak'    //changing the name of the person
                },
                headers:{
                    Authorization: auth_token
                }
            })

            .then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('Lamak')

                //deleting the user
                cy.request({

                    method:'DELETE',
                    url:`https://gorest.co.in/public/v2/users/${userId}`,
                    headers:{
                        Authorization: auth_token
                    }

                })//cy

                .then((response)=>{
                    expect(response.status).to.eq(204)
                })


            }) //then

        }) //then



    }) // it



}) // describe