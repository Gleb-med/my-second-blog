function play() {
    document.getElementById("name").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
    // document.getElementById("workplace").style.backgroundColor = '#A62292';
}
document.getElementById("enterGame").addEventListener('click', play);



// var train_1 = document.querySelector('#training-1');
// window.onclick = function(event) {
//     if (event.target == this.train_1) {
//         train_1.style.display = "none";
//         document.querySelector("#training-1").style.display = "none";
//         document.querySelector("#battle").style.display = "block";
//         document.querySelector("#battle").style.background = "rgba(0, 0, 0, 0.4)";
//         document.querySelector("#battle").style.height = "100vh";
//     }
// }


document.querySelector('#n-btn').addEventListener('click', nameEnter);

document.querySelector('#name-player').addEventListener('keydown', function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        e.preventDefault();
        nameEnter(e);
    }
});

function nameEnter(e) {
    var nameP = document.nameP.namnam.value;
    document.getElementById("nn").innerHTML = nameP;
    document.getElementById("battle").style.display = 'block';
    document.querySelector("#battle").style.background = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#battle").style.height = "100vh";
    document.getElementById("name").style.display = 'none';
    document.querySelector("#training-1").style.display = "block";
}




function options() {
    document.getElementById("options").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
    document.querySelector("#options").style.background = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#options").style.height = "100vh";
}

function exitAudio() {
    document.querySelector("#options").style.display = "none";
    document.querySelector("#menu").style.display = "block";
}
document.querySelector("#exit-audio").addEventListener('click', exitAudio);
document.querySelector('#opt-btn').addEventListener('click', options);




// function inventar() {
//     document.getElementById("inventar").style.display = 'block';
//     document.getElementById("home").style.display = 'none';
//     var namePlayer = document.nameP.namnam.value;
//     document.getElementById("statsname").innerHTML = namePlayer;
//     document.getElementById("statshp").innerHTML = player.hp;
//     document.getElementById("statsdm").innerHTML = player.dm;
//     document.getElementById("statsar").innerHTML = player.ar.toFixed(2);
// }


// document.querySelector('#char').addEventListener('click', inventar);


//Магазин
// let player = [
//     { hp: 60 },
//     { mh: 60 },
//     { dm: 15 },
//     { ar: 0.1 },
//     { st: 8 },
//     { ms: 8 },
//     { hl: 20 },
//     { xp: 10 }.
// ];


// player.hp = 60;
// player.mh = 60;
// player.dm = 15;
// player.ar = 0.1;
// player.hl = 20;
// player.st = 8;
// player.ms = 8;
// player.xp = 10;







let player = [
    { hp: 60 },
    { mh: 60 },
    { dm: 15 },
    { ar: 0.1 },
    { st: 8 },
    { ms: 8 },
    { hl: 20 },
    { gold: 0 },
    { xp: 10 }
]


player.hp = 60;
player.mh = 60;
player.dm = 15;
player.ar = 0.1;
player.hl = 20;
player.st = 8;
player.ms = 8;
player.gold = 8;
player.xp = 10;


let enemy = [
    { lv: 1 },
    { hp: 50 },
    { mh: 50 },
    { dm: 10 },
    { ar: 0.1 },
    { xp: 5 }
]

enemy.lv = 1;
enemy.dm = 10;
enemy.ar = 0.1;
enemy.hp = 50;
enemy.mh = 50;
enemy.xp = 5;












//Босс

let bossDemon = [
    { lv: 1 },
    { hp: 10000 },
    { mh: 10000 },
    { dm: 1500 },
    { ar: 0.1 },
    { xp: 500 }
]

bossDemon.lv = 1;
bossDemon.dm = 1500;
bossDemon.ar = 0.1;
bossDemon.hp = 10000;
bossDemon.mh = 10000;
bossDemon.xp = 500;

document.getElementById("lv1").innerHTML = bossDemon.lv;
document.getElementById("eh1").innerHTML = bossDemon.hp.toFixed(0);
document.getElementById("ed1").innerHTML = bossDemon.dm;
document.getElementById("ea1").innerHTML = bossDemon.ar;


//вывод характеристик игрока в бою с боссом
// var nameP = document.nameP.namnam.value;
// document.getElementById("nn1").innerHTML = nameP;
// document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
// document.getElementById("pd1").innerHTML = player.dm;
// document.getElementById("pa1").innerHTML = player.ar.toFixed(2);
// document.getElementById("ps1").innerHTML = player.st;


