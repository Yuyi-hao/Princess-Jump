import princess from "../entities/player";
import warrior from "../entities/warrior";
import zombie from "../entities/zombie";
import k from "../kaplayCtx";
import { gameEnvironment } from "./mainMenu";

export default function game(){
    // initialize game environment
    gameEnvironment();

    // initialize score
    let score = 0;
    const scoreText = k.add([k.text(`Score: ${score}`, {font: "mania"}), k.pos(10, 10)]);

    // put characters
    const player = princess();
    player.inGame = true;
    const killerMan = warrior();
    let gameOver = false;

    // spawning zombies
    let speedRange = 200;
    k.loop(1, () => {
        if(!gameOver){
            zombie(speedRange);
            speedRange = Math.max(800, speedRange+10);
        }
    });
    
    player.onCollide("warrior", () => {
        k.get("zombie").forEach((zomb) => {
            zomb.vel.x = 0;
            zomb.paused = true;
        });
        k.setData("current-score", score);
        gameOver = true;
        player.inGame = false;
        player.play("die");
    });

    player.onAnimEnd((anim) => {
        if(anim === "die") k.go("gameover");
    })
    
    killerMan.onCollide("zombie", (zombie) => {
        if(!killerMan.isAttacking){
            killerMan.play("attack_left");
            killerMan.isAttacking = true;
            killerMan.targetZombie = zombie;
            score += 1;
            scoreText.text = `Score: ${score}`;
        }
    });

    return;
}