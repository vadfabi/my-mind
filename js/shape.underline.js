MM.Shape.Underline = Object.create(MM.Shape, {
	id: {value: "underline"},
	label: {value: "Underline"},
	VERTICAL_OFFSET: {value: 0.85}
});

MM.Shape.Underline.update = function(item) {
	var dom = item.getDOM();

	var ctx = dom.canvas.getContext("2d");
	ctx.strokeStyle = item.getColor();

	var left = dom.content.offsetLeft;
	var right = left + dom.content.offsetWidth;

	var top = this.getVerticalAnchor(item);

	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(right, top);
	ctx.stroke();
}
