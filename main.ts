namespace SpriteKind {
    export const Date = SpriteKind.create()
    export const Pickup = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
    	
    } else {
        X = 0
        Y = -50
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pickup, function (sprite, otherSprite) {
    if (info.life() >= MaxHp) {
        info.setLife(MaxHp)
        Hear1.sayText("You have max Hp when you lose one you can heal with this")
    } else {
        info.changeLifeBy(1)
        sprites.destroy(otherSprite)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (RoomClear) {
        tiles.setCurrentTilemap(tilemap`level10`)
        sprites.destroy(Hear1)
        tiles.placeOnRandomTile(Issac, assets.tile`myTile4`)
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
        RoomClear = false
        Skel = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        Skel.follow(Issac, 50)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemy1 += 1
    sprites.destroy(sprite)
    if (Enemy1 == 3) {
        sprites.destroy(otherSprite)
        RoomClear = true
        Enemy1 = 0
        Hear1 = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2222.2222.....
            ......222222222.....
            ......222222222.....
            .......2222222......
            ........22222.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Pickup)
        tiles.placeOnTile(Hear1, tiles.getTileLocation(8, 6))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    pause(500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
let Enemy1 = 0
let Skel: Sprite = null
let projectile: Sprite = null
let Hear1: Sprite = null
let Y = 0
let X = 0
let Speed = 0
let MaxHp = 0
let COl1 = false
let RoomClear = false
let Issac: Sprite = null
info.setLife(3)
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
MaxHp = 3
