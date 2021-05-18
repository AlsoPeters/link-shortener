import { useEffect } from 'react';
import axios from 'axios';

export default function ShortUrlCall() {
  useEffect(() => {
    axios
      .post(
        'https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html'
      )
      .then((response) => {
        console.log(response);
      });
  });
}
