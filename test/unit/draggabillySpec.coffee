describe 'draggabilly', ->

  it 'should not create its own scope', ->
    expect($scope).toBeUndefined()

  it 'should be possible to use the directive programmatically', (done) ->
    inject ['draggabillyDirective', (draggabillyDirective) ->
      elem = angular.element '<div>'
      scope = $rootScope.$new()
      draggabillyDirective[0].link scope, elem
      done()
    ]
