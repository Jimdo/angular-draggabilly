Helper = require './SpecHelper'

describe 'draggabily', ->
  draggie = null

  beforeEach ->
    draggie = element By.id 'draggie'

  it 'should find our directive', ->
    expect(draggie.isPresent()).toBe true

  it 'should be located in the top left corner', (done) ->
    draggie.getLocation().then (location) ->
      expect(location.x).toBe(0);
      expect(location.y).toBe(0);
      done();
