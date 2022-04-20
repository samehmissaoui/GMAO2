import { Routes } from '@angular/router';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { OperateurComponent } from './operateur/operateur.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
			
				path: 'operateur',
				loadChildren: () => import('./operateur/operateur.module').then(m => m.OperateurModule)
			},
			{
			
				path: 'agent',
				loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
			},
			{
			
				path: 'technicien',
				loadChildren: () => import('./technicien/technicien.module').then(m => m.TechnicienModule)
			},
			// {
			// 	path: 'pagination',
			// 	component: NgbdpaginationBasicComponent
			// },
			// {
			// 	path: 'badges',
			// 	component: BadgeComponent
			// },
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
	// 		{
	// 			path: 'dropdown',
	// 			component: NgbdDropdownBasicComponent
	// 		},
	// 		{
	// 			path: 'nav',
	// 			component: NgbdnavBasicComponent
	// 		},
	// 		{
	// 			path: 'buttons',
	// 			component: ButtonsComponent
	// 		}
		]
	}
];
