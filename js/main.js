
	var Project = function Project(img, title, subtitle, link) {
		this.img = img;
		this.title = title;
		this.subtitle = subtitle;
		this.link = link;
	}
	var selfbranding = new Project("../imgs/600X600_SelfBranding_Icon.jpg", "Renmark Marte", "Self-Branding", "selfbranding");
	var doggierescue = new Project("../imgs/600X600_DoggieRescue_Icon.jpg", "Doggie Rescue", "UX/UI", "doggie_rescue");
	var swift = new Project("../imgs/600X600_Swift_Icon.jpg", "Swift", "UX/UI", "swift");

	var row1 = [generateProjectHtml(selfbranding), generateProjectHtml(doggierescue), generateProjectHtml(swift)];

	var funinone = new Project("../imgs/600X600_FunInOne_Icon.jpg", "Fun-In-One", "UX/UI", "funinone");
	var logofolio = new Project("../imgs/600X600_Logofolio_Icon.jpg", "Logofolio", "Graphic Design", "logofolio");
	var drift = new Project("../imgs/600X600_Drift_Icon.jpg", "Drift", "Magazine/Typograhy", "drift");

	var row2 = [generateProjectHtml(funinone), generateProjectHtml(logofolio), generateProjectHtml(drift)];

	var kitchen = new Project("../imgs/600X600_Kitchen_Icon.jpg", "Visualising the Anthropocene Kitchen", "Illustration", "kitchen");

	var row3 = [generateProjectHtml(kitchen)];

	function randomiseDivs(parent, children) {
		while(children.length) {
			parent.append(children.splice(Math.floor(Math.random() * children.length), 1)[0]);
		}
	}

	function generateProjectHtml(project) {
		var html = "<div class='project-icon-container text-center col-lg-4'><a href='./works/" + project.link + ".html'><img class='img-fluid' src='" + project.img + "'></a><div><a href='./works/" + project.link + ".html'>" + project.title + "</a><p>" + project.subtitle + "</p></div></div>";
		return html;
	}

	randomiseDivs($(".project-row-1"), row1);
	randomiseDivs($(".project-row-2"), row2);
	randomiseDivs($(".project-row-3"), row3);



	// randomiseDivs($(".project-row-1"));
	// randomiseDivs($(".project-row-2"));
	// randomiseDivs($(".flex-footer-container"));
	// function randomiseDivs (parent) {
	// 	var divs = parent.children();

	// 	while(divs.length) {
	// 		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	// 	}
	// }









// $(function () {

// 	// var container = $(".project-container");

// 	// for(var i = 0; i < container.children().length; i++) {
// 	// 	var parent = container.children();
// 	// 	var divs = parent.children();

// 	// 	while (divs.length) {
// 	//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	        
//  //    	}

// 	// }
//     var parent1 = $(".project-row-1");
//     var parent2 = $(".project-row-2")
//     var divs1 = parent1.children();
//     var divs2 = parent2.children();
//     while (divs1.length) {
//         parent1.append(divs1.splice(Math.floor(Math.random() * divs1.length), 1)[0]);
//         parent2.append(divs2.splice(Math.floor(Math.random() * divs2.length), 1)[0]);
//     }
// });