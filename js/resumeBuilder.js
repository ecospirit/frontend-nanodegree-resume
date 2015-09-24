//FEN Resume - Project 2 - Catherine Beise
'use strict';
//Header
//
var data = '%data%';
var bio = {
    'name': 'Alice Green',
    'role': 'ecoNerd',
    'welcomeMessage': 'Hola!',
    'bioPic': 'images/woman.png',
    'contacts': {
        'mobile':'443-523-6292',
        'email':'cat.beise@gmail.com',
        'github':'ecospirit',
        'twitter': 'ecospirit15',
        'location': 'Cambridge, MD, USA',
        'display': function() {
            var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace(data,bio.contacts.email);
            var formattedTwitter = HTMLtwitter.replace(data,bio.contacts.twitter);
            var formattedGithub = HTMLgithub.replace(data,bio.contacts.github);
            var formattedLocation = HTMLlocation.replace(data,bio.contacts.location);
            var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;
            $('#footerContacts').append(formattedContacts);
        }
    },    
    'displayBioHeader': function() {
        var formattedName = HTMLheaderName.replace(data,bio.name);
        var formattedRole = HTMLheaderRole.replace(data,bio.role);
        $('#header').append(formattedName + ' ' + formattedRole);
        var formattedBiopic = HTMLbioPic.replace(data,bio.bioPic);
        $('#header').append(formattedBiopic);
    }, 
//
//displaySkills doesn't display properly if I append HTMLskillsStart to #skills-h3 or HTMLskills to #skills, so I appended both to #header.
//The 2 ID's are declared in helper.js, skills-h3 is referenced in style.css, neither exists in index.html.
//Was I supposed to add a div and/or class for these to index.html? I'm not sure I understand how they all currently work together.
//
    'displaySkills': function() {
        var skills = ['html','css','javascript','SQL','online instruction','project mgt'];         
        if (skills.length) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0;i < skills.length;i++) { 
                $('#header').append(HTMLskills.replace(data,skills[i]));
            }
        }
    }
};
bio.displayBioHeader();
bio.displaySkills();
//
//Work Experience
//
var work = {
    'jobs' : [
        {
            'position': 'IT consultant',
            'employer': 'Self-employed',
            'yearsworked': '2013-Current',
            'location': 'Cambridge, MD',
            'summary': 'Manage projects and maintain small web sites for non-profits.'
        },
        {
            'position': 'eLearning Project Manager',
            'employer': 'National Science Foundation',
            'yearsworked': '2009-2011',
            'location': 'Arlington, VA',
            'summary': 'Manage, coordinate, configure, maintain, promote, document, report on, and enhance ease of use of organizational eLearning systems.'
        },
        {
            'position': 'Professor',
            'employer': 'Salisbury University',
            'yearsworked': '2002-2012',
            'location': 'Salisbury, MD',
            'summary': 'Develop and deliver online and hybrid courses and curricula, chair Information & Decision Sci Dept, publish research. Courses: Database, Systems Analysis, Project Management, Global IT, MIS.'
        }
    ],
    display: function() {
            for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(data,work.jobs[job].employer);
            var formattedJobTitle = HTMLworkTitle.replace(data,work.jobs[job].position);
            var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
            var formattedDates = HTMLworkDates.replace(data,work.jobs[job].yearsworked);
            var formattedLocation = HTMLworkLocation.replace(data,work.jobs[job].location);
            var formattedDescr = HTMLworkDescription.replace(data,work.jobs[job].summary);
            $('.work-entry:last').append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescr);
        }
    }
};
work.display();
//
//Projects
//
var projects = {
    'project': [
        {
            'title': 'Portfolio',
            'client': 'self',
            'dates':'2015',
            'link': 'https://github.com/ecospirit/project1',
            'image': 'images/whiteboard_chart.jpg',
            'descr': 'Build interactive portfolio of projects using HTML, CSS.'
        },
        {
            'title': 'WET Website',
            'client': 'Wicomico Environmental Trust',
            'dates': '2013-2015',
            'link': 'http://wicomicoenvironment.org',
            'image': 'images/milkweed.jpg',
            'descr': 'Implement small non-profit website that integrates Flipcause fund-raising and payment tools into Weebly platform. Update and maintain site, provide training and documentation for end-users.' 
        },
        {
            'title': 'Wild Goose Chase Bike Tour',
            'client': 'Friends of Blackwater Refuge',
            'dates': '2015-2016',
            'link': 'http://www.friendsofblackwater.org/wild-goose-chase.html',
            'image': 'images/ducklings.jpg',
            'descr': 'Pro bono project manager for 2016 ride. Organize and manage volunteers to solicit sponsors and vendors, plan food, logistics, and routes, etc. Redesign website to be mobile-friendly.'
        }
    ],
    'display': function() {
        for (var proj in projects.project) {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace(data,projects.project[proj].title);
            var formattedDates = HTMLprojectDates.replace(data,projects.project[proj].dates);
            var formattedDescr = HTMLprojectDescription.replace(data,projects.project[proj].descr);
            var formattedImage = HTMLprojectImage.replace(data,projects.project[proj].image);
            $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescr + formattedImage);
        }
    }
};
projects.display();
//
// Education
//
var education = {
    'schools': [
        {
            'name': 'Georgia State University',
            'location': 'Atlanta, GA',
            'degree': 'PhD',
            'major': ['MIS','Org Behavior'],
            'dates': 1989,
            'url': 'http://robinson.gsu.edu/'
        },
        {
            'name': 'Georgia Tech',
            'location': 'Atlanta, GA',
            'degree': 'Masters',
            'major': ['Info & Computer Sci'],
            'dates': 1979,
            'url': 'http://www.cc.gatech.edu/'
        }
    ],
    'onlineClasses': [
        {
            'title': 'Intro to HTML and CSS',
            'school': 'Udacity',
            'date': 2015,
            'URL': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
        },  
        {
            'title': 'Javascript Basics',
            'school': 'Udacity',
            'date': 2015,
            'URL': 'https://www.udacity.com/course/javascript-basics--ud804' 
        }  
    ],
    'display': function() {
        for (var school in education.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace(data,education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace(data,education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace(data,education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace(data,education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace(data,education.schools[school].major);
            $('.education-entry:last').append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
        }
        $('.education-entry:last').append(HTMLonlineClasses);
        for (var course in education.onlineClasses) {
            var formattedTitle = HTMLonlineTitle.replace(data,education.onlineClasses[course].title);
            var formattedSchool = HTMLonlineSchool.replace(data,education.onlineClasses[course].school);
            var formattedDates = HTMLonlineDates.replace(data,education.onlineClasses[course].date);
            var formattedURL = HTMLonlineURL.replace(data,education.onlineClasses[course].URL);
            $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedURL);
        } 
    }
};
education.display();
//
//var intButton =  internationalizeButton;
//$('#main').append(intButton);  
//  
$('#mapDiv').append(googleMap);
bio.contacts.display();