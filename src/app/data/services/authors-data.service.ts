import { Injectable } from '@angular/core';
import { HONOR_NAMES, PREPOSITIONS } from '../utils/authors.util';

@Injectable({
  providedIn: 'root',
})
export class AuthorsDataService {
  prepositions = [...PREPOSITIONS];
  honorNames = [...HONOR_NAMES];

  constructor() {}

  formatAuthorName(authorName: string) {
    const authorNames = authorName.trim().split(' ');

    const [hasPrepositionChar, prepositionIndex] = this.handlePrepositionName(
      authorNames
    )!;
    const hasHonorName = this.handleHonorName(authorNames);

    const formattedAuthorName = this.handleAuthorNameVariants(
      authorNames,
      hasPrepositionChar,
      hasHonorName,
      prepositionIndex
    );

    return [formattedAuthorName, formattedAuthorName.trim().split(' ').length];
  }

  handleAuthorNameVariants(
    authorNames: string[],
    hasPrepositionChar?: boolean,
    hasHonorName?: boolean,
    prepositionIndex?: number
  ) {
    const lastELement = authorNames[authorNames.length - 1].toUpperCase();
    const substringFirstElLower = authorNames[0].substring(1).toLowerCase();

    const substringFirstElUpper = authorNames[0].substring(0, 1).toUpperCase();

    let formattedAuthorName;

    if (authorNames.length === 1) {
      formattedAuthorName = lastELement;

      return formattedAuthorName;
    }

    if (hasPrepositionChar && prepositionIndex) {
      formattedAuthorName = `${lastELement}, ${substringFirstElUpper + substringFirstElLower } ${authorNames[prepositionIndex].toLowerCase()}`;

      return formattedAuthorName;
    }

    if (hasHonorName) {
      formattedAuthorName = `${lastELement} ${authorNames[authorNames.length - 2]}, ${substringFirstElUpper + substringFirstElLower}`;

      return formattedAuthorName;
    }

    formattedAuthorName = `${lastELement}, ${substringFirstElUpper + substringFirstElLower}`;

    return formattedAuthorName;
  }

  handleHonorName(authorNames: string[]) {
    let hasHonorName = false;
    this.honorNames.map((_, index) => {
      if (index !== -1 && authorNames.length >= 3) {
        hasHonorName = true;
      }
    });

    return hasHonorName;
  }

  handlePrepositionName(authorNames: string[]): [boolean, number] {
    let hasPrepositionChar = false;
    let prepositionIndex = -1;

    this.prepositions.map((prepositionChar) => {
      authorNames.find((authorChar, index) => {

        if (authorChar === prepositionChar) {
          hasPrepositionChar = true;
          prepositionIndex = index;
        }

      });
    });

    return [hasPrepositionChar, prepositionIndex];
  }
}
