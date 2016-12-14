var data = [
	{
		name: "Vastrecht",
		kosten: 69.48,
		lediging: "",
		color: "#EA611C"
	},
	{
		name: "Grijs",
		kosten: (5*5.14),
		lediging: 5,
		color: "#7D827D"
	},
	{
		name: "GFT",
		kosten: (5.9*1.50),
		lediging: 5.9,
		color: "#62AF6B"
	},
	{
		name: "PMD",
		kosten: 0,
		lediging: 59,
		color: "#EDE71B"
	}
];

var total = data.reduce(function(prev, cur){
	return prev + cur.kosten;
},0);

var htotal = data.reduce(function(prev, cur){
	return prev + 5 + (cur.kosten === 0 ? 10 : (cur.kosten*3));
},0);

var Gemiddeld = {
	view: function() {
		var rely1 = 0;
		var rely2 = 0;
		var margin = 5;

		return m("g", [
			m("text",{x: 40, y: 60, "font-family": "Verdana", "font-size":"25", "text-anchor":"left"},"Gemiddeld"),
			m("text",{x: 40, y: 90, "font-family": "Verdana", "font-size":"13", "text-anchor":"left"},"Aantal ledigingen"),
			m("text",{x: 255, y: 90, "font-family": "Verdana", "font-size":"13", "text-anchor":"right"},"Kosten"),
			data.map(function(d){
				//var hlediging = d.lediging===0 ? 10 : d.lediging * 4;
				var hlediging = 40;
				var hkosten = d.kosten===0 ? 10 : d.kosten * 3;

				var shape = m("path", {d: svg_ratio_polygon(150,100, 100, rely1+(htotal/2)-90, hlediging, rely2, hkosten), fill: d.color});

				var name = m("text",{x: 90, y: 25+100 + rely1+(htotal/2)-90, "font-family": "Verdana", "font-size":"15","text-anchor":"end"},d.name);
				var lediging = m("text",{x: 120, y: 25+100 + rely1+(htotal/2)-90, "font-family": "Verdana", "font-size":"15","text-anchor":"middle"},d.lediging);
				var left = m("rect",{x: 100, y:100 + rely1+(htotal/2)-90, width:45, height:hlediging, fill: d.color});

				var kost = m("text",{x: 275, y: 100+5+rely2+hkosten/2, "font-family": "Verdana", "font-size":"15"},"€ "+d.kosten.toFixed(2));
				var right = m("rect",{x: 255, y:100 + rely2, width:100, height:hkosten, fill: d.color});

				rely1 += hlediging + margin;
				rely2 += hkosten + margin;

				return m("g",[
					shape,
					left,
					lediging,
					right,
					kost,
					name
				]);
			}),
			m("rect",{x: 360, y:100, width:100, height:htotal-5, fill: "#AFCECC"}),
			m("text",{x: 410, y: 100+5+(htotal-5)/2, "font-family": "Verdana", "font-size":"15", "text-anchor":"middle"},"€ "+total.toFixed(2))
		]);
	}
};


var inputs = [
	{
		name: "Vastrecht",
		kosten: 69.48,
		lediging: 0,
		color: "#EA611C"
	},
	{
		name: "Grijs",
		kosten: (5*5.14),
		lediging: 5,
		color: "#7D827D"
	},
	{
		name: "GFT",
		kosten: (5.9*1.50),
		lediging: 5.9,
		color: "#62AF6B"
	},
	{
		name: "PMD",
		kosten: 0,
		lediging: 59,
		color: "#EDE71B"
	}
];

var jtotal = inputs.reduce(function(prev, cur){
	return prev + cur.kosten;
},0);

var jhtotal = inputs.reduce(function(prev, cur){
	return prev + 5 + (cur.kosten === 0 ? 10 : (cur.kosten*3));
},0);

