var abominations = [
	'Chocolate is',
	'Garlic is',
	 'Mushrooms are',
	 'The colour blue is',
	 'Babies are',
	 'Crop rotation is',
	 'Girls in men\'s clothing are',
	 'Girls knowing how to write are',
	 'Pictures of living things are',
	 'Cats are',
	 'Dwarfs are',
	 'Barking dogs are',
	 'Oysters are',
	 'Shirts with six buttons are',
	 'Cheese is',
	 'Messages in the sky are',
	 'Rocks are',
	 'Ears are',
	 'Accordion players are',
	 'Theatres and similar are',
	 'The smell of beets is',
	 'Pumpernickle bread is',
	 'Pots are',
	 'Pans are',
	 'Logs in display cases are',
	 'Large polygonal circles are',
];

function abominationGen() {
	var abomination = Math.floor(Math.random() * (abominations.length));
	document.getElementById('abominationsDisplay').innerHTML = abominations[abomination] + ' ' + 'an abomination unto Nuggan!'
}