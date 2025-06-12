import kaplay from "kaplay";

const k = kaplay({
    width: 1920,
    height: 1080,
    letterbox: true,
    background: [20, 20, 20],
    global: false,
    buttons: {
        "jump": {
            keyboard: ["space", "up", "w"],
            mouse: "left",
        },
        "moveForward": {
            keyboard: ["d", "right"],
            mouse: "forward",
        }
    },
    touchToMouse: true,
    debug: true,
    debugKey: "h"
});

export default k;