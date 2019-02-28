/* 

To-do:
      Add new enemies to the array following the argument list passed for the first enemy
      Allow to player to iterate through the enemies by clicking on the back/forward arrows

 */

// Importing from the DOM
const attackValueParagraph = document.querySelector("#attackValueParagraph");
const dpsParagraph = document.querySelector("#dspParagraph");
const epsParagraph = document.querySelector("#epsParagraph");
const coinsParagraph = document.querySelector("#coinsParagraph");
const tamingCardsAmountParagraph = document.querySelector("#tamingCardsAmountParagraph");
const tamingCardsDropParagraph = document.querySelector("#tamingCardsDropParagraph");
const tamingChanceParagraph = document.querySelector("#tamingChanceParagraph");
const enemyImage = document.querySelector("#enemyImage");
const enemyHealthBar = document.querySelector("#enemyHealthBar");
const enemyNameParagraph = document.querySelector("#enemyNameParagraph");
const currentLevelParagraph = document.querySelector("#currentLevelParagraph");
const experienceBar = document.querySelector("#experienceBar");
const weaponUpgradeIcon = document.querySelector("#weaponUpgradeIcon");
const weaponUpgradePriceParagraph = document.querySelector("#weaponUpgradePrice");
const weaponUpgradeLevelParagraph = document.querySelector("#weaponUpgradeLevelParagraph");
const helmetUpgradeIcon = document.querySelector("#helmetUpgradeIcon");
const helmetUpgradePriceParagraph = document.querySelector("#helmetUpgradePrice");
const helmetUpgradeLevelParagraph = document.querySelector("#helmetUpgradeLevelParagraph");
const accessoryUpgradeIcon = document.querySelector("#accessoryUpgradeIcon");
const accessoryUpgradePriceParagraph = document.querySelector("#accessoryUpgradePrice");
const accessoryUpgradeLevelParagraph = document.querySelector("#accessoryUpgradeLevelParagraph");
const magicUpgradeIcon = document.querySelector("#magicUpgradeIcon");
const magicUpgradePriceParagraph = document.querySelector("#magicUpgradePrice");
const magicUpgradeLevelParagraph = document.querySelector("#magicUpgradeLevelParagraph");
const thiefUpgradeIcon = document.querySelector("#thiefUpgradeIcon");
const thiefUpgradePriceParagraph = document.querySelector("#thiefUpgradePrice");
const thiefUpgradeLevelParagraph = document.querySelector("#thiefUpgradeLevelParagraph");
const nextEnemyButton = document.querySelector("#nextEnemyButton");
const previousEnemyButton = document.querySelector("#previousEnemyButton");
const enemiesToKillParagraph = document.querySelector("#enemiesToKillParagraph");




// The object of                                                         --> THE PLAYER <--
let player = {
   currentLevel: 1,
   currentExperience: 0,
   requiredExperience: 5,
   attackPower: 7,
   petDamage: 0,
   tamingCardsDropRate: 0.7,
   tamingLuck: 1,
   doubleClickChance: 0,
   
   // Increase player level
   levelUp() {
      player.currentLevel += 1;
      player.currentExperience -= player.requiredExperience;
      player.requiredExperience += player.currentLevel * 3.3;
      currentLevelParagraph.textContent = "Level " + player.currentLevel;
      experienceBar.max = player.requiredExperience;
   },
   
   // Add XP and level up until XP<XP Req,then update content in DOM
   addExperience() {
      player.currentExperience += enemy._level + (enemy._level * 1);
      while (player.currentExperience >= player.requiredExperience) {
         player.levelUp();
      }
      experienceBar.value = player.currentExperience;
      currentLevelParagraph.textContent = "Level " + player.currentLevel;
   },
   
// Remove HP from the enemy; if the enemy dies, a new one is made and the player is rewarded XP
   attackEnemy() {
      enemy._health -= player.attackPower;
      enemyHealthBar.value = enemy._health;
      if (enemy._health <= 0) {
         enemy.die();
      }
   },
}

refreshStats = () => {
   attackValueParagraph.textContent = "ATK Power: " + player.attackPower;
}




// The object of                                                         --> THE ENEMY <--
class Enemy {
   constructor(level, health, name, image) {
      this._level = level;
      this._health = health;
      this._maxHealth = health;
      this._name = name;
      this._image = image;
   }
   
   die() {
      this._health = this._maxHealth;
      enemyHealthBar.max = this._maxHealth;
      enemyHealthBar.value = this._health;
      enemyNameParagraph.textContent = "Lv. " + this._level + " " + this._name;
      player.addExperience();
      inventory.addMoney();
      inventory.computeAllDrops();
      
      if (currentStage._enemiesToKill > currentStage._enemiesKilled) {
         currentStage._enemiesKilled ++;
         enemiesToKillParagraph.textContent = "Stage " + currentStage._stageLevel + " - Killed " + currentStage._enemiesKilled + "/" + currentStage._enemiesToKill;
      }
      
      if (currentStage._enemiesKilled >= currentStage._enemiesToKill) {
         currentStage._isCompleted = true;
         stagesArray[stagesArray.indexOf(currentStage)]._isCompleted = true;
      }
   }
   
