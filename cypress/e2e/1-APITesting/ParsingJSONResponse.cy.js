describe('Parsing JSON Response', () => {

    it("Parsing simple JSON Response", ()=>{

        cy.request
        ({
            method:"GET",
            url:"https://fakestoreapi.com/products"

        })

        .then((response) =>{

            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            expect(response.body[0].price).to.eq(109.95)
            expect(response.body[0].rating.rate).to.equal(3.9)


            expect(response.body[19].id).to.eq(20)
            expect(response.body[19].title).to.equal('DANVOUY Womens T Shirt Casual Cotton Short')
            expect(response.body[19].price).to.eq(12.99)
            expect(response.body[19].rating.rate).to.equal(3.6)


        })

    })


        it("Parsing complex JSON Response", ()=>{

            let totalprice=0;

            cy.request
            ({
                method:"GET",
                url:"https://fakestoreapi.com/products",
                qs:{limit:5}    
            })
    
            .then((response) =>{
    
               expect(response.status).to.equal(200)

               response.body.forEach(element => {
                totalprice = totalprice+element.price;
               })
                
               expect(totalprice).to.equal(899.23)    
    
            })
    
        })

})