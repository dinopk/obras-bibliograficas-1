import { Component, OnInit } from '@angular/core';
import { AuthorsDataService } from 'src/app/data/services/authors-data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  // formattedName: string;
  inputtedName: string = 'Flávio maran Florentino Neto';

  constructor(private authorsDataService: AuthorsDataService) { }

  ngOnInit(): void {

    const [formattedName, nameAmount] = this.authorsDataService.formatAuthorName('João Silve Neto');
    console.log(formattedName, nameAmount);

    console.log(this.authorsDataService.formatAuthorName('João Silve Neto'));
    console.log(this.authorsDataService.formatAuthorName('Paulo Coelho'));
    console.log(this.authorsDataService.formatAuthorName('Jaun'));
    console.log(this.authorsDataService.formatAuthorName('Flávio dos Santos'));
    console.log(this.authorsDataService.formatAuthorName('Flávio Maran Florentino'));
    console.log(this.authorsDataService.formatAuthorName('Flávio Maran Florentino Sagaman'));

  }

}
