describe("A suite", ->
  CustomerView = require('../src/customer_view.coffee')

  it("contains spec with an expectation", ->
    customer_view = new CustomerView()
    expect(customer_view.returnFalse()).toBe(false)
  )
)
