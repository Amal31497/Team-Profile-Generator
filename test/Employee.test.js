const { it, expect } = require('@jest/globals')
const { describe } = require('yargs')
const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getName', () => {
        it('Should return employees name', () => {
            const name = 'Captain America'
            const result = new Employee().getName(name)

            expect(result).toEqual(name)
        })
    })
})