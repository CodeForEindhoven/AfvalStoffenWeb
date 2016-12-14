var data = [
	{
		year: "2013",
		numbers: {
			gft: 5.3,
			pmd: 6.7,
			rest: 10
		}
	},
	{
		year: "2014",
		numbers: {
			gft: 7.8,
			pmd: 4.7,
			rest: 12
		}
	},
	{
		year: "2015",
		numbers: {
			gft: 5.5,
			pmd: 2.7,
			rest: 8
		}
	},

];

var Iconstack = {
	controller: function(){

	},
	view: function(ctrl, number, icon){
		return m("div", (function(total){
			var containers = [];
			while(total > 1){
				total-=1;
				containers.push(m("img", {src: icon}));
			}
			containers.push(m("img", {
				src: icon,
				style: "-webkit-clip-path: inset(0px "+((1-total)*15)+"px 0px 0px); "
			}));
			return containers;
		})(number));
	}
};

var Main = {
	view: function(){
		return m("div", data.map(function(block){
			return m("div",{class:"block"},
				m("div", {class: "year"}, block.year),
				m("div", {class: "iconstack"},[
					m.component(Iconstack, block.numbers.rest, "black_container2.svg"),
					m("div", {class: "number"}, block.numbers.rest+"k"),
				]),
				m("div", {class: "iconstack"},[
					m.component(Iconstack, block.numbers.gft, "green_container2.svg"),
					m("div", {class: "number"}, block.numbers.gft+"k"),
				]),
				m("div", {class: "iconstack"},[
					m.component(Iconstack, block.numbers.pmd, "yellow_bag2.svg"),
					m("div", {class: "number"}, block.numbers.pmd+"k"),
				])
			);
		}));
	}
};

m.route.mode = "hash";
m.route(document.getElementById("content"), "/", {
	"/": Main
});