//boss
function bossBattle() {
    if (enemy.lv > 9) {
        document.querySelector("#training-3").style.display = "block";
        document.querySelector("#home").style.display = 'none';
        document.querySelector("#BossPlace").style.display = 'block';
        document.querySelector("#BossPlace").style.background = "rgba(0, 0, 0, 0.4)";
        document.querySelector("#BossPlace").style.height = "100vh";
        var nameP = document.nameP.namnam.value;
        document.getElementById("nn1").innerHTML = nameP;
        document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
        document.getElementById("pd1").innerHTML = player.dm;
        document.getElementById("pa1").innerHTML = player.ar.toFixed(1);
        document.getElementById("ps1").innerHTML = player.st;
    } else {
        alert("Нужен 10 уровня подземелья");
    }

}
document.querySelector("#boss_enter").addEventListener('click', bossBattle);



//Бой с боссом
function Hit1() {
    if (player.st && bossDemon.hp && player.hp > 0) {
        bossDemon.hp -= player.dm * (1 - bossDemon.ar);
        player.hp -= bossDemon.dm * (1 - player.ar);
        player.st -= 1;
        document.getElementById("eh1").innerHTML = bossDemon.hp.toFixed(0);
        document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value--;
    }
    if (bossDemon.hp <= 0) {
        document.getElementById("modal").style.display = 'block';
        document.getElementById("bossBattle").style.display = 'none';
        bossDemon.mh += 40;
        bossDemon.dm += 15;
        player.st = player.ms;
        player.hp = player.mh;
        bossDemon.hp = bossDemon.mh;
        bossDemon.lv++;
        player.xp += 50;
        player.gold += 500;


        document.getElementById("ed1").innerHTML = bossDemon.dm;
        document.getElementById("lv1").innerHTML = bossDemon.lv;
        document.getElementById("eh1").innerHTML = bossDemon.hp;
        document.getElementById("ph1").innerHTML = player.hp;
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы одержали победу";
        document.getElementById("modal-expir").style.display = 'block';
        document.getElementById("modal-expir").innerHTML = "Получено " + 50 + " опыта";
        document.getElementById("modal-gold").style.display = 'block';
        document.getElementById("modal-gold").innerHTML = "Получено " + 500 + " золота";
        document.getElementById("gold").innerHTML = player.gold;
        document.querySelector("#training-3").style.display = "none";
    }
    if (player.hp <= 0 && bossDemon.hp > 0) {
        document.getElementById("modal").style.display = 'block';
        document.querySelector("#BossPlace").style.display = 'none';
        player.st = player.ms;
        player.hp = player.mh;
        bossDemon.hp = bossDemon.mh;


        document.getElementById("eh1").innerHTML = bossDemon.hp.toFixed(0);
        document.getElementById("ed1").innerHTML = bossDemon.dm;
        document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы потерпели поражение";
        document.getElementById("modal-content").background = "rgba(191, 128, 180, 0.5)";
        document.getElementById("modal-expir").style.display = 'none';
        document.querySelector("#training-3").style.display = "none";
    }
};


document.querySelector("#hit1").addEventListener('click', Hit1);
document.querySelector("#hitE1").addEventListener('click', hitEvage1);
document.querySelector("#health1").addEventListener('click', beHealed1);
document.querySelector("#shield1").addEventListener('click', Shield1);


function hitEvage1() {
    if ((player.st - 1) && player.st && bossDemon.hp && player.hp > 0) {
        bossDemon.hp -= player.dm * (1 - bossDemon.ar);
        player.st -= 2;
        document.getElementById("eh1").innerHTML = bossDemon.hp.toFixed(0);
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value -= 2;
    }
    if (bossDemon.hp <= 0) {
        document.getElementById("modal").style.display = 'block';
        document.querySelector("#BossPlace").style.display = 'none';
        bossDemon.mh += 4000;
        bossDemon.dm += 1500;
        player.st = player.ms;
        player.hp = player.mh;
        bossDemon.hp = bossDemon.mh;
        bossDemon.lv++;
        player.xp += 50;
        player.gold += 500;

        document.getElementById("lv1").innerHTML = bossDemon.lv;
        document.getElementById("ed1").innerHTML = bossDemon.dm;
        document.getElementById("eh1").innerHTML = bossDemon.hp;
        document.getElementById("ph1").innerHTML = player.hp;
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы одержали победу";
        document.getElementById("modal-expir").style.display = 'block';
        document.getElementById("modal-expir").innerHTML = "Получено " + 50 + " опыта";
        document.getElementById("modal-gold").style.display = 'block';
        document.getElementById("modal-gold").innerHTML = "Получено " + 500 + " золота";
        document.getElementById("gold").innerHTML = player.gold;
        document.querySelector("#training-3").style.display = "none";
    }

};