var Jij = {
	view: function() {
		var rely1 = 0;
		var rely2 = 0;
		var margin = 5;

		return m("g",[
			m("text",{x: 930, y: 60, "font-family": "Verdana", "font-size":"25", "text-anchor":"end"},"Jij"),
			m("text",{x: 930, y: 90, "font-family": "Verdana", "font-size":"13", "text-anchor":"end"},"Aantal ledigingen"),
			m("text",{x: 705, y: 90, "font-family": "Verdana", "font-size":"13", "text-anchor":"end"},"Kosten"),
			inputs.map(function(d){
				//var hlediging = d.lediging===0 ? 10 : d.lediging * 4;
				var hlediging = 40;
				var hkosten = d.kosten===0 ? 10 : d.kosten * 3;

				var shape = m("path", {d: svg_ratio_polygon(710,100, 100, rely2, hkosten, rely1+(htotal/2)-90, hlediging), fill: d.color});

				var name = m("text",{x: 870, y: 25+100 + rely1+(htotal/2)-90, "font-family": "Verdana", "font-size":"15","text-anchor":"start"},d.name);
				var lediging = m("text",{x: 835, y: 25+100 + rely1+(htotal/2)-90, "font-family": "Verdana", "font-size":"15","text-anchor":"middle"},d.lediging);
				var left = m("rect",{x: 815, y:100 + rely1+(htotal/2)-90, width:45, height:hlediging, fill: d.color});

				var kost = m("text",{x: 625, y: 100+5+rely2+hkosten/2, "font-family": "Verdana", "font-size":"15"},"€ "+d.kosten.toFixed(2));
				var right = m("rect",{x: 605, y:100 + rely2, width:100, height:hkosten, fill: d.color});

				rely1 += hlediging + margin;
				rely2 += hkosten + margin;

				return m("g",[
					shape,
					left,
					//lediging,
					right,
					kost,
					name
				]);
			}),
			m("rect",{x: 500, y:100, width:100, height:jhtotal-5, fill: "#AFCECC"}),
			m("text",{x: 550, y: 100+5+(jhtotal-5)/2, "font-family": "Verdana", "font-size":"15", "text-anchor":"middle"},"€ "+jtotal.toFixed(2))
		]);
	}
};

var Editor = {
	controller: function(){
		this.update = function(e){
			var type = e.target.attributes.count.value;
			inputs[type].lediging = e.target.value;
			if(type === "1"){
				inputs[type].kosten = e.target.value*5.14;
			}
			if(type === "2"){
				inputs[type].kosten = e.target.value*1.50;
			}

			jtotal = inputs.reduce(function(prev, cur){
				return prev + cur.kosten;
			},0);

			jhtotal = inputs.reduce(function(prev, cur){
				return prev + 5 + (cur.kosten === 0 ? 10 : (cur.kosten*3));
			},0);

		};
	},
	view: function(ctrl){
		return m("div", [
			m("input", {count: 1, type:"number", id:"grijs", value: inputs[1].lediging, onchange: ctrl.update.bind(ctrl)}),
			m("input", {count: 2, type:"number", id:"gft", value: inputs[2].lediging, onchange: ctrl.update.bind(ctrl)}),
			m("input", {count: 3, type:"number", id:"pmd", value: inputs[3].lediging, onchange: ctrl.update.bind(ctrl)})
		]);
	}
};

var Besparing = {
	view: function(){
		var besparing = (total-jtotal);
		if(besparing > 0){
			return m("div",{id: "pig"},[
				m("img", {src:"good_pig.png"}),
				m("div", "Goed bezig! U bespaart al € "+besparing.toFixed(2))
			]);
		} else {
			return m("div",{id: "pig"},[
				m("img", {src:"good_pig.png"}),
				m("div", "U kunt minstens € "+Math.abs(besparing.toFixed(2))+" besparen")
			]);
		}

	}
};

var Main = {
	view: function(){
		return m("",{id:"app"},[
			m("svg", {width: 1000, height: 800}, [
				Gemiddeld,
				Jij
			]),
			Editor,
			Besparing
		]);
	}
};

m.route.mode = "hash";
m.route(document.getElementById("content"), "/", {
	"/": Main
});
