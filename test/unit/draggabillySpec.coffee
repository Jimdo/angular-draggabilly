describe 'draggabilly', ->

  it 'should not create its own scope', ->
    initGlobals()
    expect(createDirective().scope).toBe($rootScope)

  it 'should be written so it can be used programmatically', ->
    initGlobals()
    directive = $injector.get 'draggabillyDirective'
    elem = angular.element '<div>'
    scope = $rootScope.$new()
    directive[0].link scope, elem