function beHealed1() {
    if ((player.st - 1) && player.st && bossDemon.hp && player.hp > 0) {
        player.hp += 20;
        player.st -= 2;
        if (player.hp >= player.mh)(player.hp = player.mh);
        document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value -= 2;
    }
};


function Shield1() {
    if (bossDemon.hp && player.hp > 0) {
        player.hp -= bossDemon.dm * (1 - player.ar);
        player.st += 1;
        document.getElementById("eh1").innerHTML = bossDemon.hp;
        document.getElementById("ph1").innerHTML = player.hp.toFixed(1);
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value++;
    }
    if (player.hp <= 0 && bossDemon.hp > 0) {
        document.getElementById("modal").style.display = 'block';
        document.querySelector("#BossPlace").style.display = 'none';
        player.st = player.ms;
        player.hp = player.mh;
        bossDemon.hp = bossDemon.mh;
        document.getElementById("eh1").innerHTML = bossDemon.hp.toFixed(0);
        document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
        document.getElementById("ps1").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы потерпели поражение";
        document.getElementById("modal-content").background = "rgba(191, 128, 180, 0.5)";
        document.getElementById("modal-expir").style.display = 'none';
        document.querySelector("#training-3").style.display = "none";
    }
};






//Вывод характеристик врага
document.getElementById("lv").innerHTML = enemy.lv;
document.getElementById("eh").innerHTML = enemy.hp.toFixed(0);
document.getElementById("ed").innerHTML = enemy.dm;
document.getElementById("ea").innerHTML = enemy.ar;


// player.dm = 15;
// player.ar = 0.1;
// player.hp = 60;
// player.st = 8;
// expP = '';

//Вывод характеристик героя в бою с мобом

document.getElementById("ph").innerHTML = player.hp;
document.getElementById("pd").innerHTML = player.dm;
document.getElementById("pa").innerHTML = player.ar.toFixed(1);
document.getElementById("ps").innerHTML = player.st;
// Энергия

document.querySelector("#stamina-progress1").value = player.st;
document.querySelector("#stamina-progress1").max = player.ms;





//победа||поражение
var exodus = document.querySelector('#modal');
window.onclick = function(event) {
    if (event.target == exodus) {
        exodus.style.display = "none";
        document.querySelector("#home").style.display = "block";
        document.querySelector("#training-1").style.display = "none";
    }
}




function battle() {
    document.querySelector("#battle").style.display = "block";
    document.querySelector("#battle").style.background = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#battle").style.height = "100vh";
    document.querySelector("#home").style.display = "none";
}
document.querySelector("#dung").addEventListener('click', battle);
// document.querySelector("#dung").addEventListener('click', changeImageEnemy);









// Энергия

document.querySelector("#stamina-progress").value = player.st;
document.querySelector("#stamina-progress").max = player.ms;

// function changeImage() {
//     var imch = document.getElementById('enemyIm');
//     imch.src = "5.jpg"
// }

