import { Component } from '@angular/core';
import { AuthorsDataService } from 'src/app/data/services/authors-data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  inputtedName: string = 'Flávio maran Florentino Neto';
  nameVariants: string[] = [
    'Lucas dos Santos',
    'Paulo Coelho',
    'João Silva Neto',
    'Pereira',
  ];
  formattedNames: { name: string | number; amount: string | number; }[];

  constructor(private authorsDataService: AuthorsDataService) {
    this.formattedNames = this.handleNameVariantsFormat(this.nameVariants);
  }


  handleNameVariantsFormat(nameVariants: string[]): { name: string | number; amount: string | number; }[] {
    return nameVariants.map((nameVariant: string) => {
      const [name, amount] = this.authorsDataService.formatAuthorName(nameVariant);

      return {
        name,
        amount,
      };
    })
  }

}
