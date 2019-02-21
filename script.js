// Importing from the DOM all the elements which get modified by JS
let attackValueParagraph = document.querySelector("#attackValueParagraph");
let dpsParagraph = document.querySelector("#dspParagraph");
let epsParagraph = document.querySelector("#epsParagraph");
let coinsParagraph = document.querySelector("#coinsParagraph");
let tamingCardsAmountParagraph = document.querySelector("#tamingCardsAmountParagraph");
let tamingCardsDropParagraph = document.querySelector("#tamingCardsDropParagraph");
let enemyImage = document.querySelector("#enemyImage");
let enemyHealthBar = document.querySelector("#enemyHealthBar");
let enemyNameParagraph = document.querySelector("#enemyNameParagraph");
let currentLevelParagraph = document.querySelector("#currentLevelParagraph");
let experienceBar = document.querySelector("#experienceBar");

// The object used to keep all the main stats of the player
let player = {
   currentLevel: 1,
   currentExperience: 0,
   requiredExperience: 5,
   attackPower: 1,
   tamingCardsDropRate: 0.7,
}

// The object used to keep all the main stats of the enemy
let enemy = {
   level: 1,
   health: 5,
   maxHealth: 5,
   name: "Dino",
}

// The object used to keep all the inventory-related values
let inventory = {
   currentTamingCards: 0,
   currentCoins: 0,
}

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
   inventory.currentCoins += Math.floor(Math.random() * 5 + 1);
   coinsParagraph.textContent = "Munney: " + inventory.currentCoins;
}

//TESTING AREA BELOW - NOT PART OF THE CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

enemyImage.addEventListener("click", attackEnemy);









