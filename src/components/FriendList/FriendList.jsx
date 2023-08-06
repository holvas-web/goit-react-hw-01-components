// import { ProfileList } from 'components/Profile/Profile.styled';
import { FriendsWrap } from './FriendList.slyled';
import FriendListItem from './FriendListItem'; 

export const FriendList = ({ friends }) => {
  return (
    <FriendsWrap className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsWrap>
  );
};

