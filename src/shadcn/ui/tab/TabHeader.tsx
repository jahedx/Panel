// import Button from '@/components/Button';
// import { useI18n } from '@/hooks/useI18n';
// import { Link } from '@tanstack/react-router';

// type props = {
//   activeTab: string;
//   title?: string;
// };
// const TabHeader = ({ activeTab, title }: props) => {
//   const tabValues: Array<string> = [
//     'base-info',
//     'branches',
//     'members',
//     'files',
//     'activity-types',
//     'accounts',
//     'licenses',
//   ];
//   const { t } = useI18n();

//   const currentIndex = tabValues.indexOf(activeTab);
//   const nextIndex = (currentIndex + 1) % tabValues.length;
//   const prevIndex = (currentIndex - 1 + tabValues.length) % tabValues.length;

//   return (
//     <div className="bg-gradient-to-b from-[#9D9D9D] p-4">
//       <div className={`${title ? ' justify-between' : 'justify-end'} flex mb-2`}>
//         {title && <h1 className="text-xl font-bold">{title}</h1>}
//         <div className="flex gap-1">
//           {activeTab !== tabValues[0] && (
//             <Button>
//               <Link to="/registration/info/$tab" params={{ tab: tabValues[prevIndex] ?? '' }}>
//                 {t('previous')}
//               </Link>
//             </Button>
//           )}
//           {activeTab !== tabValues[tabValues.length - 1] && (
//             <Button>
//               <Link to="/registration/info/$tab" params={{ tab: tabValues[nextIndex] ?? '' }}>
//                 {t('next')}
//               </Link>
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabHeader;
