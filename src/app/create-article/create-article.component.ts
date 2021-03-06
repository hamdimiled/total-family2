import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {

  constructor( public modalCtrl: ModalController) { }

  ngOnInit() {}
  closeModal() {

    this.modalCtrl.dismiss();
}
}
