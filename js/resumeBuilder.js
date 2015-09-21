/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
//Header
var formattedName = HTMLheaderName.replace("%data%","Catherine Beise");
var formattedRole = HTMLheaderRole.replace("%data%","EcoNerd");
$("#header").append(formattedName + " " + formattedRole);

var bio = {
    "name": "cat",
    "role": "ecoNerd",
     
    "contacts": {
        "mobile":"443-523-6292",
        "email":"cat.beise@gmail.com",
        "github":"ecospirit",
        "twitter": "ecospirit15",
        "location": "Cambridge, MD, USA"
    },    
    "welcomeMessage": "Hola!",
    "skills": ["html ","css ","javascript ","SQL ","online instruction ","project mgt "],
    "bioPic": "images/Me.jpg",
    "display": " "
};

var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBiopic);

var formattedSkillsHeader = HTMLskillsStart;
var formattedSkill = HTMLskills;
if (bio.skills.length > 0) {
    $("#header").append(formattedSkillsHeader);
    for (var i = 0;i < bio.skills.length;i++) {
        formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#header").append(formattedSkill);
    }
};
//Work Experience
var work = {
    "jobs" : [
        {
            "position": "IT consultant",
            "employer": "Self-employed",
            "yearsworked": "2013-Current",
            "location": "Cambridge, MD",
            "summary": "Manage projects and maintain small web sites for non-profits."
        },
        {
            "position": "eLearning Project Manager",
            "employer": "National Science Foundation",
            "yearsworked": "2009-2011",
            "location": "Arlington, VA",
            "summary": "Manage, coordinate, configure, maintain, promote, document, report on, and enhance ease of use of organizational eLearning systems."
        },
        {
            "position": "Professor",
            "employer": "Salisbury University",
            "yearsworked": "2002-2012",
            "location": "Salisbury, MD",
            "summary": "Develop and deliver online and hybrid courses and curricula, chair Information & Decision Sci Dept, publish research. Courses: Database, Systems Analysis, Project Management, Global IT, MIS."
        }
    ]
};

var displayWork = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].yearsworked);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDescr = HTMLworkDescription.replace("%data%",work.jobs[job].summary);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescr);
    }
};
displayWork();

//var intButton =  internationalizeButton;
//$("#main").append(intButton);  

  
//Projects

var projects = {
    "project": [
        {
            "title": "Portfolio",
            "client": "self",
            "dates":"2015",
            "link": "https://github.com/ecospirit/project1",
            "images": " ",
            "descr": "Build interactive portfolio of projects using HTML, CSS."
        },
        {
            "title": "WET Website",
            "client": "Wicomico Environmental Trust",
            "dates": "2013-2015",
            "link": "http://wicomicoenvironment.org",
            "images": " ",
            "descr": "Implement small non-profit website that integrates Flipcause fund-raising and payment tools into Weebly platform. Update and maintain site, provide training and documentation for end-users." 
        },
        {
            "title": "Wild Goose Chase Bike Tour",
            "client": "Friends of Blackwater Refuge",
            "dates": "2015-2016",
            "link": "http://www.friendsofblackwater.org/wild-goose-chase.html",
            "images": " ",
            "descr": "Pro bono project manager for 2016 ride. Organize and manage volunteers to solicit sponsors and vendors, plan food, logistics, and routes, etc. Redesign website to be mobile-friendly."
        }
    ],
};
var displayProjects = function() {
//    projects.display = function() {

        for (proj in projects.project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
            var formattedDates = HTMLprojectDates.replace("%data%",projects.project[proj].dates);
            var formattedDescr = HTMLprojectDescription.replace("%data%",projects.project[proj].descr);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescr);
//          $(".project-entry:last").append(formattedImages);
        }
//    }
};   
displayProjects();

// Education
var education = {
    "schools": [
        {
            "name": "Georgia State University",
            "location": "Atlanta, GA",
            "degree": "PhD",
            "major": ["MIS","Org Behavior"],
            "dates": 1989,
            "url": "http://robinson.gsu.edu/"
        },
        {
            "name": "Georgia Tech",
            "location": "Atlanta, GA",
            "degree": "Masters",
            "major": ["Info & Computer Sci"],
            "dates": 1979,
            "url": "http://www.cc.gatech.edu/"
        }
    ],
    "online courses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2015,
            "URL": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },  
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "date": 2015,
            "URL": "https://www.udacity.com/course/javascript-basics--ud804" 
        }  
    ]
};

var displayEducation = function() {
//    Education.display = function() {

        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
//    }
}; 
displayEducation();

$("#mapDiv").append(googleMap);