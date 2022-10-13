const profile = {
	name: 'Marko Franjić',
	profilePhoto: '/resources/profile.JPG',
	location: 'Zagreb, Croatia',
	profession: 'Software developer',
	specialization: ['Frontend web', 'Unity'],
	email: 'mfranjic995@gmail.com',
	cvPath: '/resources/CV_MarkoFranjic.pdf',
	cvFile: 'CV_MarkoFranjic.pdf',
	github: 'https://github.com/MFranjic',
	linkedin: 'https://www.linkedin.com/in/marko-franji%C4%87-031aba77/',
	facebook: 'https://www.facebook.com/marko.franjic.7',
	instagram: 'https://www.instagram.com/mfranjic95/',
	sections: [
		// #region Career
		{
			title: 'Career',
			id: 'car',
			items: [
				{
					title: 'Freelance frontend web developer',
					tags: [
						['gray', 'Jul 2022 - today'],
						['blue', 'Zagreb'],
					],
					description: [
						"This summer I've decided to work on expanding my freelancing opportunities. With that came an idea for this website - as simple portfolio made from scratch that can showcase both my previous game dev experience, and newly obtained web development skills.",
						"Since I've been working with Figma for over a year now on my Comba project, I thought it would be fun to dig even deeper, and try to use it as much as I can for this website also! I ended up using it for creating wireframe, detailing concept and UX, UI components, and all other graphic elements. All of that before even initializing a React project.",
						"On every project I like to try out something that I haven't used before - and here it was Next.js. I got a tip that it's quite a useful framework for something small like this, so I gave it a go and really liked how beginner-friendly it was!",
					],
					photoTop: '/resources/photos/about/photo-about-car-1a.jpeg',
					photoBottom: '/resources/photos/about/photo-about-car-1b.webp',
				},
				{
					title: 'Freelance Unity developer',
					tags: [
						['gray', 'Dec 2019 - today'],
						['blue', 'Zagreb'],
						['green', 'Čakovec'],
					],
					description: [
						"For the last 4 years, out of which 3 professionally, I've been developing a wide variety of projects using Unity game engine. I, as a part of the team or solo, have made games and other software targeted for desktop, mobile (Android/iOS phones and tablets), VR and WebGL platforms.",
						'I enjoy doing the frontend stuff in Unity editor, especially the UI shenanigans,  but since the beginning of my Unity career my favorite part has been C# scripting in backend. My formal education provided me with this gift of loving to create complex game systems, and things became even more interesting when I discovered serverless Firebase.',
						"I'm always open to hear about new and interesting opportunities in Unity space that could use my set of skills, so if you're searching for a developer let me know!",
					],
					photoTop: '/resources/photos/about/photo-about-car-2a.png',
					photoBottom: '/resources/photos/about/photo-about-car-2b.png',
				},
				{
					title: 'Web development internship',
					tags: [
						['gray', 'Aug 2018 - Apr 2019'],
						['blue', 'Zagreb'],
					],
					description: [
						"During my last year of university, having finished all the necessary courses already, I've decided to take on a part-time internship position to get some real life experience in software engineering. After going through multiple interviews, declines and offers, I've decided to start my summer internship with company from Zagreb called Perpetuum Mobile.",
						"My task was to create an internal web app for debugging purposes for one of their bigger projects. I was working alone on that, while being mentored. At the end I've created backend that fethched data from one non-SQL database, saved it to a different one, and made UI using React that simply visualised data in a filterable and searchable table. Moreover, I had to implement a basic login system.",
						'I had an idea to get my master thesis somehow connected to the internship, but at the end life had something else in store for me.',
					],
					photoTop: '/resources/photos/about/photo-about-car-3a.png',
					photoBottom: '/resources/photos/about/photo-about-car-3b.png',
				},
			],
		},
		//#endregion

		// #region Achievements
		{
			title: 'Achievements',
			id: 'ach',
			items: [
				{
					title: (
						<span>
							Global Game Jam 2022, 1<sup>st</sup> place
						</span>
					),
					tags: [
						['gray', 'Jan 2022'],
						['orange', 'Novska'],
					],
					description: [
						"They say 3rd time's the charm, and so it was for me regarding game jams. First of all, I have to be thankful for meeting so many fantastic people during these years at start of my game dev career, because this win wouldn't be possible without the most amazing team ever!",
						'I was primarily in charge of implementing certain features and programming half of the game levels. Moreover, I\'ve brainstormed the design of last level of the game with the main motivation of creating a "wow effect" with the audience and judges that would solidify our chances of success - and it paid off!',
						'This year\'s GGJ theme was "Duality". Our teambuilding at the coffee place in the first hour of game jam yielded a great idea with which we were all on board right from the beginning. The main concept was it being a puzzle game with a twist - you have to rotate the room upside down to solve puzzels. That helped us win against other 16 teams that were competing.',
					],
					photoTop: '/resources/photos/about/photo-about-ach-1b.jpg',
					photoBottom: '/resources/photos/about/photo-about-ach-1a.jpg',
				},
				{
					title: (
						<span>
							Virtual Skills hackathon, 2<sup>nd</sup> place
						</span>
					),
					tags: [
						['gray', 'Jun 2021'],
						['orange', 'Novska'],
					],
					description: [
						'The focus of this VR game jam was to build an educational simulation for the unemployed and low-skilled workers. It was a part of a bigger project where the best ideas that were brainstormed here went on to be further developed by a partner company.',
						"I've never worked on a VR project before, so that was a unique challenge by itself, but nonetheless it proved to be a fun and amazing learning experience. We ended up going as a team of 3, but everything went so smoothly that, by the end of the weekend, I've decided that I have to partner up with them in some future projects!",
						"We've decided to go with a waiter as a profession of choice. My task was to develop and implement payment system for orders, and to visually show the wallet in VR environment. It was probably the hardest thing I had to create during all my game jams, but it was worth it since the final product was something to be proud of.",
					],
					photoTop: '/resources/photos/about/photo-about-ach-2a.png',
					photoBottom: '/resources/photos/about/photo-about-ach-2b.jpg',
				},
				{
					title: (
						<span>
							Global Game Jam 2020, 2<sup>nd</sup> place
						</span>
					),
					tags: [
						['gray', 'Jan 2020'],
						['orange', 'Novska'],
					],
					description: [
						'The experience of hackathons is truly unique - 48 hours of working under pressure with other people, low amount of sleeping and high amount of bug-fixing hours, perfect opportunity to network, test your own skills and push your own limits. I became fond of them after this first one that I went to in 2020.',
						"The theme was \"Repair\", and we've decided to create a game focused around repairing a broken mind. The main idea was for player to be able to go around the apartment and be able to change their mind's state by interacting with different items. My task was primarily the development of that interaction system and how it visually changed the scene's post-processing graphic effects.",
						"To our surprise, we managed to snatch a 2nd place, out of 15ish teams competing! The whole event was a blast, and it secured it's place on my to-do lists for following years.",
					],
					photoTop: '/resources/photos/about/photo-about-ach-3b.png',
					photoBottom: '/resources/photos/about/photo-about-ach-3a.png',
				},
			],
		},
		//#endregion

		// #region Education
		{
			title: 'Education',
			id: 'edu',
			items: [
				{
					title: 'Unity education in PISMO incubator',
					tags: [
						['gray', 'Apr - Oct 2019'],
						['orange', 'Novska'],
					],
					description: [
						"At start of my last university year I've enrolled a course of basics of game development. Through that I also go involved into a project with other students, and that gave us an opportunity to present our game on both of the biggest game dev conferences in Croatia that year. At the second one we got introduced to PISMO incubator and learned about their 6-months education - and decided there and then to pursue that after coming back.",
						'Main goal of the education was to give us an overview of ALL the areas of Unity development, some more in depth, others just to get us more interested so that we can keep researching by ourselves. Moveover, it provided me with valuable hands-on project experience and possiblity to network with like-minded people.',
						'This education has shaped my career so far, and is by far the best opportunity for anyone interested in being a game developer in Croatia.',
					],
					photoTop: '/resources/photos/about/photo-about-edu-1a.jpg',
					photoBottom: '/resources/photos/about/photo-about-edu-1b.jpg',
				},
				{
					title: 'Faculty of Electrical Engineering & Computing, University of Zagreb',
					tags: [
						['gray', 'Sep 2013 - Jul 2019'],
						['blue', 'Zagreb'],
					],
					description: [
						"I've completed master's degree in software engineering on University of Zagreb. The faculty I was a student of provided me with basically everything I was interested in after high school education, since it never crossed my mind to pursue any other career paths.",
						'Some of the courses I would say had the most influence and made me more curious about my profession were "Algorithms and Data Structures", "Object Oriented Programming", "Programming Language Translation", "Artificial Inteligence", "Introduction to Virtual Environments", "Business Intelligence", and "Project Management".',
						"For bachelor's thesis I've created a genome sequence analyser, but concluded afterwards that the area of bioinformatics is not really something for me. In my master's thesis focus was on application of convolutional neural networks in recognizing objects in digital games.",
					],
					photoTop: '/resources/photos/about/photo-about-edu-2a.jpg',
					photoBottom: '/resources/photos/about/photo-about-edu-2b.png',
				},
				{
					title: 'Erasmus+ exchange, Luleå University of Technology',
					tags: [
						['gray', 'Aug 2016 - Jan 2017'],
						['green', 'Luleå, Sweden'],
					],
					description: [
						"On my third year of University I've decided to apply for Erasmus mobility. The idea to study abroad for a semestar always seemed great, and when I finally started researching possiblities it didn't take long to find my perfect destination.",
						"It was arguably the most important experience that defined me as a person going forward in life. I've chosen the far north of Europe because I wanted to be inspired, and to get something completely different out of everyday life. The climate, people & mentality, country, culture, uni courses, free time activities, food - all of it was way different than back home in Croatia!",
						'As for the formal education aspect, the biggest difference was that we basically had a group project on every course (for "Pervasive Computing" we created a VR app for DJing). Moreover, as part of an exam for "Software Engineering" course I had 1 week to refactor a 500-lines of Monopoly game code in Java while following learnt principles.',
					],
					photoTop: '/resources/photos/about/photo-about-edu-3a.jpg',
					photoBottom: '/resources/photos/about/photo-about-edu-3b.jpg',
				},
			],
		},
		//#endregion

		// #region ESN
		{
			title: 'ESN',
			id: 'esn',
			items: [
				{
					title: 'Erasmus student network - Overview',
					tags: [
						['gray', 'Sep 2018 - Jun 2022'],
						['red', 'Europe'],
					],
					description: [
						"My Erasmus semester abroad made me want to stay somehow connected to the idea of mobility even after coming back. Luckily, there is a local section of ESN in Zagreb, so I've decided to join with the idea of meeting and helping international students arriving to my city.",
						'ESN is the biggest international volonteering student organisation in Europe, having over 15,000 active members, whos mission is enrichment of society through international students. At the end, I ended up staying in the organization for the next 4 years - gathering and absorbing all the knowledge and experience I could.',
						"To me ESN was (and still is) more than just a student organisation, it was a home where I've always felt accepted and at peace, surrounded with hard-working, like-minded people. It's a place where I've met some of the most important people in my life, and collected most important soft skills for the rest of my career.",
					],
					photoTop: '/resources/photos/about/photo-about-esn-1a.jpg',
					photoBottom: '/resources/photos/about/photo-about-esn-1b.jpg',
				},
				{
					title: 'Representation',
					tags: [
						['gray', 'Jul 2019 - Jun 2020'],
						['blue', 'Zagreb'],
						['orange', 'Debrecen'],
					],
					description: [
						'Having learnt a lot about inner structure and operational flows of local section during my first year, I ended up applying and being elected as the president of ESN Zagreb.',
						"I've never led anything in my life before. That's why this was in a way both me leaving my comfort zone forever behind, and deciding to accept more challenges and responsibilities that come my way. Now looking back on it I would say it certainly paid off.",
						'Representing my organisation ment staying in touch with main partners, both institutional (University) and corporate,  being a voice of the section on inner local, national and international ESN events, and keeping communication with some other student organizations and stakeholders in Zagreb. The pandemic kinda ruined my plans for the second part of the mandate, but overall it was a very interesting experience - and I was ready for new challenges.',
					],
					photoTop: '/resources/photos/about/photo-about-esn-2a.jpg',
					photoBottom: '/resources/photos/about/photo-about-esn-2b.jpg',
				},
				{
					title: 'Business & Finance',
					tags: [
						['gray', 'Jul 2021 - Jun 2022'],
						['blue', 'Zagreb'],
						['orange', 'Novi Sad'],
						['orange', 'Appenzell'],
						['orange', 'Bucharest'],
					],
					description: [
						"During my third year in ESN I've dabbled in the field of HR in ESN Zagreb, and was maintaining website of ESN Croatia. At the end of that year I've decided I want something different - and applied for Treasurer position of ESN Croatia.",
						"Since I've already started my freelancing journey, I figured out it would be a fun new adventure to get more experience with finances, accounting and partnerships. By then everyone already knew I absolutely love creating spreadsheets, so they trusted me with this role which mainly involved creating and constantly reiterating a budget, keeping track of all income & expenses, and reporting all this to the rest of the network.",
						"Moreover, I've had lots of opportunity to travel to various international ESN events, out of which Business & Finance Conferences were main point of gathering information, sharing knowledge and networking with treasures and partnership managers from other countries.",
					],
					photoTop: '/resources/photos/about/photo-about-esn-3a.jpg',
					photoBottom: '/resources/photos/about/photo-about-esn-3b.jpg',
				},
				{
					title: 'Facilitation',
					tags: [
						['gray', 'Sep 2020 - May 2022'],
						['blue', 'Zagreb'],
						['green', 'Zadar'],
						['green', 'Split'],
						['green', 'Osijek'],
						['orange', 'Porto'],
					],
					description: [
						"Throughout my time in ESN I've had quite a lot of opportunities to manage different groups of people. Sometimes it was necessary to schedule and lead assemblies, meetings or calls. In other situations it was more practical, like planning and facilitating trainings or workshops.",
						"Some of the more important skills I've developed through all this are proper preparation and time management. I've learnt about the importance of having a structured agenda, but also know how to read the situation and be flexible if neccesary. It is an area I've probably grew the most at during these years. I belive the experience gained is invaluable, especially in such a diverse, multicultural and dynamic environment.",
						'Specific workshop to showcase would be the one about my Comba project during the biggest ESN event in Porto.  Together with my colleges we brainstormed an idea, prepared the materials, and moderated the workshop with 20 participants where we gathered some great feedback!',
					],
					photoTop: '/resources/photos/about/photo-about-esn-4a.jpg',
					photoBottom: '/resources/photos/about/photo-about-esn-4b.jpg',
				},
			],
		},
		//#endregion
	],
};

export default profile;
