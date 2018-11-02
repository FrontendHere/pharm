import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'conversations',
        pathMatch: 'full',
    },
    { path: 'conversations', loadChildren: './modules/conversations/conversations.module#ConversationsModule'},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting {
}
