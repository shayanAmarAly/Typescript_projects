import inquirer from "inquirer";
const num = Math.ceil(Math.random() * 4);
const enemy = ["Meruem", "Yohan Liebert", "Muzan", "Yagami", "Dio"];
var hero_health = 100;
var enemy_health = 75;
const enemyAttack_Damage = Math.ceil(Math.random() * 25);
const heroAttack_Damage = Math.ceil(Math.random() * 25);
let x = true;
async function adventure() {
    while (x) {
        const game = await inquirer.prompt([{
                name: "selectAttack",
                type: "list",
                choices: ["Attack", "heal", "runaway", "exit"],
                message: "what you want to do now select options"
            }]);
        if (game.selectAttack == "Attack") {
            let x1 = true;
            console.log(`Enemy health before attack ${enemy_health} \nHero health before attack ${hero_health}`);
            console.log(`Your enemy is`, enemy[num]);
            while (x1) {
                enemy_health -= heroAttack_Damage;
                hero_health -= enemyAttack_Damage;
                console.log(`Your strike hit enemy and remaining hp ${enemy_health} and hero damage is ${hero_health}`);
                if (enemy_health < 0) {
                    console.log("goku win");
                    x1 = false;
                    break;
                }
                if (hero_health < 1) {
                    console.log(`Hero hp is two low hit and  by `, enemy[num], "you need to heal");
                    console.log(`${enemy[num]} win`);
                    x1 = false;
                    break;
                }
            }
        }
        else if (game.selectAttack == "heal") {
            hero_health += 25;
            console.log(`Your new health is ${hero_health}`);
        }
        else if (game.selectAttack == "runaway") {
            console.log(`you run away from ${enemy[num]} come back and fight you monkey`);
        }
        else if (game.selectAttack == "exit") {
            x = false;
        }
    }
}
adventure();
