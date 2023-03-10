import { SheetPage } from './../pages/sheet/sheet.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCtrl: ModalController) {}

  async add(){
    const modal = await this.modalCtrl.create({
      component: SheetPage,
      breakpoints: [0.5, 0.8],
      initialBreakpoint: 0.5,
      handle: false,
    });

    await modal.present();
  };

}
