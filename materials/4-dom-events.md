DOM events

``` html
<!doctype html>
<html>
	<head></head>
	<body>
		<div>
			<button class='my-button'></button>
		</div>
	</body>
</html>
```

``` javascript
var myButton = document.querySelector('.my-button');
myButton.addEventListener('click', myClickHandler)
function myClickHandler (event) {
	console.log(event.target);
};

// on click:

=> <button class='my-button'></button>
```

What other events are there?
