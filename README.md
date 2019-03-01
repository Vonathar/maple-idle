**In this testing version, clicking the enemy will not ATTACK - it will KILL him instead.**

Live version: https://vonathar.github.io/maple-idle/

Current TO-DO: 

  1. Fix the CSS to work on every screen
  
    1.1 Fix the animation of the enemies to be fluid instead of PointA->PointB
  
  2. Add a Skill Point / Class system
  
    2.1 Add SP whenever the user levels up
    2.2 Create a skill window
    
  3. Modify the taming system
  
    3.1 Monsters deal DPS (Damage Per Second)
    3.2 The monsters can be evolved when they reach the right level (30, 65, 100)
    3.3 The monsters have a varying taming chance (must add a tamingMultiplier property to instances of Enemy)
    3.4 Enemies spawn with a random level between their level and the Min.level of the enemy that comes in the next stage (1-5, 5-10, 10-15 etc.)
    3.5 When 3 pets are held and the user attempts to tame a 4th one, he is asked which one he would like to replace and its level gets reset to 1
    
  4. Fix the upgrade menu
  
    4.1 Users can upgrade their taming luck (multiplier property of the player object)
    4.2 Implement the upgrade for 2x click chance
    
  5. Overall game mechanics
  
    5.1 Some monsters will spawn with a golden aura, making them 5x harder to kill but drop 20x the gold
    5.2 Implement a drop system from enemies (each enemy drops a few items with a varying rarity)
    5.2.1 Quests will be given in each stage, to drop a set amount of items from the mob (2x easy, 1x hard)