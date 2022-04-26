input.onPinPressed(TouchPin.P0, function () {
    basic.showString("oppening",75)
servos.P1.setAngle(91)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.showString("closing",75)
servos.P1.setAngle(180)
})
basic.forever(function () {
    radio.setGroup(8)
})
