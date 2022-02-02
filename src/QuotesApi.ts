import axios from 'axios';
import { Quote } from './Quote';

export function getQuote():Promise<Quote[]> {

        return axios.get<Quote[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
            .then(response => response.data);
}