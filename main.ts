controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    audience.setImage(assets.image`clap2`)
    projectile = sprites.createProjectileFromSprite(simplified.chooseRandomImage(assets.image`star`, assets.image`rose`, assets.image`heart`), audience, randint(0, 10), randint(-50, -100))
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    audience.setImage(assets.image`clap1`)
})
let projectile: Sprite = null
let audience: Sprite = null
scene.setBackgroundImage(assets.image`stage`)
let mySprite = sprites.create(assets.image`singing bear`, SpriteKind.Player)
mySprite.bottom = 115
game.splash("PRESS A FOR NICE FRIENDS!!", "IF B, YOU ARE SCREWED UP!!")
info.startCountdown(40)
audience = sprites.create(assets.image`clap1`, SpriteKind.Player)
audience.bottom = 120
