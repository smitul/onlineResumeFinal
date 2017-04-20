var bio = {
  	name : "Smitul Soni",
  	role : "FrontEnd Designer",
  	contacts : {
  		mobile : "1234567890",
  		email : "smitul2310@gmail.com",
  		github : "smitul",
  		location : "Mumbai, India"
  	},
  	welcomeMessage : "Welcome to the Resume of Mr. Smitul",
  	skills : ["HTML","JS","CSS"],
  	biopic : "images/fry.jpg",
 	
};

var education = {
	schools : [{
		name : "Advanced Academy",
		location : "Indore, India",
		degree : "High school",
		majors : ["Science","Maths","Commerce"],
		dates : "2002-2014"
	},
	{
		name : "NMIMS",
		location : "Mumbai, India",
		degree : "Engineering",
		majors : ["CS","IT","Mech"],
		dates : "2014-2019"
	}],

	onlineCourses : [{
		title : "FrontEnd",
		school : "Udacity",
		dates : "2017",
		url : "www.udacity.com"
	},
	{
		title : "Python",
		school : "Udacity",
		dates : "2017",
		url : "www.udacity.com"
	}],

	display : function(){

	}
};

var work = {
	
	jobs : [{
		employer : "xyz",
		title : "Developer",
		location : "California",
		dates : "2014-2015",
		description : "sduhfiusadyfiusayfsuidyfsaudihsadkj"
	},
	{
		employer : "abc",
		title : "Manager",
		location : "New York",
		dates : "2015-2017",
		description : "sduhfiusadyfiusayfsusdkjfhslkdhidyfsaudihsadkj"	
	}]

	
};

var projects = {
	projects : [{
		title : "Portfolio",
		dates : "2017",
		description : "My Portfolio using HTML and CSS",
		images : ["images/fry.jpg","images/fry.jpg"]
	},

	{
		title : "Animal Cards",
		dates : "2017",
		description : "Dejlvljsadhgjsdhvkjahkjsv",
		images : ["images/fry.jpg","images/fry.jpg"]
	}]

	
};

bio.display = function(){
	
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);


	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts,#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts,#footerContacts").append(formattedEmail);
	var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts,#footerContacts").append(formattedGit);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts,#footerContacts").append(formattedLocation);



	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMsg);

	$("#header").append(HTMLskillsStart);

	for(var i=0;i<bio.skills.length;i++){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#header").append(formattedSkill);
	}
};
bio.display();

work.display = function() {
	for (var i=0;i<work.jobs.length;i++){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		$(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		$(".work-entry:last").append(formattedTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);

		
		
	}
};
work.display();





projects.display = function() {
	for (var i=0;i<projects.projects.length;i++){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[i].images.length>0){
			for(var j=0;j<projects.projects[i].images.length;j++){
				var formattedImage = HTMLprojectImage.replace("%data", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
};

projects.display();


education.display = function() {
	for (var i=0;i<education.schools.length;i++){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);
		if(education.schools[i].majors.length>0){
			for(var j=0;j<education.schools[i].majors.length;j++){
				var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedMajors);
			}
		}
		
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (var i=0;i<education.onlineCourses.length;i++){
		

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedURL);
		
		
	}	
};
education.display();


$("#mapDiv").append(googleMap);