   static next() {
      if (enemiesArray.indexOf(enemy) < enemiesArray.length - 1) {
         let i = 1 + enemiesArray.indexOf(enemy);
         enemy = enemiesArray[i];
         enemyImage.src = enemy._image;
         enemyNameParagraph.textContent = "Lv. " + enemy._level + " " + enemy._name;
         enemyHealthBar.value = enemy._health;
         enemyHealthBar.max = enemy._health;
      }
      
      else console.log("There are no more enemies.");
   }
   
   static previous() {
      if (enemiesArray.indexOf(enemy) > 0) {
         let i = enemiesArray.indexOf(enemy) - 1;
         enemy = enemiesArray[i];
         enemyImage.src = enemy._image;
         enemyNameParagraph.textContent = "Lv. " + enemy._level + " " + enemy._name;
         enemyHealthBar.value = enemy._health;
         enemyHealthBar.max = enemy._health;
      }
   }

   
}

let enemiesArray = [
   (new Enemy(1, 50, "Lizard", "enemies/1_0.png")),
   (new Enemy(5, 300, "Hippo", "enemies/2_0.png")),
   (new Enemy(10, 700, "Leo", "enemies/3_0.png")),
   (new Enemy(15, 1500, "Draco", "enemies/4_0.png")),
   (new Enemy(20, 2200, "Devilo", "enemies/5_0.png")),
   (new Enemy(25, 2800, "Catso", "enemies/6_0.png")),
];



let enemy = enemiesArray[0];






// The object of                                                         --> THE STAGE <--
class Stage {
   constructor (stageLevel, enemiesToKill, enemiesKilled, isCompleted) {
      this._stageLevel = stageLevel;
      this._enemiesToKill = enemiesToKill;
      this._enemiesKilled = enemiesKilled;
      this._isCompleted = isCompleted;
   }
   
   static complete(stageCompleted) {
      stageCompleted._isCompleted = true;
      stagesArray[stagesArray.indexOf(stageCompleted)]._isCompleted = true;
   }
   
   static next() {
      if (stagesArray[stagesArray.indexOf(currentStage) + 1] != null) {
         if (stagesArray[stagesArray.indexOf(currentStage)]._isCompleted === true) {
            let i = stagesArray.indexOf(currentStage);
            currentStage = stagesArray[i + 1];
            enemiesToKillParagraph.textContent = "Stage " + currentStage._stageLevel + " - Killed " + currentStage._enemiesKilled + "/" + currentStage._enemiesToKill;
            
            Enemy.next();
         }
      }
   }
   
   static previous(){
      if (stagesArray[stagesArray.indexOf(currentStage) - 1] != null){
         let i = stagesArray.indexOf(currentStage);
         currentStage = stagesArray[i - 1];
         enemiesToKillParagraph.textContent = "Stage " + currentStage._stageLevel + " - Killed " + currentStage._enemiesKilled + "/" + currentStage._enemiesToKill;
         Enemy.previous();
      }
   }
}

let stagesArray = [
   (new Stage(1, 10, 0, false)),
   (new Stage(2, 10, 0, false)),
   (new Stage(3, 10, 0, false)),
   (new Stage(4, 10, 0, false)),
   (new Stage(5, 10, 0, false)),
   (new Stage(6, 10, 0, false)),
];

let currentStage = stagesArray[0];













