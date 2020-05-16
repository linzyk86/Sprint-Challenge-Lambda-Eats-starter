describe("Test",()=>{
    it("Should return true",()=>{
        expect(true).to.equal(true);
    });
});


describe("Test",()=>{
    it("Should add text",()=>{
        cy.visit("https://localhost/3001");
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

