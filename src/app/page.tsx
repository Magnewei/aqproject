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
  // TODO: add button component with styling etc. for each button.
  // TOOD: Maybe make a list component to hold buttons?
}

export function Home() {
  return (
    <>
      <SiteHeader />
      <div></div>
    </>
  );
}
