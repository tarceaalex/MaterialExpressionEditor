import { Injectable } from '@angular/core'
import { TranslateSet } from './translate.model';
import languageValuesRO from './translate.RO';
import languageValuesEN from './translate.EN';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    public languages = [
        { id: 'ro-RO', value: 'RO' },
        { id: 'en-GB', value: 'EN' }
    ];

    private language: any;

    private dictionary: { [key: string]: TranslateSet } = {
        'en-GB': languageValuesEN,
        'ro-RO': languageValuesRO
    };

    constructor() {
        this.language = this.languages[0];
    }

    setLanguage(lang: string) {
        var selectedLanguage = this.languages.filter(x => x.id == lang)[0];
        if (selectedLanguage)
            this.language = selectedLanguage;
        else
            this.language = this.languages[0];
    }

    translate(key: string): string {
        if (this.dictionary[this.language.id] != null) {
            return this.dictionary[this.language.id].values[key]
        }
    }
}

