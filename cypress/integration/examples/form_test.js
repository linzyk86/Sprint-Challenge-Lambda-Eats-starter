describe("Test",()=>{
    it("Should return true",()=>{
        expect(true).to.equal(true);
    });
});


describe("Test",()=>{
    it("Should add text",()=>{
        cy.visit("http://localhost:3001/Pizza");
        cy.get(`input[name='name']`)
        .type('Lindsay')
        .should("have.value", "Lindsay")
    });
});

describe("Test",()=>{
    it("Should select",()=>{
        cy.get(`[type="checkbox"]`).check();
    });
});

describe('Submit',()=>{
    it("Should submit", ()=>{
        cy.get(`form`).submit()
    })
})

