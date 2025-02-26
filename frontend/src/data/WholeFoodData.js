import TodaySpecial from './TodaySpecial'; // Placeholder; replace with actual import
import Combos from './Combos';           // IDs: 9-18
import Breakfast from './Breakfast';   // IDs: 19-33
import Lunch from './Lunch';           // IDs: 34-48
import Dinner from './Dinner';         // IDs: 49-63
import ChipSnacks from './Chips';      // IDs: 64-73
import Biscuits from './Biscuits';     // IDs: 74-83
import Drinks from './Drinks';         // IDs: 84-93
import Juices from './Juices';         // IDs: 94-103
import Sweets from './Sweets';          // IDs: 104-108

const WholeFoodData = [
  ...TodaySpecial,
  ...Combos,
  ...Breakfast,
  ...Lunch,
  ...Dinner,
  ...ChipSnacks,
  ...Biscuits,
  ...Drinks,
  ...Juices,
  ...Sweets
].sort((a, b) => a.id - b.id);

export default WholeFoodData;