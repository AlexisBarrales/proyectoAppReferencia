import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista2(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista3(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista4(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista5(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista6(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista7(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista8(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista9(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }

  verArtista10(item: any){
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista',artistaId])
  }


}
