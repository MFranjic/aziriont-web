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
						'I enjoy doing the frontend stuff in Unity editor, especially the UI shenanigans,  but since the beginning of my Unity career my favorite part has been C# scripting in backend. My formal education provided me with this gift that I love creating complex game systems, and things became even more interesting when I discovered serverless Firebase.',
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
					title: 'Global Game Jam 2022, 1st place',
					tags: [
						['gray', 'Jan 2022'],
						['orange', 'Novska'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-ach-1a.png',
					photoBottom: '/resources/photos/about/photo-about-ach-1b.png',
				},
				{
					title: 'VR Game Jam 2021, 2nd place',
					tags: [
						['gray', 'Jun 2021'],
						['orange', 'Novska'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-ach-2a.png',
					photoBottom: '/resources/photos/about/photo-about-ach-2b.png',
				},
				{
					title: 'Global Game Jam 2020, 2nd place',
					tags: [
						['gray', 'Jan 2020'],
						['orange', 'Novska'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-ach-3a.png',
					photoBottom: '/resources/photos/about/photo-about-ach-3b.png',
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
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-edu-1a.png',
					photoBottom: '/resources/photos/about/photo-about-edu-1b.png',
				},
				{
					title: 'Faculty of Electrical Engineering & Computing, University of Zagreb',
					tags: [
						['gray', 'Sep 2013 - Jul 2019'],
						['blue', 'Zagreb'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-edu-2a.png',
					photoBottom: '/resources/photos/about/photo-about-edu-2b.png',
				},
				{
					title: 'Erasmus+ exchange, Luleå University of Technology',
					tags: [
						['gray', 'Aug - Dec 2016'],
						['green', 'Luleå'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-edu-3a.png',
					photoBottom: '/resources/photos/about/photo-about-edu-3b.png',
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
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-esn-1a.png',
					photoBottom: '/resources/photos/about/photo-about-esn-1b.png',
				},
				{
					title: 'Representation',
					tags: [
						['gray', 'Jul 2019 - Jun 2020'],
						['blue', 'Zagreb'],
						['orange', 'Debrecen'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-esn-2a.png',
					photoBottom: '/resources/photos/about/photo-about-esn-2b.png',
				},
				{
					title: 'Bussiness & Finance',
					tags: [
						['gray', 'Jul 2021 - Jun 2022'],
						['blue', 'Zagreb'],
						['orange', 'Novi Sad'],
						['orange', 'Appenzell'],
						['orange', 'Bucharest'],
					],
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-esn-3a.png',
					photoBottom: '/resources/photos/about/photo-about-esn-3b.png',
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
					description: ["I'm Marko", "I'm Marko", "I'm Marko"],
					photoTop: '/resources/photos/about/photo-about-esn-4a.png',
					photoBottom: '/resources/photos/about/photo-about-esn-4b.png',
				},
			],
		},
		//#endregion
	],
};

export default profile;
