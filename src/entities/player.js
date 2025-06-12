import k from "../kaplayCtx";

export default function princess(){
    const player = k.add([
        k.sprite("princess", {anim: "idle"}),
        k.pos(k.center()),
        k.area({shape: new k.Rect(k.vec2(30, 10), 60, 100)}),
        k.scale(1.5),
        k.body(),
        "princess",
        {
            inGame: false
        }
    ]);

    k.onButtonPress("jump", () => {
        if(player.isGrounded() && player.inGame){
            player.play("jump");
            player.jump(800);
        }
    })

    player.onAnimEnd((anim) => {
        if (anim === "jump") {
            player.play("idle");
        }
    });

    return player;
}