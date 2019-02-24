/* 

To-do:
      1. Import from DOM all upgrade elements (6x2);
      2. Create a general function to upgrade a parameter in exchange of a cost

 */

// Importing from the DOM all the elements which get modified by JS
let attackValueParagraph = document.querySelector("#attackValueParagraph");
let dpsParagraph = document.querySelector("#dspParagraph");
let epsParagraph = document.querySelector("#epsParagraph");
let coinsParagraph = document.querySelector("#coinsParagraph");
let tamingCardsAmountParagraph = document.querySelector("#tamingCardsAmountParagraph");
let tamingCardsDropParagraph = document.querySelector("#tamingCardsDropParagraph");
let tamingChanceParagraph = document.querySelector("#tamingChanceParagraph");
let enemyImage = document.querySelector("#enemyImage");
let enemyHealthBar = document.querySelector("#enemyHealthBar");
let enemyNameParagraph = document.querySelector("#enemyNameParagraph");
let currentLevelParagraph = document.querySelector("#currentLevelParagraph");
let experienceBar = document.querySelector("#experienceBar");
let weaponUpgradeIcon = document.querySelector("#weaponUpgradeIcon");
let weaponUpgradePriceParagraph = document.querySelector("#weaponUpgradePrice");
let weaponUpgradeLevelParagraph = document.querySelector("#weaponUpgradeLevelParagraph");
let helmetUpgradeIcon = document.querySelector("#helmetUpgradeIcon");
let helmetUpgradePriceParagraph = document.querySelector("#helmetUpgradePrice");
let helmetUpgradeLevelParagraph = document.querySelector("#helmetUpgradeLevelParagraph");
let accessoryUpgradeIcon = document.querySelector("#accessoryUpgradeIcon");
let accessoryUpgradePriceParagraph = document.querySelector("#accessoryUpgradePrice");
let accessoryUpgradeLevelParagraph = document.querySelector("#accessoryUpgradeLevelParagraph");
let magicUpgradeIcon = document.querySelector("#magicUpgradeIcon");
let magicUpgradePriceParagraph = document.querySelector("#magicUpgradePrice");
let magicUpgradeLevelParagraph = document.querySelector("#magicUpgradeLevelParagraph");
let thiefUpgradeIcon = document.querySelector("#thiefUpgradeIcon");
let thiefUpgradePriceParagraph = document.querySelector("#thiefUpgradePrice");
let thiefUpgradeLevelParagraph = document.querySelector("#thiefUpgradeLevelParagraph");




// The object used to keep all the main stats of the player
let player = {
   currentLevel: 1,
   currentExperience: 0,
   requiredExperience: 5,
   attackPower: 7,
   petDamage: 0,
   tamingCardsDropRate: 0.7,
   tamingLuck: 1,
   doubleClickChance: 0,
}

refreshStats = () => {
   attackValueParagraph.textContent = "ATK Power: " + player.attackPower;
}


// The object used to keep all the main stats of the enemy
let enemy = {
   level: 1,
   health: 50,
   maxHealth: 50,
   name: "Dino",
}

// The object used to keep all the inventory-related values
let inventory = {
   currentTamingCards: 0,
   currentCoins: 0,
   coinsMultiplier: 1,
}

// The main functions used to alter the inventory values

let refreshInventory = () => {
   coinsParagraph.textContent = ("Munney: " + inventory.currentCoins);
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
      refreshInventory();
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
      refreshInventory();
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
      refreshInventory();
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
      refreshInventory();
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
      refreshInventory();
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


// The main functions used to alter the values of the player

// Increase player level
function levelUp(){
   player.currentLevel += 1;
   player.currentExperience -= player.requiredExperience;
   player.requiredExperience += player.currentLevel * 3.3;
   currentLevelParagraph.textContent = "Level " + player.currentLevel;
   experienceBar.max = player.requiredExperience;
}

// Series of events to happen upon killing an enemy

function killEnemy() {
   generateEnemy();
   addPlayerMoney();
   addPlayerExperience();
   computeAllDrops();
}

// Add XP and level up until XP<XP Req,then update content in DOM
function addPlayerExperience() {
   player.currentExperience += enemy.level + (enemy.level * 1);
   while (player.currentExperience >= player.requiredExperience) {
      levelUp();
   }
      experienceBar.value = player.currentExperience;
      currentLevelParagraph.textContent = "Level " + player.currentLevel;
}

// Remove HP from the enemy, and if the enemy dies, a new one is made and the player is rewarded XP
function attackEnemy() {
   enemy.health -= player.attackPower;
   enemyHealthBar.value = enemy.health;
   if (enemy.health <= 0) {
      killEnemy();
   }
}

// Enemy-related functions

function generateEnemy() {
   enemy.health = enemy.maxHealth;
   enemyHealthBar.max = enemy.health;
   enemyHealthBar.value = enemy.maxHealth;
   enemyNameParagraph.textContent = "Lv. " + enemy.level + " " + enemy.name;
}

// Inventory- and drop-related functions

// Takes 1 parameter, the chance to drop (expressed in % with a max of 100), returns 'true' if the item should drop
function checkForDrop(chance){
   x = Math.floor(Math.random() * 101);
   if (chance >= x) {
      return true
   }
   
   else return false;
}

function computeAllDrops(){
   if (checkForDrop(player.tamingCardsDropRate) == true) {
      dropTamingCard();
   }
}

// Item-related drop functions
function dropTamingCard(){
   inventory.currentTamingCards += 1;
   tamingCardsAmountParagraph.textContent = "T Cards: " + inventory.currentTamingCards;
}


// Adds money in relation to the level of the enemy killed, updates the DOM
function addPlayerMoney(){
   inventory.currentCoins += (Math.floor((Math.random() * 5 + 1) * inventory.coinsMultiplier));
   coinsParagraph.textContent = "Munney: " + inventory.currentCoins;
}

//TESTING AREA BELOW - NOT PART OF THE CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function hyperAttack() {
   for (i = 0; i <= 50; i++) {
      killEnemy();
   }
}

enemyImage.addEventListener("click", hyperAttack);









