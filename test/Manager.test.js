const Manager = require('../lib/Manager')

describe('Manager', () => {
    /*  Name tests  */
    describe('getName', () => {
        it('Should return manager\'s name', () => {
            const name = 'Captain America'
            const result = new Manager(name,'#','#','#').getName()

            expect(result).toEqual(name)
            
        })
        it('Should return manager\'s name as a STRING only', () => {
            const name = 'Captain America'
            const result = new Manager(name,'#','#','#').getName()

        expect(typeof(result)).toBe('string')
        })
    })
    /*  ID tests  */
    describe('getId', () => {
        it('Should return manager\'s ID', () => {
            const id = 5
            const result = new Manager('#', id, '#','#').getId()

            expect(result).toEqual(id)
        })
    })

    describe('getId', () => {
        it('Should return manager\'s ID as a STRING only', () => {
            const id = 5
            const result = new Manager('#', id, '#','#').getId()

            expect(typeof(result)).toBe('number')
        })
    })

    /*  Email tests  */

    describe('getEmail', () => {
        it('Should return manager\'s Email', () => {
            const email = 'amal@gmail.com'
            const result = new Manager('#', '#', email,'#').getEmail()

            expect(result).toEqual(email)
        })
    })

    describe('getRole', () => {
        it('Should return manager\'s role', () => {
            const role = 'Manager'
            const result = new Manager('#', '#', '#','#').getRole()

            expect(result).toEqual(role)
        })
    })

    describe('getOfficeNumber', () => {
        it('Should return manager\'s office number', () => {
            const office = '123'
            const result = new Manager('#','#','#',office).getOfficeNumber()

            expect(result).toEqual(office)
        })
    })
})