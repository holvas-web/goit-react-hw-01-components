import {Avatar, Description, ListItem, ProfileWrap, SpanItem, UserList} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => { // використовуємо деструктуризацію пропсів, щоб отримати доступ до окремих значень
    const { followers, views, likes } = stats;

    return ( // використовуємо ці значення для виведення інформації відповідно до бажаної структури
        <ProfileWrap className='profile'>
            <Description className='description'>
                <Avatar 
                    src={avatar} 
                    alt="User avatar" 
                    className='avatar'
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </Description>

            <UserList className="stats">
                <ListItem>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </ListItem>
                <SpanItem >
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </SpanItem >
                <ListItem>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </ListItem>
            </UserList>
        </ProfileWrap>
  );
};