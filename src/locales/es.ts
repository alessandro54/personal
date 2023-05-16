import { error } from '@sveltejs/kit';
export default {
	es: {
		home: {
			intro:
				'Mi nombre es Alessandro y soy un ingeniero de software basado en Perú.'
		},
		experience: {
			title: 'Experiencia',
			subtitle: 'Experiencia laboral',
			remote: 'Remoto',
			at: 'en'
		},
		date: {
			months: {
				short: {
					jan: 'Ene',
					feb: 'Feb',
					mar: 'Mar',
					apr: 'Abr',
					may: 'May',
					jun: 'Jun',
					jul: 'Jul',
					aug: 'Ago',
					sep: 'Sep',
					oct: 'Oct',
					nov: 'Nov',
					dec: 'Dic'
				}
			}
		},
		error: {
			404: {
				title: 'Página no encontrada',
				description: 'La página que estás buscando no existe',
				goBack: 'Volver a la página principal'
			}
		}
	}
};
