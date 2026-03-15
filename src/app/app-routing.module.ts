import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AviationRagChatComponent } from './aviation-rag-chat/aviation-rag-chat.component';
import { AviationRagAzureComponent } from './aviation-rag-azure/aviation-rag-azure.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aviationRag', component: AviationRagChatComponent },
  { path: 'aviationRagAzure', component: AviationRagAzureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
