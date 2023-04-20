describe("The courseCost function", function () {

    it("should return the course cost without a discount", function () {

        const cost = courseCost("r1", "2023-05-21")

        assert.deepEqual(cost, {
            "status" : "success",
            "code": "r1",
            "description" : "",
            "cost" : "",
            "discount" : "", 
            "amountDue" : ""
        });


    })
    it("should return the course cost with  a 20% discount", function () {
        const cost = courseCost("r1", "2023-05-21")

        assert.deepEqual(cost, {
            "status" : "success",
            "code": "r1",
            "description" : "",
            "cost" : "",
            "discount" : "", 
            "amountDue" : ""
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