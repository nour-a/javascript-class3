# Working with the DOM


``` html
<!doctype html>
<html>
	<head></head>
	<body>
		<div class='parent-class'>
			<div id='first-child-id' class='child-class'></div>
			<div id='second-child-id' class='child-class'></div>
			<div id='third-child-id' class='child-class'></div>
		</div>
	</body>
</html>
```

``` javascript
var parent = document.querySelector('.parent-class');
console.log(parent);
=> <div class='parent-class'>...</div>

parent.childNodes
=> [ div#first-child-id.child-class, div#second-child-id.child-class, div#third-child-id.child-class ]

var newDiv = document.createElement('div');
newDiv.id = 'fourth-child-id';
newDiv.classList.add('child-class');
document.body.appendChild(newDiv);

var allDivElements = document.querySelectorAll('div')
console.log(allDivElements);
=> [ div.parent-class, div.child-class, div.child-class, div.child-class, div.child-class ]

var childDivElements = document.querySelectorAll('.child-class')
console.log(childDivElements);
=> [ div.child-class, div.child-class, div.child-class, div.child-class ]

for (var i = 0; i < childDivElements.length; i++) {
	childDivElements[i].classList.add('my-new-class')
}
console.log(allDivElements);
=> [ div.parent-class, div#first-child-id.child-class.my-new-class, div#second-child-id.child-class.my-new-class, div#third-child-id.child-class.my-new-class, div#fourth-child-id.child-class.my-new-class ]
```
