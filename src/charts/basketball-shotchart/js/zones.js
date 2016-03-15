const zones = [
	{ name: 'paint (inside restricted area)', check: ({ shotX, shotY, distance }) =>
		distance < 4 &&
		shotY > -1.25
	},
	{ name: 'paint (outside restricted area)', check: ({ shotX, shotY, distance }) =>
		shotY <= 16.25 &&
		Math.abs(shotX) <= 8
	},
	{ name: 'mid range (left corner)', check: ({ shotX, shotY, distance }) =>
		shotX >= -22 &&
		shotX < -8 && 
		shotY < 8.75 
	},
	{ name: 'mid range (right corner)', check: ({ shotX, shotY, distance }) =>
		shotX > 8 &&
		shotX <= 22 &&
		shotY < 8.75 
	},
	{ name: 'mid range (left upper)', check: ({ shotX, shotY, distance }) =>
		shotX >= -22 &&
		shotX < -8 && 
		shotY >= 8.75 &&
		distance <= 23.75
	},
	{ name: 'mid range (right upper)', check: ({ shotX, shotY, distance }) =>
		shotX > 8 &&
		shotX <= 22 && 
		shotY >= 8.75 &&
		distance <= 23.75
	},
	{ name: 'mid range (middle upper)', check: ({ shotX, shotY, distance }) =>
		Math.abs(shotX) <= 8 &&
		shotY > 16.25 &&
		distance <= 23.75
	},
	{ name: 'three (left corner)', check: ({ shotX, shotY, distance }) =>
		shotX < -22 &&
		shotY < 8.75 
	},
	{ name: 'three (right corner)', check: ({ shotX, shotY, distance }) =>
		shotX > 22 &&
		shotY < 8.75
	},
	{ name: 'three (left)', check: ({ shotX, shotY, distance }) =>
		distance > 23.75 &&
		distance < 27.75 &&
		shotX < -8 &&
		shotY > 8.75
	},
	{ name: 'three (middle)', check: ({ shotX, shotY, distance }) =>
		distance > 23.75 &&
		distance < 27.75 &&
		Math.abs(shotX) <= 8 &&
		shotY > 8.75
	},
	{ name: 'three (right)', check: ({ shotX, shotY, distance }) =>
		distance > 23.75 &&
		distance < 27.75 &&
		shotX > 8 &&
		shotY > 8.75
	},
	{ name: 'three (deep)', check: ({ shotX, shotY, distance }) => true },
]

export { zones }