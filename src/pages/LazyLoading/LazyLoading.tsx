import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PixabayHit {
  id: number;
  largeImageURL: string;
}

interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayHit[];
}

const PIXABAY_API_KEY = process.env.NEXT_PUBLIC_PIXABAY_KEY;

const LazyLoading = (): JSX.Element => {
  const [hits, setHits] = useState<PixabayHit[]>([]);
  useEffect(() => {
    const url = 'https://pixabay.com/api';
    axios
      .get<PixabayResponse>(url, {
        params: {
          key: PIXABAY_API_KEY,
        },
      })
      .then(({ data }) => {
        setHits(data.hits);
      });
  }, []);

  return (
    <div>
      <h1>Lazy Loading PoC</h1>
      {hits.length &&
        hits.map((hit) => {
          return <Image src={hit.largeImageURL} key={hit.id} width={500} height={300} />;
        })}
    </div>
  );
};

export default LazyLoading;
