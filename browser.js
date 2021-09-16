document.addEventListener('DOMContentLoaded', () => {
	const { LintelBar } = require('lintel-bar');
	const path = require('path');
	new LintelBar({
		template: 'tabbed',
		appIcon: {
			file: path.join(__dirname, 'icon.png')
		},
		windowTitle:{
			text: 'Team for Linux 1.0'
		}
	});
});