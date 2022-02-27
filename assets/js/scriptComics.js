
var infinityBtn = document.getElementById("infinityBtn");
var phoenixBtn = document.getElementById("phoenixBtn");
var gwenBtn = document.getElementById("gwenBtn");
var cwarBtn = document.getElementById("cwarBtn");
var apocBtn = document.getElementById("apocBtn");
var secretwBtn = document.getElementById("secretwBtn");
var dareBtn = document.getElementById("dareBtn");
var fantasticBtn = document.getElementById("fantasticBtn");
var annBtn = document.getElementById("annBtn");
var futureBtn = document.getElementById("futureBtn");
var comicContainer = document.getElementById("comicContainer");
var comicDescription = document.getElementById('comic-descrip');

infinityBtn.addEventListener("click", infinitySection)
function infinitySection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://images-na.ssl-images-amazon.com/images/I/91eKIXy+sUL.jpg";
  comicImage.alt="Infinity Gauntlet";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "The Infinity Gauntlet";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "At the start of The Infinity Gauntlet, the character Thanos has collected all six Infinity Gems and attached them to his gauntlet. With their combined power, he becomes like a god and sets out to win the affection of Mistress Death, the living embodiment of death in the Marvel Universe."
  
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.2";
  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1991";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Avengers", " Adam Warlock", " Mephisto", " Thanos", " Silver Surfer", " Nebula"]
}

phoenixBtn.addEventListener("click", phoenixSection)
function phoenixSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1076883.jpg";
  comicImage.alt="X-Men: The Dark Phoenix Saga";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "X-Men: The Dark Phoenix Saga";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely Now they must decide if the life of the woman they cherish is worth the existence of the entire universe."
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.4";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1963-2011";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Wolverine", " Doctor Strange", " Fantastic Four", " X-men"]
}

gwenBtn.addEventListener("click", gwenSection)
function gwenSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://pictures.abebooks.com/inventory/30734392023.jpg";
  comicImage.alt="The Night Gwen Stacy Died";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);
  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "The Amazing Spider-man: The Night Gwen Stacy Died";

  var description = document.createElement("h2");
  
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "Peter, his girlfriend Gwen Stacy, and acquaintance Mary Jane Watson visit Harry, who is in a sorry state. His father Norman is livid about Harry's condition, blames Peter, Gwen, and Mary Jane for Harry's drug abuse, and throws them out. When Norman hears that he is facing financial ruin, he suffers a breakdown, and suddenly remembers everything. Norman again becomes the Green Goblin and makes it his goal to kill Peter/Spider-Man for all the misery he imagines Spider-Man has caused him and his family."
  
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.0";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1973";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Spider-man", " Gwen Stacy", " Green Goblin", " Mary Jane Watson", " The Vulture"];
}


cwarBtn.addEventListener("click", cwarSection)
function cwarSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://i.annihil.us/u/prod/marvel/i/mg/a/c0/56feb8967e8e3/clean.jpg";
  comicImage.alt="Civil War";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "Civil War";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "The superheroes who support the law, including Mister Fantastic and Ms. Marvel, become increasingly authoritarian. Civil War explores the conflict between freedom and security against a backdrop of real-life events and discussions, such as the U.S. government's increased surveillance of its citizens."
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.2";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 2006-07";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Iron Man", " Captain America", " Avengers", " Spider-man", " Fantastic Four"]
}

apocBtn.addEventListener("click", apocSection)
function apocSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://i.annihil.us/u/prod/marvel/i/mg/3/b0/56b4f029907c5/clean.jpg";
  comicImage.alt="X-Men: The Age of Apocalypse";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "X-Men: The Age of Apocalypse";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "In a twisted version of the world they knew, the X-Men battle against the eternal mutant Apocalypse as Bishop seeks to repair the timeline. Legion, Xavier's own son, attempts to kill off all of Xavier's enemies; however, when Legion attempts to murder Magneto, Xavier sacrifices his own life to save Magnus. As a result, Magneto casts off his anti-human sentiments and carries on Xavier's dream of peaceful co-existence, thereby founding the X-Men."
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.4/10 GoodReads";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1995";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["X-Men", " Magneto", " Legion"]
}

secretwBtn.addEventListener("click", secretwSection)
function secretwSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2787632.jpg";
  comicImage.alt="Secret Wars";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "Marvel Super Heroes: Secret Wars";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "The first mega-crossover of its kind, Secret Wars still stands as a milestone in the comic-book industry. The fate of the entire Marvel Universe hangs in the balance as all of Earth's greatest super heroes face their deadliest foes on the mysterious planet known as Battleworld!"
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 7.4/10 GoodReads";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1984-85";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Avengers", " Fantastic Four", " X-Men" , " Spider-Man", " Hulk", " Doctor Doom"];
}

