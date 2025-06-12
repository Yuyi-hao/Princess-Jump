import princess from "../entities/player";
import warrior from "../entities/warrior";
import k from "../kaplayCtx";

function movingClouds(cloudName, speed, y){
    const cloud = k.add([
        k.sprite(cloudName), k.pos(1800, y),
        k.scale(Math.random()),
        "cloud",
        k.move(k.vec2(-1, 0), speed),
        {
            add(){
                this.onUpdate(() => {
                    if (this.pos.x + this.width < 0){
                        k.destroy(this);
                    }
                });
            }
        }
    ])
    return cloud;
}

export function gameEnvironment(){
    if (!k.getData("best-score")) k.setData("best-score", 0);
    // background
    k.add([k.sprite("bg-1"), k.pos(0, 0)])
    k.add([k.sprite("bg-2"), k.pos(0, 0)])
    k.add([k.sprite("B1011"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1012"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1013"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1013"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1013"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1013"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1013"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("B1013"), k.pos(0, 0), k.scale(4)])
    k.add([k.sprite("M1010"), k.pos(1300, 10), k.scale(0.1)])

    k.loop(3, () => {
        const cloudList = ["C2010", "C2011", "C2012", "C2013"];
        const speed = Math.floor(Math.random()*200);
        const y = 100;
        movingClouds(cloudList[Math.floor(Math.random()*cloudList.length)], speed, y);
    });
    
    // platform
    k.add([k.rect(k.width(), 200), k.pos(0, 860), k.area(), k.body({isStatic: true}), "platform"]);

    // water shore
    for(let i=0; i*64 < k.width(); i++){
        k.add([k.sprite("water-still"), k.pos(i*64, k.height()-64)]);
        k.add([k.sprite("water-still"), k.pos(i*64, k.height()-64*2)]);
        k.add([k.sprite("shore-water", { anim: "crash" }), k.pos((i-1)*64, k.height() - 64 * 3)]);
    }

    // rocks 
    for(let i=0; i*170< k.width(); i++){
        k.add([ k.sprite("rock-tile-2"), k.pos((i)*170, k.height()-64*3)]);
    }
    
    // grass 
    for(let i=0; i*140< k.width(); i++){
        k.add([k.sprite("grass-tile-1"), k.pos((i)*140, k.height()-64*5)]);
        k.add([k.sprite("grass-tile-2"), k.pos((i)*140, k.height()-64*(5.7))]);
        k.add([k.sprite("grass-tile-3"), k.pos((i)*140, k.height()-64*5)]);
        k.add([k.sprite("grass-tile-3"), k.pos((i)*140, k.height()-64*(5.7))]);
        k.add([k.sprite("grass-tile-3"), k.pos((i)*140, k.height()-64*4)]);
    }
    
    // castle
    k.add([k.sprite("castle-blue"), k.pos(0, k.height()/2+30)]);
    k.add([k.sprite("tower-blue"), k.pos(100, k.height()/2-70)]);
    k.add([k.sprite("skull-flag"), k.pos(130, k.height()/2-70)]);
    k.add([k.sprite("fire", {anim: "fire"}), k.pos(100, k.height()/2-170)]);
    

    // zombie spawner
    k.add([k.sprite("pumpkin-2"), k.pos(1750, k.height()/2+230), k.scale(1.5)]);
    k.add([k.sprite("scare-crow"), k.pos(1600, k.height()/2+20), k.scale(1.7), k.offscreen()]);
    k.add([k.sprite("pumpkin-1"), k.pos(1680, k.height()/2+250), k.scale(1.5), k.offscreen()]);
}

export default function disclaimer() {
    if(!k.getData("best-score")) k.setData("best-score", 0);
    // TODO: Game button
    k.setGravity(2000);

    // game environment
    gameEnvironment();

    // stroy text
    k.add([
        k.rect(1080*1.3, 720*1.3, {radius: 16}),
        k.pos(k.center()),
        k.anchor("center"),
        k.opacity(1),
        k.color(k.rgb(218, 58, 58)),
        k.z(19),
        k.outline(10, k.rgb(23, 9, 148) ),
        k.opacity(0.6)
    ]);
    k.add([
        k.text(
            `
            You were just a simple soul, drifting through the misty fields beyond the castle walls...
            
            But everything changed when the scarecrow came.
            It wasn't just any scarecrow — it moved with purpose, 
            like something dark had taken root inside. 
            When you returned, you found the castle overrun. A curse had awakened.
            
            The knight... your protector...
            Now stands possessed, butchering all who come near — ally or ghost alike.
            You are no longer part of this world, but not yet gone. Your ghostly form lets you roam free.
            
            Your mission:
            Lure the restless souls from the beyond —
            Lead them toward the cursed knight...
            And watch him tear through the invading spirits...
            All while staying just far enough not to become his next target.

            PRESS SPACE OR CLICK TO START GOOD LUCK!!!!!!!!!
            `, { font: "mania", size: 30}),
        k.pos(k.width()/2 - 800, k.height()/2 - 450),
        k.color(k.rgb(0, 255, 179)),
        k.z(20),
    ])
    // warrior
    warrior();

    // princess 
    princess();
    k.onButtonPress("jump", () => {k.go("game")});
    return;
}