function Hit() {
    if (player.st && enemy.hp && player.hp > 0) {
        enemy.hp -= player.dm * (1 - enemy.ar);
        player.hp -= enemy.dm * (1 - player.ar);
        player.st -= 1;
        document.getElementById("eh").innerHTML = enemy.hp.toFixed(1);
        document.getElementById("ph").innerHTML = player.hp.toFixed(1);
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value--;
    }
    if (enemy.hp <= 0) {
        document.getElementById("modal").style.display = 'block';
        document.getElementById("battle").style.display = 'none';
        enemy.mh += 40;
        enemy.dm += 15;
        player.st = player.ms;
        player.hp = player.mh;
        enemy.hp = enemy.mh;
        enemy.lv++;
        player.xp += 5;
        player.gold += 10;

        document.getElementById("ed").innerHTML = enemy.dm;
        document.getElementById("lv").innerHTML = enemy.lv;
        document.getElementById("eh").innerHTML = enemy.hp;
        document.getElementById("ph").innerHTML = player.hp;
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы одержали победу";
        document.getElementById("modal-expir").style.display = 'block';
        document.getElementById("modal-expir").innerHTML = "Получено " + 5 + " опыта";
        document.getElementById("modal-gold").style.display = 'block';
        document.getElementById("modal-gold").innerHTML = "Получено " + 10 + " золота";
        document.getElementById("gold").innerHTML = player.gold;
        document.querySelector("#training-1").style.display = "none";
    }
    if (player.hp <= 0 && enemy.hp > 0) {
        document.getElementById("modal").style.display = 'block';
        document.getElementById("battle").style.display = 'none';
        player.st = player.ms;
        player.hp = player.mh;
        enemy.hp = enemy.mh;


        document.getElementById("eh").innerHTML = enemy.hp.toFixed(1);
        document.getElementById("ed").innerHTML = enemy.dm;
        document.getElementById("ph").innerHTML = player.hp.toFixed(1);
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы потерпели поражение";
        document.getElementById("modal-content").background = "rgba(191, 128, 180, 0.5)";
        document.getElementById("modal-expir").style.display = 'none';
        document.getElementById("modal-gold").style.display = 'none';
        document.querySelector("#training-1").style.display = "none";
    }
};


document.querySelector("#hit").addEventListener('click', Hit);
document.querySelector("#hitE").addEventListener('click', hitEvage);
document.querySelector("#health").addEventListener('click', beHealed);
document.querySelector("#shield").addEventListener('click', Shield);


function hitEvage() {
    if ((player.st - 1) && player.st && enemy.hp && player.hp > 0) {
        enemy.hp -= player.dm * (1 - enemy.ar);
        player.st -= 2;
        document.getElementById("eh").innerHTML = enemy.hp.toFixed(1);
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value -= 2;
    }
    if (enemy.hp <= 0) {
        document.getElementById("modal").style.display = 'block';
        document.getElementById("battle").style.display = 'none';
        enemy.mh += 40;
        enemy.dm += 15;
        player.st = player.ms;
        player.hp = player.mh;
        enemy.hp = enemy.mh;
        enemy.lv++;
        player.xp += 5;
        player.gold += 10;

        document.getElementById("lv").innerHTML = enemy.lv;
        document.getElementById("ed").innerHTML = enemy.dm;
        document.getElementById("eh").innerHTML = enemy.hp.toFixed(1);
        document.getElementById("ph").innerHTML = player.hp;
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы одержали победу";
        document.getElementById("modal-expir").style.display = 'block';
        document.getElementById("modal-expir").innerHTML = "Получено " + 5 + " опыта";
        document.getElementById("modal-gold").style.display = 'block';
        document.getElementById("modal-gold").innerHTML = "Получено " + 10 + " золота";
        document.getElementById("gold").innerHTML = player.gold;
        document.querySelector("#training-1").style.display = "none";
    }
};


function beHealed() {
    if ((player.st - 1) && player.st && enemy.hp && player.hp > 0) {
        player.hp += 20;
        player.st -= 2;
        if (player.hp >= player.mh)(player.hp = player.mh);
        document.getElementById("ph").innerHTML = player.hp.toFixed(1);
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value -= 2;
    }

};


function Shield() {
    if (enemy.hp && player.hp > 0) {
        player.hp -= enemy.dm * (1 - player.ar);
        player.st += 1;
        document.getElementById("eh").innerHTML = enemy.hp;
        document.getElementById("ph").innerHTML = player.hp.toFixed(1);
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value++;
    }
    if (player.hp <= 0 && enemy.hp > 0) {
        document.getElementById("modal").style.display = 'block';
        document.getElementById("battle").style.display = 'none';
        player.st = player.ms;
        player.hp = player.mh;
        enemy.hp = enemy.mh;
        document.getElementById("eh").innerHTML = enemy.hp.toFixed(1);
        document.getElementById("ph").innerHTML = player.hp.toFixed(1);
        document.getElementById("ps").innerHTML = player.st;
        document.querySelector("#stamina-progress").value = player.ms;
        document.getElementById("modal-content").innerHTML = "Вы потерпели поражение";
        document.getElementById("modal-expir").style.display = 'none';
        document.getElementById("modal-gold").style.display = 'none';
        document.querySelector("#training-1").style.display = "none";
    }
};




