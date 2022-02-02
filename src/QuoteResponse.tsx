import {useState, useEffect} from 'react';
import { Quote } from './Quote';
import { getQuote } from './QuotesApi';

export function QuoteResponse() {

    const [quote, setQuote] = useState<Quote[]>([]);

    useEffect(() => {

        getQuote().then(data => setQuote(data));
    }, []);

    return (

        <ul>
            {quote?.map(item => <li>"{item.text}." -{item.author}</li>)}
        </ul>
    );
}