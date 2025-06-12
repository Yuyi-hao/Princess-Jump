import k from "../kaplayCtx";


export default function warrior(){
    const entity  = k.add([
        k.sprite("killer-man", {anim: "idle"}),
        k.pos(-40, 690),
        k.area({shape: new k.Rect(k.vec2(45, 40), 100, 100)}),
        k.body({isStatic: true}),
        k.scale(1.4),
        "warrior",
        {
            targetZombie: null,
            isAttacking: false
        },        
    ]);

    entity.onAnimEnd((anim) => {
        if(anim === "attack_left"){
            if(entity.isAttacking && entity.targetZombie !== null){
                entity.targetZombie.destroy();
            }
            entity.targetZombie = null;
            entity.isAttacking = false;
            entity.play("idle");
        }
    });

    return entity;
}