import { AQCard } from '@/components/ui/aqcard';
import { Card } from '@/components/ui/card';
import SiteHeader from '@/components/ui/siteheader';

export const Weapon = [
  {
    excalibur: [
      {
        materials: [
          {
            swordHilt: [
              { shaft: 'brown shaft' },
              { bottomPiece: 'brown wooden piece' },
            ],
            swordBlade: [{ steel: 'dragonsteel' }, { polish: 'dragon tears' }],
          },
        ],
      },
    ],
  },
];

function createButtonForEach() {
  // TODO: destructure weapon array, create button for each from top to bottom.
}

export function Home() {
  return (
    <>
      <SiteHeader />
      <div>
        <Card />
        <AQCard />
        <AQCard />
      </div>
    </>
  );
}
