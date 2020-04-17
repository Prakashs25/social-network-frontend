export default {
	palette: {
		primary: {
			light: '#8561c5',
			main: '#673ab7',
			dark: '#482880',
			contrastText: '#fff'
		},
		secondary: {
			light: '#33bfff',
			main: '#00b0ff',
			dark: '#007bb2',
			contrastText: '#fff'
		}
	},
	typography: {
		useNextVariants: true
	},
	form: {
		textAlign: 'center'
	},
	image: {
		margin: '20px auto 20px auto',
		width: '125px'
	},
	pageTitle: {
		margin: '10px auto 10px auto'
	},
	textField: {
		margin: '10px auto 10px auto'
	},
	button: {
		marginTop: 10,
		position: 'relative'
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	progress: {
		position: 'absolute'
	},
	invisibleSeparator: {
		border: 'none',
		margin: 4
	},
	visibleSeparator: {
		width: '100%',
		borderBottom: '1px solid rgba(0,0,0,0.1)',
		marginBottom: 20
	},
	paper: {
		padding: 20
	},
	profile: {
		'& .image-wrapper': {
			textAlign: 'center',
			position: 'relative',
			'& button': {
				position: 'absolute',
				top: '80%',
				left: '70%'
			}
		},
		'& .profile-image': {
			width: 200,
			height: 200,
			objectFit: 'cover',
			maxWidth: '100%',
			borderRadius: '5%'
		},
		'& .profile-details': {
			textAlign: 'center',
			'& span, svg': {
				verticalAlign: 'middle'
			},
			'& a': {
				color: '#00bcd4'
			}
		},
		'& hr': {
			border: 'none',
			margin: '0 0 10px 0'
		},
		'& svg.button': {
			'&:hover': {
				cursor: 'pointer'
			}
		}
	},
	buttons: {
		textAlign: 'center',
		'& a': {
			margin: '20px 10px'
		}
	},
	formstyle: {
		background: '#fff',
		padding: '20px',
		margin: '10px',
		borderRadius: '15px',
		boxShadow: '10px 10px 5px #aaafff',
		border: '1px solid #BFBFBF',
		opacity: '0.9'
	}
};
