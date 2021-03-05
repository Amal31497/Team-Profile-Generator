const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    /*  Name tests  */
    describe('getName', () => {
        it('Should return engineer\'s name', () => {
            const name = 'Captain America'
            const result = new Engineer(name,'#','#','#').getName()

            expect(result).toEqual(name)
            
        })
        it('Should return engineer\'s name as a STRING only', () => {
            const name = 'Captain America'
            const result = new Engineer(name,'#','#','#').getName()

        expect(typeof(result)).toBe('string')
        })
    })
    /*  ID tests  */
    describe('getId', () => {
        it('Should return engineer\'s ID', () => {
            const id = 5
            const result = new Engineer('#', id, '#','#').getId()

            expect(result).toEqual(id)
        })
    })

    describe('getId', () => {
        it('Should return engineer\'s ID as a STRING only', () => {
            const id = 5
            const result = new Engineer('#', id, '#','#').getId()

            expect(typeof(result)).toBe('number')
        })
    })

    /*  Email tests  */

    describe('getEmail', () => {
        it('Should return engineer\'s Email', () => {
            const email = 'amal@gmail.com'
            const result = new Engineer('#', '#', email,'#').getEmail()

            expect(result).toEqual(email)
        })
    })

    describe('getRole', () => {
        it('Should return engineer\'s role', () => {
            const role = 'Engineer'
            const result = new Engineer('#', '#', '#','#').getRole()

            expect(result).toEqual(role)
        })
    })

    describe('getGithub', () => {
        it('Should return engineer\'s github', () => {
            const github = 'github'
            const result = new Engineer('#','#','#',github).getGithub()

            expect(result).toEqual(github)
        })
    })

})