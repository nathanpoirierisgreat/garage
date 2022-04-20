radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        servos.P1.setAngle(90)
    }
    if (receivedString == "down") {
        servos.P1.setAngle(0)
    }
})
basic.forever(function () {
    radio.setGroup(8)
})
