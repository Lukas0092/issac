namespace SpriteKind {
    export const Date = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 0
        Y = -50
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (COl1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Issac, X, Y)
        COl1 = false
        pause(1000)
        COl1 = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = -50
        Y = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 50
        Y = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 0
        Y = 50
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (RoomClear) {
        tiles.setCurrentTilemap(tilemap`FirstEnemyRoom`)
        tiles.placeOnRandomTile(Issac, assets.tile`myTile4`)
    }
})
let projectile: Sprite = null
let Y = 0
let X = 0
let Speed = 0
let COl1 = false
let RoomClear = false
let Issac: Sprite = null
tiles.setCurrentTilemap(tilemap`StartRoom`)
Issac = sprites.create(img`
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . d d d d d d d d . . 
    . d d d f d d d f d d . 
    . d d d 9 d d d 9 d d . 
    . d d d 9 d d d 9 d d . 
    . d d d d f f f d d d . 
    . . d d f d d d f d . . 
    . . . d d d d d d . . . 
    . d d d d d d d d d d . 
    . d d d d d d d d d d . 
    d d d d d d d d d d d d 
    d d d d d d d d d d d d 
    d d . d d d d d d . d d 
    . . . d d d d d d . . . 
    . . . d d . . d d . . . 
    `, SpriteKind.Player)
controller.moveSprite(Issac)
scene.cameraFollowSprite(Issac)
tiles.placeOnRandomTile(Issac, assets.tile`myTile4`)
RoomClear = true
COl1 = true
