//Pre requisite : generate auth code
//https://github.com/login/oauth/authorize/{client_id}
//https://github.com/login/oauth/authorize/client_id=ded8c34b1cbcdcaf7149

/*
1) Get the Outh2 acess token
 POST :  https://github.com/login/oauth/access_token
 Query Params :  
        client_id
        Client_secret
        Code

2)  send GET request by using access token 
    https://api.github.com/user/repo
    Auth : accessToken

*/

describe("OAuth2", ()=> {

    let accessToken=""

    it("Get Access Token", ()=> {

        cy.request({

            method : "POST",
            url:' https://github.com/login/oauth/access_token',
            qs:{

                client_id:'ded8c34b1cbcdcaf7149',
                client_secret:'1c10f2559255c03d07bf97c8567eae2e913cccda',
                code:'5a8a3fd47f484494fe6d'
               }
        })// cy close

        .then((response)=>{
            //access token is displayed as text format, so use split to get only the access code.
            const params = response.body.split('&')
            accessToken=params[0].split('=')[1]

        }) //close then

    }) //it close


    it("OAuth2 request",()=>{
        cy.request({
            method: 'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Autherization:'Bearer '+accessToken
            }
        }) //cy close

    .then((response)=>{

            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(201070920)

    }) // close then

    }) // it close



}) // Describe Close