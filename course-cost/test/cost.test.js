describe("The courseCost function", function () {

    it("should return the course cost without a discount", function () {

        const cost1 = courseCost("r1", "2023-05-21")

        assert.deepEqual(cost1, {
            'status' : 'success',
            'code': 'r1',
            'description' : 'Ruby on Rails intro',
            'cost' : 'R5675.00',
            'discount': 'R0.00', 
            'amountDue' : 'R5675.00'
        });

        const cost2 = courseCost("p1", "2023-05-21")

        assert.deepEqual(cost2, {
            'status' : 'success',
            'code': 'p1',
            'description' : 'Python',
            'cost' : 'R7850.00',
            'discount': 'R0.00', 
            'amountDue' : 'R7850.00'
        });
        const cost3 = courseCost("p2", "2023-05-21")

        assert.deepEqual(cost3, {
            'status' : 'success',
            'code': 'p2',
            'description' : 'Intro to PHP course',
            'cost' : 'R8990.00',
            'discount': 'R0.00', 
            'amountDue' : 'R8990.00'
        });

    })
    it("should return the course cost with  a 20% discount", function () {
        const cost = courseCost("r1", "2023-05-21")

        assert.deepEqual(cost, {
            'status' : 'success',
            'code': 'p2',
            'description' : 'Intro to PHP course',
            'cost' : 'R1798.00',
            'discount' : '', 
            'amountDue' : 'R7192.00'
        });

    })
    it("should return 'Invalid code' when an incorrect course code is entered", function () {
        const result = courseCost('r2','2023-05-21');
        assert.deepEqual(result, {
          status: 'Invalid code'
        })
    
    })
    it("should return 'Invalid day' when an incorrect date format is entered", function () {

        const result = courseCost('p1', '2023-13-30');
    assert.deepEqual(result, {
      status: 'Invalid day'} );

    })
    
    


})