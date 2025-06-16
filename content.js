const project_array = [
  {
    "title": "Graduate School",
    "type": "UX/UI Redesign",
    "date": 2025,
    "workplace": "Mizzou",
    "blurb": "My first project with Digital Service was a total overhaul of the Graduate School website. My role in the process was split into two parts: discovery and design. During the discovery phase I interviewed key stakeholders and staff, compiled data gathered from Google Analytics, and audited the content within the site itself.While the staff and faculty mainly used the site to communicate with current and prospective graduate students, the information architecture wasn’t built in to facilitate that communication. Instead, many users found the site overwhelming on first visit and relied on the search function (or even Google) to find information. Many of the students relied on direct communication with staff to clear up questions, as in many cases there was conflicting information about the same topic, but even staff who preferred that students reach out to them directly often found that students seemed to reach them by accident and had to be directed to the correct staff member. Once the biggest issues with the site had been found during the discovery phase, I got to work outlining the new site architecture in SlickPlan and building page layouts in Figma. I worked closely with the Dean of Graduate Studies and the Communication Manager to get feedback on the reorganization and to explain, when necessary, how the findings during the discovery phase informed my design decisions."
  },
  {
    "title": "Parking and Transportation",
    "type": "UX/UI Redesign",
    "date": 2025,
    "workplace": "Mizzou",
    "blurb": "The Parking and Transportation site was part of a larger redesign of the operations site for Mizzou. My role in the process was split into two parts: discovery and design. During the discovery phase I interviewed key stakeholders and staff, compiled data gathered from Google Analytics, and audited the content within the site itself. This is the first project I’ve had at the university with a captive user-base who visit the site for very specific tasks in mind rather. In the past, I’ve usually worked on student-facing sites whose purpose is to communicate the feeling of a potential school their audience. In this case, the practical realities of the site very much outweighed any stylistic considerations."
  },
  {
    "title": "Mizzou Brand Refresh",
    "type": "Figma Design System",
    "date": 2025,
    "workplace": "Mizzou",
    "blurb": "In 2024, the University of Missouri started a brand refresh. Once the brand guidelines were created by INSERT TEAM HERE the Digital Service team got to work adapting them for the web. My responsibility was to build out the new Figma design library using these elements, which was especially important as the university homepage underwent a rebuild. Most of the base-level components (like typography and colors) had already been built in Storybook – a brand element management platform used to standardize development – which I translated into Figma components. My main goals were to establish standard expectations around variation, like including differences in size and layout as variations of the same component, and to leverage new “variable modes” in Figma to simplify color schemes. I got to explore the logic of the new brand and embed myself in the design system build. I also got to work closely with other designers on the team via weekly meetings where I gathered feedback on viability of the Figma components in practice, and gave my own feedback on the home page rebuild."
  },
  {
    "title": "Teaching Tools",
    "type": "UI Redesign",
    "date": 2023,
    "workplace": "MIssouri Online",
    "blurb": null
  },
  {
    "title": "Career Explorer",
    "type": "UI Design",
    "date": 2024,
    "workplace": "Missouri Online",
    "blurb": null
  }
]


let projects = project_list.length;

function displayProject(listLength, projectList){
	for (let i = 0; i < projects; i++) {
    	console.log (projectList[i])
  	};
}   


displayProject(projects, project_array)
/*

for each item in the JSON file I make a section in the <main> with each of my projects.

then i need to make a page for each of the items. i would prefer to do that via js but I can do it manually too

maybe i should just use a lightweight JS framework?

that feels stupid tho. 

i just put script in the head tag maybe rather than attach this file

<script>

wait until DOM Load 

getDocument projects.json

let portfolio = projects.json

for project in portfolio

append to main 

<section>
	<h1> project.title </h1>
	<h2> project.type </h2>
	<h3> project.workplace + project.date </h3>
</section>

*/