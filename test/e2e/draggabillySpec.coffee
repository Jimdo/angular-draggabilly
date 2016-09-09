Helper = require './SpecHelper'

describe 'with draggabilly it', ->

  dragTo = (element, deltaX = 0, deltaY = 0) ->
    browser.actions().
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

  eventLog = -> (element By.id 'events')
  eventLog.clear = ->
    eventLog().clear()
  eventLog.get = ->
    eventLog().getAttribute('value')

  expectEventLog = (expectedData, next = null) ->
    eventLog.get().then (jsonString) ->
      events = JSON.parse jsonString
      expect(events).toEqual expectedData
      next?()

  beforeEach ->
    eventLog.clear()

  describe 'generally', ->

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
        expectEventLog [
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
          ], done

    it "should be possible to disable dragging", (done) ->
      (element By.id 'toggleDrag').click().then ->
        dragTo(draggie, 100, 100).then ->
          expectLoc draggie, 0, 0, done

    describe 'should be possible to fix', ->

      it 'the x-axis', (done) ->
        vDraggie = element By.id 'draggieVertical'
        dragTo(vDraggie, 200, 200).then ->
          expectLoc vDraggie, 0, 300, done

      it 'the y-axis', (done) ->
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

  describe 'eventing', ->
    it 'should be possible to disable eventing', (done) ->
      draggieNone = element By.id 'draggieNone'
      dragTo(draggieNone, 300, 300).then ->
        expect(eventLog.get()).toBe ''
        done()

    describe 'should be possible to only enable', ->

      it 'the start event', (done) ->
        id = 'draggieStart'
        draggie = element By.id id
        dragTo(draggie, 300, 300).then ->
          expectEventLog [
              {
                type : 'start'
                id : id
                pos : [ 0, 420 ]
              }
            ], done

      it 'the move event', (done) ->
        id = 'draggieMove'
        draggie = element By.id id
        dragTo(draggie, 300, 300).then ->
          dragTo(draggie, 100, 100).then ->
            expectEventLog [
                {
                  type : 'move'
                  id : id
                  pos : [ 300, 740 ]
                }
                {
                  type : 'move'
                  id : id
                  pos : [ 400, 840 ]
                }
              ], done

      it 'the end event', (done) ->
        id = 'draggieEnd'
        draggie = element By.id id
        dragTo(draggie, 300, 300).then ->
          expectEventLog [
              {
                type : 'end'
                id : id
                pos : [ 300, 760 ]
              }
            ], done

      it 'the start and end event', (done) ->
        id = 'draggieStartEnd'
        draggie = element By.id id
        dragTo(draggie, 300, 300).then ->
          expectEventLog [
              {
                type : 'start'
                id : id
                pos : [ 0, 480 ]
              }
              {
                type : 'end'
                id : id
                pos : [ 300, 780 ]
              }
            ], done
