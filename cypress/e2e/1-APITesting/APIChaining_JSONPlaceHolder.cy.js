
describe("API Chaining in Cypress",()=>{

    it("Should make API requests and chain them together",()=>{

        cy.request({

            method: 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts'
            
        }) //cy

    .then((response)=>{

        expect(response.status).to.eq(200)
        const postid = response.body[0].id
        return postid

    }) //then

    .then((postid)=>{

        cy.request({

            method:'GET',
            url:`https://jsonplaceholder.typicode.com/comments?postid=${postid}`

        }) //cy

        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
        }) //then

    })  //then



    }) //it

}) // describe 