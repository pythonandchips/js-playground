$ = require('jquery')
CustomerView = require('./customer_view.coffee')
template = require('./templates/hello_world.hbs')

$(document).ready( ->
  customer_view = new CustomerView()
  customer_view.attach()
)
