var app = angular.module('app', []);


app.controller('searchCtrl', function () {
	this.items = [
		{
			title: 'Android руководство',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			title: 'AngularJs руководство',
			image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg'
		},
		{
			title: 'HTML5 руководство',
			image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg'
		},
		{
			title: 'CSS руководство',
			image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
		},
		{
			title: 'Java руководство',
			image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
		},
		{
			title: 'Joomla руководство',
			image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
		},
		{
			title: 'HTML руководство',
			image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
		}
	];
});

app.filter('findBook', function () {
	return function (arr, findStr) {
		if (!findStr) {
			return arr;
		}

		var result = [];

		findStr = findStr.toLowerCase();

		angular.forEach(arr, function (item) {
			if (item.title.toLowerCase().indexOf(findStr) !== -1) {
				result.push(item);
			}
		});

		return result;
	};
});