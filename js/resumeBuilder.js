/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Header
var formattedName = HTMLheaderName.replace("%data%","Catherine Beise");
var formattedRole = HTMLheaderRole.replace("%data%","EcoNerd");
$("#header").append(formattedName, formattedRole);

var skills = 
["html ","css ","javascript ","SQL ","online instruction ","project mgt "];

var bio = {
    "name": "cat",
    "role": "ecoNerd",
     "bioPic": "images/Me.jpg",
    "contacts": {
        "email":"cat.beise@gmail.com",
        "mobile":"443-523-6292",
        "github":"ecospirit"
   },    
    "welcome": "Hola!",
    "skills": skills
};

var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBiopic);

var formattedSkillsHeader = HTMLskillsStart;
var formattedSkill = HTMLskills;
if (skills.length > 0) {
    $("#header").append(formattedSkillsHeader);
    for (var i = 0;i < skills.length;i++) {
        formattedSkill = HTMLskills.replace("%data%",skills[i]);
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
function displayWork () {
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

// Education
var education = {
    "schools": [
        {
            "name": "Georgia State University",
            "location": "Atlanta, GA",
            "degree": "PhD",
            "major": ["MIS","Org Behavior"]
        },
        {
            "name": "Georgia Tech",
            "location": "Atlanta, GA",
            "degree": "Masters",
            "major": ["Info & Computer Sci"]
        }
    ],
    "online courses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "URL": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },  
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": 2015,
            "URL": "https://www.udacity.com/course/javascript-basics--ud804"
        }  
    ]
};
//Projects
var projects = {
    "project": [
        {
            "title": "Portfolio",
            "client": "self",
            "dates":"2015",
            "link": "https://github.com/ecospirit/project1",
            "image": " ",
            "descr": "Build interactive portfolio of projects using HTML, CSS."
        },
        {
            "title": "WET Website",
            "client": "Wicomico Environmental Trust",
            "dates": "2013-2015",
            "link": "http://wicomicoenvironment.org",
            "image": " ",
            "descr": "Implement small non-profit website that integrates Flipcause fund-raising and payment tools into Weebly platform. Update and maintain site, provide training and documentation for end-users." 
        }
        {
            "name": "Wild Goose Chase Bike Tour",
            "client": "Friends of Blackwater Refuge",
            "dates": "2015-2016"
            "link": "http://www.friendsofblackwater.org/wild-goose-chase.html",
            "image": " ",
            "descr": "Pro bono project manager for 2016 ride. Organize and manage volunteers to solicit sponsors and vendors, plan food, logistics, and routes, etc. Redesign website to be mobile-friendly.
        }
    ],
    
};

var displayProjects = function() {

}

projects.display - function() {

}