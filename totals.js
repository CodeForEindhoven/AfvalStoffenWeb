var data = m.prop([]);
m.startComputation();
dataSource(function(d){
  data(d);
  m.endComputation();
});
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
		return m("div", data().map(function(block){
			return m("div",{class:"block"},
				m("div", {class: "year"}, block.year),
				m("div", {class: "iconstack"},[
					m.component(Iconstack, block.numbers.rest/10, "black_container2.svg"),
					m("div", {class: "number"}, block.numbers.rest/10+"k"),
				]),
				m("div", {class: "iconstack"},[
					m.component(Iconstack, block.numbers.gft/10, "green_container2.svg"),
					m("div", {class: "number"}, block.numbers.gft/10+"k"),
				]),
				m("div", {class: "iconstack"},[
					m.component(Iconstack, block.numbers.pmd/10, "yellow_bag2.svg"),
					m("div", {class: "number"}, block.numbers.pmd/10+"k"),
				])
			);
		}));
	}
};

m.route.mode = "hash";
m.route(document.getElementById("content"), "/", {
	"/": Main
});