dareBtn.addEventListener("click", dareSection)
function dareSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://images-na.ssl-images-amazon.com/images/I/81R6r1Ql8GL.jpg";
  comicImage.alt="Daredevil: Born Again";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "Daredevil: Born Again";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "Karen Page, the former secretary of the Nelson & Murdock law offices in New York City and ex-girlfriend of Matt Murdock, had left years earlier to pursue an acting career. After a brief period of success, she became a heroin addict and was reduced to starring in pornographic films in Mexico. Strapped for cash, she sells the information that Matt is Daredevil for a shot of heroin. This information is sold upward to the Kingpin. Over the next six months, the Kingpin uses his influence to have the IRS freeze Murdock's accounts, the bank foreclose on his apartment, and police lieutenant Nicholas Manolis testify that he saw Murdock pay a witness to perjure himself."
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.7/10 GoodReads";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1986";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Matt Murdock", " Wilson Fisk", " Foggy Nelson" , " Karen Page", " Ben Urich"];
}

fantasticBtn.addEventListener("click", fantasticSection)
function fantasticSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/729359.jpg";
  comicImage.alt="Fantastic Four: The Coming of Galactus";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "Fantastic Four: The Coming of Galactus";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "Maximus fires his Atmo-Gun with the intent to destroy the human race. However, the gun fails and Maximus resorts to creating a negative zone around the Great Refuge that separates the Inhumans from the rest of the world. The Fantastic Four escape and head back to the Baxter Building. There they are visited by the Watcher who warns them of the coming of Galactus. The Watcher tried to hide the Earth from his herald, the Silver Surfer, but was unsuccessful. The Surfer arrives and summons his master."
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.6/10 GoodReads";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1966";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Fantastic Four", " Galactus", " Silver Surfer" , " The Watcher"];
}


annBtn.addEventListener("click", annSection)
function annSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://static.wikia.nocookie.net/marveldatabase/images/4/40/Annihilation_Vol_1_6.jpg/revision/latest?cb=20200909044326";
  comicImage.alt="Annihilation";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "Annihilation";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = "Annihilus, lord of the Negative Zone, has declared war! And as his unstoppable Annihilation Wave swarms into the Marvel Universe, demolishing all in its path, only a handful of heroes can resist the destruction! As Nova learns the ways of war from Drax the Destroyer, the Silver Surfer seeks out his former master Galactus for aid, the Super-Skrull fights for his son's life and Ronan the Accuser faces Gamora and her woman warriors! Nova and Quasar's army leads the charge, but as heroes fall and Annihilus rises, the universe's one remaining hope may be Thanos, the Mad Titan!"
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 8.2/10 GoodReads";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 2006";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["Annihilus", " Galactus", " Ravenous" , " Silver Surfer", " Thanos"];
}

futureBtn.addEventListener("click", futureSection)
function futureSection() {
  comicContainer.innerHTML = "";
  comicDescription.style.margin = "25px";
  var comicImage = document.createElement("img");
  comicImage.src="https://images-na.ssl-images-amazon.com/images/I/91SHUjBcRdL.jpg";
  comicImage.alt="X-Men: Days of Future Past";
  comicImage.style.height = "300px";
  comicImage.style.width = "220px";
  comicImage.style.float = "left";
  comicDescription.appendChild(comicImage);

  var title = document.createElement("h2");
  comicDescription.append(title);
  title.textContent = "X-Men: Days of Future Past";
  var description = document.createElement("h2");
  comicDescription.appendChild(description);
  description.textContent = "Description: ";
  var descripP = document.createElement("p");
  comicDescription.append(descripP);
  descripP.textContent = " In the future, Sentinels rule a dystopian United States, and mutants are hunted and placed in internment camps. Having conquered North America and hunted all mutants and other superhumans, the Sentinels are turning their attention to the rest of the world. On the eve of a feared nuclear holocaust, the few remaining X-Men, while making a desperate attempt to stop the Sentinels, send Kitty Pryde's mind backward through time, to possess the body of her younger-self and to prevent a pivotal event in mutant–human history and the cause of these events: the assassination of Senator Robert Kelly along with Charles Xavier and Moira MacTaggert by Mystique's newly reassembled Brotherhood of Evil Mutants."
  var comicRatings = document.createElement("h3");
  comicDescription.append(comicRatings);
  comicRatings.textContent = "Comic Rating: 7.8/10 GoodReads";

  var yearIssued = document.createElement("h3");
  comicDescription.append(yearIssued);
  yearIssued.textContent = "Year Issued: 1981";
  var includedChar = document.createElement("h3");
  comicDescription.append(includedChar);
  includedChar.textContent = "Main Characters: "
  var comicCharP = document.createElement("p");
  comicDescription.append(comicCharP);
  comicCharP.textContent = ["X-Men", " Sentenils", " Brotherhood of Evil Mutants"];
}