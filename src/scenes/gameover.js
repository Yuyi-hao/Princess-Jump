import k from "../kaplayCtx";
import { gameEnvironment } from "./mainMenu";

export default function gameOverScene(){
    gameEnvironment();
    const currentScore = k.getData("current-score");
    k.setData("best-score", Math.max(k.getData("best-score"), currentScore));
    const bestScore = k.getData("best-score");
    k.add([
        k.rect(600, 600, {radius: 16}),
        k.pos(k.center()),
        k.anchor("center"),
        k.opacity(0.6),
        k.color(k.rgb(56, 34, 56)),
        k.z(19),
    ]);
    k.add([
        k.text("GAME OVER", {font: "mania", size: 60}),
        k.anchor("center"),
        k.pos(k.width()/2, k.height()/2 - 200),
        k.color(k.rgb(233, 236, 30)),
        k.z(20),
    ])
    k.add([
        k.text(`Best Score: ${bestScore}`, {font: "mania", size: 30}),
        k.anchor("center"),
        k.pos(k.width()/2 - 130, k.height()/2 - 100),
        k.color(k.rgb(93, 224, 16)),
        k.z(20),
    ])
    k.add([
        k.text(`Current Score: ${currentScore}`, {font: "mania", size: 30}),
        k.anchor("center"),
        k.pos(k.width()/2 + 130 , k.height()/2 - 100),
        k.color(k.rgb(93, 224, 16)),
        k.z(20),
    ])
    k.add([
        k.rect(400, 80, {radius: 16}),
        k.pos(k.center()),
        k.anchor("center"),
        k.opacity(1),
        k.color(k.rgb(218, 58, 58)),
        k.z(19),
        k.outline(10, k.rgb(23, 9, 148) )
    ]);
    k.add([
        k.text(`Press/click or tap to retry`, { size: 20}),
        k.anchor("center"),
        k.pos(k.center()),
        k.color(k.rgb(51, 5, 216)),
        k.z(20),
    ])
    k.add([
        k.sprite("princess", {anim: "idle"}),
        k.anchor("center"),
        k.pos(k.width()/2 - 200, k.height()/2+ 200),
        k.scale(1.2),
        k.z(20),
    ]);
    k.add([
        k.sprite("zombie", {flipX: true, anim: "idle"}),
        k.anchor("center"),
        k.pos(k.width()/2 + 200, k.height()/2 + 150),
        k.scale(4),
        k.z(20),
    ]);
    // castle
    const castleX = k.width()/2-80;
    const castleY = k.height()/2+130;
    const castleScale = 0.4;
    k.add([k.sprite("castle-blue"), k.pos(castleX, castleY), k.scale(castleScale), k.z(20)]);
    k.add([k.sprite("tower-blue"), k.pos(castleX+castleScale*100, castleY-100*castleScale), k.scale(castleScale), k.z(20)]);
    k.add([k.sprite("skull-flag"), k.pos(castleX+castleScale*130, castleY-100*castleScale), k.scale(castleScale), k.z(20)]);
    k.add([k.sprite("fire", {anim: "fire"}), k.pos(castleX+castleScale*100, castleY-200*castleScale), k.scale(castleScale), k.z(20)]);
    k.onButtonPress("jump", () => {k.go("game")});
    return;
}