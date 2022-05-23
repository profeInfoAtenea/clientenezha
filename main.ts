input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    control.waitMicros(10)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    control.waitMicros(10)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    control.waitMicros(10)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    control.waitMicros(10)
})
radio.setGroup(240)
basic.showIcon(IconNames.Ghost)
