function svg_move(x1, y1){
	return " M"+x1+","+y1+" ";
}

function svg_bezier(x2,y2,x3,y3,x4,y4){
	return " C"+x2+","+y2+" "+x3+","+y3+" "+x4+","+y4+" ";
}

function svg_line(x2, y2){
	return " L"+x2+","+y2+" ";
}

function svg_ratio_polygon(x, y, width, t1, h1, t2, h2 ){
	var out = svg_move(x,y+t1);
	out += svg_bezier(x+width/2,y+t1, x+width/2,y+t2, x+width,y+t2);
	out += svg_line(x+width,y+t2+h2);
	out += svg_bezier(x+width/2,y+t2+h2, x+width/2,y+t1+h1, x,y+t1+h1 );
	out += svg_line(x,y+t1);
	return out;
}
