// https://docs.cypress.io/api/introduction/api.html

// ! cypress will fail to load when end to end tests are run on Circle CI
// ! need to figure out a solution to run these types of tests

const cy = require('cypress')

describe('Login Screen Launches', () => {
  it('Visits The Root Url', () => {
    cy.visit('/')
    cy.contains('body', 'Sign In with Google')
  })
})