function enterSkills() {
    document.getElementById("points").innerHTML = player.xp;
    document.getElementById("damageP").innerHTML = player.dm;
    document.getElementById("healthP").innerHTML = player.mh;
    document.getElementById("armorP").innerHTML = player.ar.toFixed(4);
    document.querySelector("#home").style.display = "none";
    document.querySelector("#skills").style.display = "block";
    document.querySelector("#skills").style.background = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#training-2").style.display = "block";

}
document.querySelector("#work").addEventListener('click', enterSkills);



function exitSkills() {
    document.querySelector("#skills").style.display = "none";
    document.querySelector("#home").style.display = "block";
    document.getElementById("ph").innerHTML = player.hp;
    document.getElementById("pd").innerHTML = player.dm;
    document.getElementById("pa").innerHTML = player.ar.toFixed(2);
    document.querySelector("#training-2").style.display = "none";
}
document.querySelector("#exitS").addEventListener('click', exitSkills);










function skillHealth() {
    if (player.xp > 0) {
        player.xp--;
        player.mh += 10;
        document.getElementById("healthP").innerHTML = player.mh;
        document.getElementById("points").innerHTML = player.xp;
    } else {
        alert("Не хватает опыта")
    }
}
document.querySelector("#hpplus").addEventListener('click', skillHealth);

function skillDamage() {
    if (player.xp > 0) {
        player.xp--;
        player.dm += 3;
        document.getElementById("damageP").innerHTML = player.dm;
        document.getElementById("points").innerHTML = player.xp;
    } else {
        alert("Не хватает опыта")
    }
}
document.querySelector("#damage").addEventListener('click', skillDamage);

function skillArmor() {
    if (player.xp > 0 && player.ar < 0.5) {
        player.xp--;
        player.ar += 0.0125;
        document.getElementById("armorP").innerHTML = player.ar.toFixed(4);
        document.getElementById("points").innerHTML = player.xp;
    } else {
        alert("Не хватает опыта")
    }
}
document.querySelector("#armor").addEventListener('click', skillArmor);




//inventar
// function exitInv() {
//     document.querySelector("#inventar").style.display = "none";
//     document.querySelector("#home").style.display = "block";
// }
// document.querySelector("#closeInv").addEventListener('click', exitInv);


//Меняющиеся картинки
// function changeImageEnemy() {
//     switch (true) {
//         case (enemy.lv >= 1 && enemy.lv <= 9):
//             document.getElementById("enemyImage").src = "img/1.jpg";
//             break;
//         case (enemy.lv >= 10 && enemy.lv <= 20):
//             document.getElementById("enemyImage").src = "img/Ordinary/4.jpg";
//             break;
//         case (enemy.lv >= 21 && enemy.lv <= 39):
//             document.getElementById("enemyImage").src = "img/2.jpg";
//             break;
//         case (enemy.lv >= 40 && enemy.lv <= 69):
//             document.getElementById("enemyImage").src = "img/Unusual/2.jpg";
//             break;
//         case (enemy.lv >= 70 && enemy.lv <= 99):
//             document.getElementById("enemyImage").src = "img/Unusual/3.jpg";
//             break;
//         case (enemy.lv >= 100 && enemy.lv <= 139):
//             document.getElementById("enemyImage").src = "img/Unusual/8.jpg";
//             alert(namePlayer + ", не ждала тебя здесь увидеть\nЧто ж, готовься к смерти")
//             break;
//         case (enemy.lv >= 140 && enemy.lv <= 199):
//             document.getElementById("enemyImage").src = "img/3.jpg";
//             break;
//         case (enemy.lv >= 200 && enemy.lv <= 259):
//             document.getElementById("enemyImage").src = "img/Rare/2.jpg";
//             break;
//         case (enemy.lv >= 260 && enemy.lv <= 309):
//             document.getElementById("enemyImage").src = "img/Rare/4.jpg";
//             break;
//         case (enemy.lv >= 310 && enemy.lv <= 369):
//             document.getElementById("enemyImage").src = "img/4.jpg";
//             break;
//         case (enemy.lv >= 370 && enemy.lv <= 449):
//             document.getElementById("enemyImage").src = "img/Epic/2.jpg";
//             break;
//         case (enemy.lv >= 450 && enemy.lv <= 539):
//             document.getElementById("enemyImage").src = "img/Epic/3.jpg";
//             break;
//         case (enemy.lv >= 540 && enemy.lv <= 609):
//             document.getElementById("enemyImage").src = "img/Epic/4.jpg";
//             break;
//         case (enemy.lv >= 610 && enemy.lv <= 709):
//             document.getElementById("enemyImage").src = "img/5.jpg";
//             break;
//         case (enemy.lv >= 710 && enemy.lv <= 809):
//             document.getElementById("enemyImage").src = "img/Legandary/4.jpg";
//             break;
//         case (enemy.lv >= 810 && enemy.lv <= 909):
//             document.getElementById("enemyImage").src = "img/Legandary/3.jpg";
//             break;
//     }

