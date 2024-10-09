describe("Testing self skill", ()=>{

it("My First API Test",()=>{
    cy.request({
        method:"GET",
        url:"https://reqres.in/api/users?page=2"
    })
    .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.data[1].id).to.eq(1)
        expect(response.body.data[2].first_name).to.eq("Lindsay")
     }) //end then



}) //end it
}) //end describe
