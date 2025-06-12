import k from "../kaplayCtx";

export default function disclaimer() {
    k.add([
        k.text(
            `
            Game is replica of classic platformer game with little bit of change.
            This is a Fangame created by Yuyi Hao using assets from itch.io.
            `,
            {font: "mania", size: 32}
        ),
    ])
    k.add([
        k.text(
            `
            Press space/click/Touch to start the Game.
            `,
            {font: "mania"},
            {size: 50},
        ),
        k.anchor("center"),
        k.pos(k.center())
    ])
    k.onButtonPress("jump", () => {k.go("main-menu")});
    return;
}