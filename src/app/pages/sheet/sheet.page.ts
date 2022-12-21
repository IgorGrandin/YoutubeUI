import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {

  items = [
    {
      text: 'Create a Short',
      icon: 'videocam-outline',
    },
    {
      text: 'Upload a Video',
      icon: 'push-outline',
    },
    {
      text: 'Go live',
      icon: 'radio-outline',
    },
    {
      text: 'Add to your story',
      icon: 'add-circle-outline',
    },
    {
      text: 'Create a post',
      icon: 'create-outline',
    },
  ];

  constructor(private modalCrtl: ModalController) { }


  ngOnInit() {
  }

  dismiss(){
    this.modalCrtl.dismiss();
  }

}
