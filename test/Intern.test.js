const Intern = require('../lib/Intern')

describe('Intern', () => {
    /*  Name tests  */
    describe('getName', () => {
        it('Should return intern\'s name', () => {
            const name = 'Captain America'
            const result = new Intern(name,'#','#','#').getName()

            expect(result).toEqual(name)
            
        })
        it('Should return intern\'s name as a STRING only', () => {
            const name = 'Captain America'
            const result = new Intern(name,'#','#','#').getName()

        expect(typeof(result)).toBe('string')
        })
    })
    /*  ID tests  */
    describe('getId', () => {
        it('Should return intern\'s ID', () => {
            const id = 5
            const result = new Intern('#', id, '#','#').getId()

            expect(result).toEqual(id)
        })
    })

    describe('getId', () => {
        it('Should return intern\'s ID as a STRING only', () => {
            const id = 5
            const result = new Intern('#', id, '#','#').getId()

            expect(typeof(result)).toBe('number')
        })
    })

    /*  Email tests  */

    describe('getEmail', () => {
        it('Should return intern\'s Email', () => {
            const email = 'amal@gmail.com'
            const result = new Intern('#', '#', email,'#').getEmail()

            expect(result).toEqual(email)
        })
    })

    describe('getRole', () => {
        it('Should return intern\'s role', () => {
            const role = 'Intern'
            const result = new Intern('#', '#', '#','#').getRole()

            expect(result).toEqual(role)
        })
    })

    describe('getSchool', () => {
        it('Should return intern\'s school', () => {
            const school = 'University of Washington'
            const result = new Intern('#','#','#',school).getSchool()

            expect(result).toEqual(school)
        })
    })
})