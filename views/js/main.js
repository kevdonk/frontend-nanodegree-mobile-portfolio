function getAdj(e){switch(e){case"dark":return dark;case"color":return colors;case"whimsical":return whimsy;case"shiny":return shiny;case"noisy":return noisy;case"apocalyptic":return apocalyptic;case"insulting":return insulting;case"praise":return praise;case"scientific":return scientific;default:return scientific}}function getNoun(e){switch(e){case"animals":return animals;case"profession":return professions;case"fantasy":return fantasy;case"music":return music;case"horror":return horror;case"gross":return gross;case"everyday":return everyday;case"jewelry":return jewelry;case"places":return places;case"scifi":return scifi;default:return scifi}}function generator(e,a){var r=getAdj(e),n=getNoun(a),i=parseInt(Math.random()*r.length),t=parseInt(Math.random()*n.length),o="The "+r[i].capitalize()+" "+n[t].capitalize();return o}function randomName(){var e=parseInt(Math.random()*adjectives.length),a=parseInt(Math.random()*nouns.length);return generator(adjectives[e],nouns[a])}function logAverageFrame(e){for(var a=e.length,r=0,n=a-1;n>a-11;n--)r+=e[n].duration;console.log("Average time to generate last 10 frames: "+r/10+"ms")}function onScroll(){lastKnownScrollY=window.scrollY,requestTick()}function requestTick(){ticking||requestAnimationFrame(updatePositions),ticking=!0}function updatePositions(){ticking=!1,frame++,window.performance.mark("mark_start_frame");for(var e=document.querySelectorAll(".mover"),a=lastKnownScrollY,r=0,n=e.length;n>r;r++){var i=Math.sin(a/1250+r%5);e[r].style.transform="translateX("+100*i+"px)"}if(window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10===0){var t=window.performance.getEntriesByName("measure_frame_duration");logAverageFrame(t)}}var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"];var dark=["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"],colors=["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"],whimsy=["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"],shiny=["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"],noisy=["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"],apocalyptic=["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"],insulting=["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"],praise=["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"],scientific=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"],animals=["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"],professions=["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"],fantasy=["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"],music=["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"],horror=["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"],gross=["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"],everyday=["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"],jewelry=["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"],places=["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"],scifi=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var adjectives=["dark","color","whimsical","shiny","noise","apocalyptic","insulting","praise","scientific"],nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"],selectRandomMeat=function(){var e=pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)];return e},selectRandomNonMeat=function(){var e=pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)];return e},selectRandomCheese=function(){var e=pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)];return e},selectRandomSauce=function(){var e=pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)];return e},selectRandomCrust=function(){var e=pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)];return e},ingredientItemizer=function(e){return"<li>"+e+"</li>"},makeRandomPizza=function(){for(var e="",a=Math.floor(4*Math.random()),r=Math.floor(3*Math.random()),n=Math.floor(2*Math.random()),i=0;a>i;i++)e+=ingredientItemizer(selectRandomMeat());for(var i=0;r>i;i++)e+=ingredientItemizer(selectRandomNonMeat());for(var i=0;n>i;i++)e+=ingredientItemizer(selectRandomCheese());return e+=ingredientItemizer(selectRandomSauce()),e+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(e){var a,r,n,i,t,o;return a=document.createElement("div"),r=document.createElement("div"),n=document.createElement("img"),i=document.createElement("div"),a.classList.add("randomPizzaContainer"),a.style.width="33.33%",a.style.height="325px",a.id="pizza"+e,r.classList.add("col-md-6"),n.src="images/pizza.png",n.classList.add("img-responsive"),r.appendChild(n),a.appendChild(r),i.classList.add("col-md-6"),t=document.createElement("h4"),t.innerHTML=randomName(),i.appendChild(t),o=document.createElement("ul"),o.innerHTML=makeRandomPizza(),i.appendChild(o),a.appendChild(i),a},resizePizzas=function(e){function a(e){switch(e){case"1":return void(document.querySelector("#pizzaSize").innerHTML="Small");case"2":return void(document.querySelector("#pizzaSize").innerHTML="Medium");case"3":return void(document.querySelector("#pizzaSize").innerHTML="Large");default:console.log("bug in changeSliderLabel")}}function r(e,a){function r(e){switch(e){case"1":return.25;case"2":return.3333;case"3":return.5;default:console.log("bug in sizeSwitcher")}}var n=e.offsetWidth,i=document.querySelector("#randomPizzas").offsetWidth,t=n/i,o=r(a),s=(o-t)*i;return s}function n(e){for(var a=document.querySelectorAll(".randomPizzaContainer"),n=r(a[0],e),i=a[0].offsetWidth+n+"px",t=0,o=a.length;o>t;t++)a[t].style.width=i}window.performance.mark("mark_start_resize"),a(e),n(e),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var i=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+i[0].duration+"ms")};window.performance.mark("mark_start_generating");for(var pizzasDiv=document.getElementById("randomPizzas"),i=2;100>i;i++)pizzasDiv.appendChild(pizzaElementGenerator(i));window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0,lastKnownScrollY=0,ticking=!1;window.addEventListener("scroll",onScroll,!1),document.addEventListener("DOMContentLoaded",function(){for(var e=8,a=256,r=document.querySelector("#movingPizzas1"),n=0;200>n;n++){var i=document.createElement("img");i.className="mover",i.src="images/moverpizza.png",i.style.height="100px",i.style.width="73.333px",i.basicLeft=n%e*a,i.style.left=i.basicLeft+"px",i.style.top=Math.floor(n/e)*a+"px",r.appendChild(i)}updatePositions()});