// }


//Магазин
// function shop() {
//     document.getElementById("gold").innerHTML = player.gold;
//     document.getElementById("shop").style.display = 'block';
//     document.getElementById("home").style.display = 'none';
//     if (i_1 == 1 && i_2 == 1 && i_3 == 1 && i_4 == 1 && i_5 == 1 && i_6 == 1 && i_7 == 1 && i_8 == 1) {
//         document.getElementById("cost").innerHTML = 350 + " монет";
//     } else if (i_1 == 0 && i_2 == 0 && i_3 == 0 && i_4 == 0 && i_5 == 0 && i_6 == 0 && i_7 == 0 && i_8 == 0) {
//         document.getElementById("cost").innerHTML = 50 + " монет";
//     }


// }

// document.querySelector('#shop-btn').addEventListener('click', shop);


// function exitShop() {
//     document.querySelector("#shop").style.display = "none";
//     document.querySelector("#home").style.display = "block";
// }
// document.querySelector("#closeShop").addEventListener('click', exitShop);

// i_1 = 0;
// i_2 = 0;
// i_3 = 0;
// i_4 = 0;
// i_5 = 0;
// i_6 = 0;
// i_7 = 0;
// i_8 = 0;

// function shopUpgrade() {
//     if (i_1 == 1 && i_2 == 1 && i_3 == 1 && i_4 == 1 && i_5 == 1 && i_6 == 1 && i_7 == 1 && i_8 == 1) {
//         document.querySelector("#imPlayerInv").innerHTML = "<img src='img/Unusual/4.jpg' height='270px' id='imgPlayer'>";
//         document.querySelector("#imPlayerShop").innerHTML = "<img src='img/Rare/1.jpg' height='270px' id='imgPlayer'>";
//
// document.querySelector("#battlePlayerImage").innerHTML = "<img src='img/Unusual/4.jpg' height='270px' id='battlePlayerImage'>";
// document.querySelector("#bossBattlePlayerImage").innerHTML = "<img src='img/Unusual/4.jpg width='160px' id='bossBattlePlayerImage'>";
//         document.getElementById("cost").innerHTML = 350 + " монет";
//         document.querySelector("#item_shop_1").innerHTML = "<img src='img/paladin_weapons/1.png'>";
//         document.querySelector("#item_shop_2").innerHTML = "<img src='img/paladin_weapons/2.png'>";
//         document.querySelector("#item_shop_3").innerHTML = "<img src='img/paladin_weapons/3.png'>";
//         document.querySelector("#item_shop_4").innerHTML = "<img src='img/paladin_weapons/4.png'>";
//         document.querySelector("#item_shop_5").innerHTML = "<img src='img/paladin_weapons/5.png'>";
//         document.querySelector("#item_shop_6").innerHTML = "<img src='img/paladin_weapons/6.png'>";
//         document.querySelector("#item_shop_7").innerHTML = "<img src='img/paladin_weapons/7.png'>";
//         document.querySelector("#item_shop_8").innerHTML = "<img src='img/paladin_weapons/8.png'>";
//     }
// }
//
// function item1() {
//     if (player.gold > 50 && i_1 !== 1) {
//         document.querySelector("#item_1").innerHTML = "<img src='img/knight_weapons/1.png'>";
//         document.querySelector("#item_shop_1").innerHTML = "&nbsp";
//         document.getElementById("item_1").style.height = "57px";
//         document.getElementById("item_shop_1").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_1 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;

//         shopUpgrade();

//     } else(alert("Не хватает золота"));

