radio.onReceivedString(function (receivedString) {
    if (receivedString == "back") {
        servos.P1.setAngle(90)
    }
    if (receivedString == "foreword") {
        servos.P1.setAngle(0)
    }
})
basic.forever(function () {
    radio.setGroup(8)
})
