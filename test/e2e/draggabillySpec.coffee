Helper = require './SpecHelper'

describe 'dragging', ->

  dragTo = (element, deltaX = 0, deltaY = 0) ->
    ptor.actions().
      mouseMove(element, {x: 0, y: 0 }).
      mouseDown().
      mouseMove({x: deltaX, y: deltaY}).
      mouseUp().
      perform()
  expectLoc = (element, expectedX, expectedY, next = null) ->
    element.getLocation().then (location) ->
      expect(location.x).toBe expectedX
      expect(location.y).toBe expectedY
      next?()

  describe 'standard', ->

    draggie = null
    beforeEach ->
      draggie = element By.id 'draggie'

    it 'should find our directive', ->
      expect(draggie.isPresent()).toBe true

    it 'should be located in the top left corner', (done) ->
      expectLoc draggie, 0, 0, done

    it 'should be draggable', (done) ->
      dragTo(draggie, 100, 100).then ->
        expectLoc draggie, 100, 100, done

    it "should fire drag events", (done) ->
      dragTo(draggie, 100, 100).then ->
        (element By.id 'events').getAttribute('value').then (jsonString) ->
          events = JSON.parse jsonString
          expect(events).toEqual [
            {
              type : 'start'
              id : 'draggie'
              pos : [ 0, 0 ]
            }
            {
              type : 'move'
              id : 'draggie'
              pos : [ 100, 100 ]
            }
            {
              type : 'end'
              id : 'draggie'
              pos : [ 100, 100 ]
            }
          ]
          done()

    it "should be possible to disable dragging", (done) ->
      (element By.id 'toggleDrag').click().then ->
        dragTo(draggie, 100, 100).then ->
          expectLoc draggie, 0, 0, done

    describe 'should be possible to fix axes', ->

      it 'should fix the x-axis', (done) ->
        vDraggie = element By.id 'draggieVertical'
        dragTo(vDraggie, 200, 200).then ->
          expectLoc vDraggie, 0, 300, done

      it 'should fix the y-axis', (done) ->
        hDraggie = element By.id 'draggieHorizontal'
        dragTo(hDraggie, 200, 200).then ->
          expectLoc hDraggie, 400, 0, done

  describe 'contain the draggable element', ->

    it 'with a given selector', (done) ->
      draggieInside = element By.id 'draggieInside'
      dragTo(draggieInside, 250, 250).then ->
        expectLoc draggieInside, 380, 380, done

    it 'with a boolean', (done) ->
      draggieInside = element By.id 'draggieInside2'
      dragTo(draggieInside, 250, 250).then ->
        expectLoc draggieInside, 380, 380, done

  describe 'defining a handle', ->

    it 'should be possible to only drag by a handle', (done) ->
      handleDraggie = element By.id 'handleDraggie'
      handle = element By.id 'handle'
      dragTo(handleDraggie, 100, 100).then ->
        expectLoc handleDraggie, 400, 200, ->
          dragTo(handle, 60, 60).then ->
            expectLoc handle, 500, 300, done


  describe 'grid', ->

    it 'should be possible to define a snap grid', (done) ->
      snapDraggie = element By.id 'snapDraggie'
      dragTo(snapDraggie, 26, 26).then ->
        expectLoc snapDraggie, 250, 100, done
