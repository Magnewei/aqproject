import DaysToComplete from '@/components/ui/DaysToComplete';
import ItemList from '@/components/ui/ItemList';
import SiteHeader from '@/components/ui/siteheader';

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
            days: 15,
          },
          {
            id: 0,
            name: "Nulgath Insignia x5 for 2 Roentgenium's (merge)",
            days: 56,
          },
        ],
      },
      {
        id: 0,
        name: 'Void Crystal A x1',
        materials: [
          {
            name: 'Unidentified 10 (Item)',
          },
          { name: 'Gem of Nulgath x150' },
          {
            name: 'Dark Crystal Shard x200',
          },
          {
            name: 'Tainted Gem x200',
          },
        ],
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
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ItemList items={voidHighlord} />
      <DaysToComplete />
    </>
  );
}
