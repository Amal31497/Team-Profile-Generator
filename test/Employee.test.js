const Employee = require('../lib/Employee')

describe('Employee', () => {
    /*  Name tests  */
    describe('getName', () => {
        it('Should return employee\'s name', () => {
            const name = 'Captain America'
            const result = new Employee(name,'#','#').getName()

            expect(result).toEqual(name)
            
        })
        it('Should return employee\'s name as a STRING only', () => {
            const name = 'Captain America'
            const result = new Employee(name,'#','#').getName()

        expect(typeof(result)).toBe('string')
        })
    })
    /*  ID tests  */
    describe('getId', () => {
        it('Should return employee\'s ID', () => {
            const id = 5
            const result = new Employee('#', id, '#').getId()

            expect(result).toEqual(id)
        })
    })

    describe('getId', () => {
        it('Should return employee\'s ID as a STRING only', () => {
            const id = 5
            const result = new Employee('#', id, '#').getId()

            expect(typeof(result)).toBe('number')
        })
    })

    /*  Email tests  */

    describe('getEmail', () => {
        it('Should return employee\'s Email', () => {
            const email = 'amal@gmail.com'
            const result = new Employee('#', '#', email).getEmail()

            expect(result).toEqual(email)
        })
    })

    describe('getRole', () => {
        it('Should return employee\'s role', () => {
            const role = 'Employee'
            const result = new Employee('#', '#', '#').getRole()

            expect(result).toEqual(role)
        })
    })

})