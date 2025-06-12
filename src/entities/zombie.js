import k from "../kaplayCtx";

export default function zombie(speed){
    const entity = k.add([
        k.sprite("zombie", {flipX: true, anim: "spawn"}),
        k.pos(1730, 690),
        k.area({shape: new k.Rect(k.vec2(0, 18), 32, 32)}),
        k.scale(3.5),
        k.body(),
        "zombie",
    ]);
    entity.onAnimEnd(() => {
        entity.play("walk");
        entity.vel = k.vec2(-speed, 0);
    });
    // entity.move(-speed, 0);
    return entity;
}