// if (player.gold > 350 && i_1 == 2) {
//     document.querySelector("#item_1").innerHTML = "<img src='img/paladin_weapons/1.png'>";
//     document.querySelector("#item_shop_1").innerHTML = "&nbsp";
//     document.getElementById("item_1").style.height = "57px";
//     document.getElementById("item_shop_1").style.height = "57px";
//     alert("Вы купили вещь" + "\nздоровье + 55" + "\nурон + 55");
//     player.hp += 55;
//     player.dm += 55;
//     player.gold -= 350;
//     i_1 = 1;
//     document.getElementById("statshp").innerHTML = player.hp;
//     document.getElementById("statsdm").innerHTML = player.dm;
//     document.getElementById("gold").innerHTML = player.gold;
//     document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//     document.getElementById("pd1").innerHTML = player.dm;
//     document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//     document.getElementById("pd").innerHTML = player.dm;
// }

// }
// document.querySelector("#item_shop_1").addEventListener('click', item1);

// function item2() {
//     if (player.gold > 50 && i_2 !== 1) {
//         document.querySelector("#item_2").innerHTML = "<img src='img/knight_weapons/2.png'>";
//         document.querySelector("#item_shop_2").innerHTML = "&nbsp";
//         document.getElementById("item_2").style.height = "57px";
//         document.getElementById("item_shop_2").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_2 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;

//         shopUpgrade();

//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_2").addEventListener('click', item2);

// function item3() {
//     if (player.gold > 50 && i_3 !== 1) {
//         document.querySelector("#item_3").innerHTML = "<img src='img/knight_weapons/3.png'>";
//         document.querySelector("#item_shop_3").innerHTML = "&nbsp";
//         document.getElementById("item_3").style.height = "57px";
//         document.getElementById("item_shop_3").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_3 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;

//         shopUpgrade();

//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_3").addEventListener('click', item3);

// function item4() {
//     if (player.gold > 50 && i_4 !== 1) {
//         document.querySelector("#item_4").innerHTML = "<img src='img/knight_weapons/4.png'>";
//         document.querySelector("#item_shop_4").innerHTML = "&nbsp";
//         document.getElementById("item_4").style.height = "57px";
//         document.getElementById("item_shop_4").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_4 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;


//         shopUpgrade();

//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_4").addEventListener('click', item4);

// function item5() {
//     if (player.gold > 50 && i_5 !== 1) {
//         document.querySelector("#item_5").innerHTML = "<img src='img/knight_weapons/5.png'>";
//         document.querySelector("#item_shop_5").innerHTML = "&nbsp";
//         document.getElementById("item_5").style.height = "57px";
//         document.getElementById("item_shop_5").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_5 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;


//         shopUpgrade();

//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_5").addEventListener('click', item5);

// function item6() {
//     if (player.gold > 50 && i_6 !== 1) {
//         document.querySelector("#item_6").innerHTML = "<img src='img/knight_weapons/6.png'>";
//         document.querySelector("#item_shop_6").innerHTML = "&nbsp";
//         document.getElementById("item_6").style.height = "57px";
//         document.getElementById("item_shop_6").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_6 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;


//         shopUpgrade();

//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_6").addEventListener('click', item6);

// function item7() {
//     if (player.gold > 50 && i_7 !== 1) {
//         document.querySelector("#item_7").innerHTML = "<img src='img/knight_weapons/7.png'>";
//         document.querySelector("#item_shop_7").innerHTML = "&nbsp";
//         document.getElementById("item_7").style.height = "57px";
//         document.getElementById("item_shop_7").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_7 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;


//         shopUpgrade();

//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_7").addEventListener('click', item7);

// function item8() {
//     if (player.gold > 50 && i_8 !== 1) {
//         document.querySelector("#item_8").innerHTML = "<img src='img/knight_weapons/8.png'>";
//         document.querySelector("#item_shop_8").innerHTML = "&nbsp";
//         document.getElementById("item_8").style.height = "57px";
//         document.getElementById("item_shop_8").style.height = "57px";
//         alert("Вы купили вещь" + "\nздоровье + 15" + "\nурон + 15");
//         player.hp += 15;
//         player.dm += 15;
//         player.gold -= 50;
//         i_8 = 1;
//         document.getElementById("statshp").innerHTML = player.hp;
//         document.getElementById("statsdm").innerHTML = player.dm;
//         document.getElementById("gold").innerHTML = player.gold;
//         document.getElementById("ph1").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd1").innerHTML = player.dm;
//         document.getElementById("ph").innerHTML = player.hp.toFixed(0);
//         document.getElementById("pd").innerHTML = player.dm;


//         shopUpgrade();
//     } else {
//         alert("Не хватает золота")
//     }
// }
// document.querySelector("#item_shop_8").addEventListener('click', item8);