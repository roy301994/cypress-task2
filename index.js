// describe('kumpulan test case', function () {
//     it('tc-1', function(){
//         cy.visit('https://bukalapak.com')
//         cy.contains('Daftar').click()
//     })
    
//     Cypress.on('uncaught:exception', (err, runnable)=>{
//         return false
//     })
// })

//dropdown  itu pake select(),kalau  checkbox sama selected item pake check() dan tak pake paramter kalau select untuk dropdown pake parameter didalamnya select('audi')
//contain vs have.text kalau have.text wajib sesuai dengan stringnya sedangkan have.text salah satu string saja sudah cukup

describe('kumpulan test case', function () {
    it('tc-1', function(){
        cy.visit(' https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('roy')
        cy.get('#et_pb_contact_email_0').type('roynaldo@gmail.com')
        cy.get('.et_pb_contact_submit').click()
        cy.get('[value="male"]').check()
        cy.get('[value="Bike"]').check()
        cy.get('select').select('Audi')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('contain','Button success')
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})