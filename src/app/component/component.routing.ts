import { Routes } from '@angular/router';
import { NgbdAlertBasicComponent } from './alert/alert.component';
 


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
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
	       { 	path: 'intervention',
		    	loadChildren: () => import('./intervention/intervention.module').then(m => m.InterventionModule)
	     	}, 
        	{	path: 'article',
        		loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
        	}
		]
	}
];
