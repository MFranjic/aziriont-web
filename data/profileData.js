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
					title: 'Freelance Unity developer',
					tags: [
						['gray', 'Dec 2019 - Sep 2022'],
						['blue', 'Zagreb, Croatia'],
					],
					description: [
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' +
							'dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,' +
							'nascetur ridiculus mus.',
						'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat' +
							'massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In' +
							'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede' +
							'mollis pretium. Integer tincidunt.',
						'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean' +
							'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,' +
							'dapibus in, viverra quis, feugiat a, tellus.',
					],
				},
				{
					title: 'React Native internship',
					tags: [
						['gray', 'Sep 2018 - Apr 2019'],
						['blue', 'Zagreb, Croatia'],
					],
					description: [
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' +
							'dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,' +
							'nascetur ridiculus mus.',
						'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat' +
							'massa quis enil, aliquet nec, vulputate eget, arcu. In' +
							'enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede' +
							'mollis pretium. Integer tincidunt.',
						'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean' +
							'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,' +
							'dapibus in, viverra quis, feugiat a, tellus.',
					],
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
					title: 'Global Game Jam 2022',
				},
				{
					title: 'VR Game Jam 2021',
				},
				{
					title: 'Global Game Jam 2020',
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
				},
				{
					title: 'Faculty of Electrical Engineering and Computing, University of Zagreb',
				},
				{
					title: 'Erasmus+ mobility',
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
					title: 'ESN1',
				},
				{
					title: 'ESN2',
				},
				{
					title: 'ESN3',
				},
				{
					title: 'ESN4',
				},
			],
		},
		//#endregion
	],
};

export default profile;
