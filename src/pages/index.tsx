import { Card, Cards } from 'scryfall-sdk';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import _ from 'lodash';
import Image from 'next/image';
import { useCallback, useState } from 'react';

const queryClient = new QueryClient();

function Home() {
  const [query, setQuery] = useState('Darigaaz, Shivan Champion');
  const [picks, setPicks] = useState<Card[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: [query],
    queryFn: () => Cards.search('spellbook:"' + query + '"').waitForAll(),
  });

  const onNew = useCallback(
    () => setPicks(_.shuffle(data).slice(0, 3)),
    [data]
  );

  return (
    <div
      className={
        'background-animate  h-screen w-screen items-center justify-center'
      }
    >
      <input value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
      <button className={'bg-blue-500'} onClick={onNew}>
        get new
      </button>
      {isLoading ? (
        <div>load</div>
      ) : (
        <div className={'flex'}>
          {picks?.map((card, index) => (
            <div key={card.name + index} className={'animate-pop'}>
              <Image
                alt="a fooking dragoon"
                src={card.getImageURI('normal') ?? ''}
                width={488}
                height={680}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
