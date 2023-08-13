import styled from 'styled-components';
import { Avatar, FriendsItem } from './FriendList.styled';

const StatusSpan = styled.span`
  width: 20px;
  height:20px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${friends => (friends.isOnline ? 'green' : 'red')};
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem className="item">
      <StatusSpan isOnline={isOnline} />
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsItem>
  );
};

//  const FriendListItem = ({ avatar, name, isOnline }) => {
//     return (
//       <li className="item">
//         {/* використовую тернарний оператор, щоб змінювати клас CSS для <span> залежно від стану друга */}
//         <span className={isOnline ? 'status online' : 'status offline'}></span>
//         <img className="avatar" src={avatar} alt="User avatar" width="48" />
//         <p className="name">{name}</p>
//       </li>
//     );
//   };

export default FriendListItem;