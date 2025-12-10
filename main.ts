let pixel = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    pixel = 0
    for (let index = 0; index < 8; index++) {
        strip.setPixelColor(pixel, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
        pixel += 1
        basic.pause(100)
    }
    strip.clear()
    strip.show()
    basic.pause(200)
})
