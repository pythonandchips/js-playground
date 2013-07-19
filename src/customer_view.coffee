class CustomerView
  jquery = require('jquery')
  _ = require('./lib/underscore.js')

  $: (query) ->
    $(@elm).find(query)

  attach: ->
    @elm = jquery('[data-view=customer_view]')
    events = @$('[data-event]')
    _(events).each( (event) =>
      eventDetail = @$(event).attr('data-event').split(":")
      eventType = eventDetail[0]
      eventName = eventDetail[1]
      @$(event).bind(eventType, ( () => @[eventName]()  ))
    )
    _(@$('[data-var]')).each( (element) =>
      name = @$(element).attr('data-var')
      @[name] = (() =>
        @$("[data-var=#{name}]").val()
      )
    )


  publish: ->
    console.log(@.story())
    #eventBus.publish('space_1:edit', @story )



module.exports = CustomerView