// The object of                                                         --> THE INVENTORY <--
let inventory = {
   currentTamingCards: 0,
   currentCoins: 0,
   coinsMultiplier: 1,

   // Adds money when killing an enemy   
   addMoney() {
      this.currentCoins += (Math.floor((Math.random() * (enemy._level + 5) * 1.7) * this.coinsMultiplier));
      coinsParagraph.textContent = "Munney: " + this.currentCoins;
   },
   
   // Takes 1 parameter, the chance to drop (expressed in % with a max of 100), returns 'true' if the item should drop
   checkForDrop(chance){
      x = Math.floor(Math.random() * 101);
      if (chance >= x) {
         return true
      }
      
      else return false;
   },
   
   // Adds a taming card
   dropTamingCard(){
      inventory.currentTamingCards += 1;
      tamingCardsAmountParagraph.textContent = "T Cards: " + inventory.currentTamingCards;
   },
   
   // Assign a random chance to every item to drop whenever an enemy is killed
   computeAllDrops(){
      if (this.checkForDrop(player.tamingCardsDropRate) == true) {
         this.dropTamingCard();
      }
   },
   
   // Updats the value of the coins/inventory values in the DOM
   refresh() {
      coinsParagraph.textContent = ("Munney: " + inventory.currentCoins);
   },
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

let upgradeLevel = {
   weapon: 1,
   helmet: 1,
   accessory: 1,
   tamingLuck: 1,
   coinLuck: 1,
}

let upgradeCost = {
   weapon: 25,
   helmet: 25,
   accessory: 25,
   tamingLuck: 500,
   coinLuck: 500,
}

// Upgrade the WEAPON/ATK POWER

upgradeWeapon = () => {
   if (inventory.currentCoins >= upgradeCost.weapon) {
      inventory.currentCoins -= upgradeCost.weapon;
      inventory.refresh();
      player.attackPower += upgradeLevel.weapon * 2;
      refreshStats();
      upgradeLevel.weapon += 1;
      upgradeCost.weapon *= 2;
      weaponUpgradePriceParagraph.textContent = ("Price: " + upgradeCost.weapon);
      weaponUpgradeLevelParagraph.textContent = ("Lv. " + upgradeLevel.weapon);
   }
   
   else alert("Not enough money!");
};

upgradeHelmet = () => {
   if (inventory.currentCoins >= upgradeCost.helmet) {
      inventory.currentCoins -= upgradeCost.helmet;
      inventory.refresh();
      player.petDamage += upgradeLevel.helmet * 2;
      refreshStats();
      upgradeLevel.helmet += 1;
      upgradeCost.helmet *= 2;
      helmetUpgradePriceParagraph.textContent = ("Price: " + upgradeCost.helmet);
      helmetUpgradeLevelParagraph.textContent = ("Lv. " + upgradeLevel.helmet);
   }
   
   else alert("Not enough money!");
};

upgradeAccessory = () => {
   if (inventory.currentCoins >= upgradeCost.accessory) {
      inventory.currentCoins -= upgradeCost.accessory;
      inventory.refresh();
      player.doubleClickChance += 0.3;
      console.log("Remember to DELETE ME!!!!!!!!!!, but, current doubleClickChance: " + player.doubleClickChance);
      refreshStats();
      upgradeLevel.accessory += 1;
      upgradeCost.accessory *= 2;
      accessoryUpgradePriceParagraph.textContent = ("Price: " + upgradeCost.accessory);
      accessoryUpgradeLevelParagraph.textContent = ("Lv. " + upgradeLevel.accessory);
   }
   
   else alert("Not enough money!");
};

upgradeTamingLuck = () => {
   if (inventory.currentCoins >= upgradeCost.tamingLuck) {
      inventory.currentCoins -= upgradeCost.tamingLuck;
      inventory.refresh();
      player.tamingLuck += 0.3;
      console.log("Remember to DELETE ME!!!!!!!!!!, but, current tamingLuck: " + player.tamingLuck);
      refreshStats();
      upgradeLevel.tamingLuck += 1;
      upgradeCost.tamingLuck *= 2;
      magicUpgradePriceParagraph.textContent = ("Price: " + upgradeCost.tamingLuck);
      magicUpgradeLevelParagraph.textContent = ("Lv. " + upgradeLevel.tamingLuck);
   }
   
   else alert("Not enough money!");
};

upgradeCoinLuck = () => {
   if (inventory.currentCoins >= upgradeCost.coinLuck) {
      inventory.currentCoins -= upgradeCost.coinLuck;
      inventory.refresh();
      inventory.coinsMultiplier += 0.3;
      console.log("Remember to DELETE ME!!!!!!!!!!, but, current coinsMultiplier: " + inventory.coinsMultiplier);
      refreshStats();
      upgradeLevel.coinLuck += 1;
      upgradeCost.coinLuck *= 2;
      thiefUpgradePriceParagraph.textContent = ("Price: " + upgradeCost.coinLuck);
      thiefUpgradeLevelParagraph.textContent = ("Lv. " + upgradeLevel.coinLuck);
   }
   
   else alert("Not enough money!");
};


// Upgrade buttons - EVENT LISTENERS

weaponUpgradeIcon.addEventListener("click", upgradeWeapon);
helmetUpgradeIcon.addEventListener("click", upgradeHelmet);
accessoryUpgradeIcon.addEventListener("click", upgradeAccessory);
magicUpgradeIcon.addEventListener("click", upgradeTamingLuck);
thiefUpgradeIcon.addEventListener("click", upgradeCoinLuck);

//Enemy event listeners

nextEnemyButton.addEventListener("click", Stage.next);
previousEnemyButton.addEventListener("click", Stage.previous);



//TESTING AREA BELOW - NOT PART OF THE CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function hyperAttack() {
      enemy.die();
}

enemyImage.addEventListener("click", hyperAttack);









