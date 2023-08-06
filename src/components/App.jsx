import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from "./Transactions/TransactionHistory";
import user from '../data/user.json';
import staticItems from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      {/* використовую компонент та передаю йому дані з файлу user.json */}
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* використовую компонент та передаю йому дані з файлу data.json */}
      <Statistics 
        title="Upload stats" 
        stats={staticItems} 
      />
      {/* <Statistics stats={staticItems} /> */}

      {/* використовую компонент та передаю йому дані з файлу friends.json */}
      <FriendList 
        friends={friends}
      />

      {/* використовую компонент та передаю йому дані з файлу transactions.json */}
      <TransactionHistory 
        items={transaction}
      />
    </div>
  );

};
