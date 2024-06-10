import ItemList from '@/components/ui/ItemList';
import SiteHeader from '@/components/ui/siteheader';

const sword = [
  {
    id: 1,
    name: 'Excalibur',
    materials: [
      {
        id: 2,
        name: 'hilt',
        materials: [
          {
            id: 3,
            name: 'brown shaft',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Dragonbane Armor',
    materials: [
      {
        id: 5,
        name: 'Dragonbane chest',
        materials: [
          {
            id: 6,
            name: 'Dragonsteel Ingots',
          },
        ],
      },
    ],
  },
];

const voidHighlord = [
  {
    id: 0,
    name: 'Void Highlord',
    materials: [
      {
        id: 0,
        name: 'Roentgenium of Nulgath x15',
        materials: [
          {
            id: 0,
            name: "Void Highlord's Challenge",
            link: 'http://aqwwiki.wikidot.com/void-highlord-s-quest',
          },
          {
            id: 0,
            name: "Nulgath Insignia x5 for 2 Roentgenium's (merge)",
            link: '',
          },
        ],
      },
      {
        id: 0,
        name: 'Void Crystal A x1',
        materials: [{}, {}],
      },
      {
        id: 0,
        name: 'Void Crystal B x1',
        materials: [
          {
            id: 0,
            name: 'Diamond of Nulgath x200',
          },
          {
            id: 0,
            name: 'Blood Gem of the Archfiend x30',
          },
          {
            id: 0,
            name: 'Totem of Nulgath x15',
          },
          {
            id: 0,
            name: "Elders' Blood x2",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Dragonbane Armor',
    materials: [
      {
        id: 5,
        name: 'Dragonbane chest',
        materials: [
          {
            id: 6,
            name: 'Dragonsteel Ingots',
          },
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ItemList items={voidHighlord} />
    </>
  );
}
