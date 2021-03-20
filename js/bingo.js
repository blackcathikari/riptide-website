window.onload = function() {

	const items = [
		`"Don't question it"`,
		`XD`,
		`xD`,
		`"I'll allow it"`,
		`"We broke Cat again"`,
		`"But that would make sense"`,
		`Long have we waited...`,
		`"Cat that's a hero roller not a carbon"`,
		`RIP Tide is directionally challenged`,
		`Nonsequitur "yes"`,
		`"Please die when i kill you"`,
		`"The noot"`,
		`"Toot toot"`,
		`"I'm old"`,
		`A wild Nico appears`,
		`"I'm not wrong"`,
		`"Pizza, a condiment"`,
		`"Nani"`,
		`"OwO"`,
		`RT is the same person`,
		`"Excuse me"`,
		`"Wow I'm bad"`,
		`"You have friends"`,
		`"Hey, that's my pocket"`,
		`X Rank Screen Skills `,
		`Cat`,
		`Evil laughter`,
		`"I have problems"`,
		`"Yes, yes"`,
		`"That's not how the game works"`,
		`Disbelieving noises`,
		`Konplaining`,
		`"That's a H-3 Cat"`,
		`"Aw heck"`,
		`"Classic RT"`
	];

	const table = document.getElementById('bingo_card');

	const cardItems = [];
	
	function isUnique(item) {
		for (let i = 0; i < cardItems.length; i++) {
			if (item === cardItems[i]) {
				return false;
			}
		}
		return true;
	};
	
	function makeCell(val) {
		const cell = document.createElement('td');
		cell.classList.add('bingo-cell');
		cell.onclick = (function() { cell.classList.toggle('selected') });
		cell.textContent = val;
		return cell;
	};
	
	function makeRow(num) {
		const row = document.createElement('tr');
		for (let cells = 0; cells < 5; cells++) {
			const idx = (num * 5) + cells;
			const val = cardItems[idx];
			const cell = makeCell(val);
			row.appendChild(cell);
		}
		return row;
	};
	
	// First item - we don't need to check uniqueness
	const idx = Math.floor(Math.random() * items.length);
	const item = items[idx];
	cardItems.push(item);
	
	// The other 24 items
	while(cardItems.length < 25) {
		const idx = Math.floor((Math.random() * items.length));
		const item = items[idx];
		
		for (let i = 0; i < cardItems.length; i++) {
			if (isUnique(item)) {
				cardItems.push(item);
			}
		}
	}
	
	// Render
	for (let rows = 0; rows < 5; rows++) {
		const row = makeRow(rows);
		table.appendChild(row);
	};
};
