import React from 'react';
import { Avatar, AvatarFallback, AvatarNextImage } from './ui/avatar';
import profilePic from '@/assets/profile-pic.png';

type Props = {};

function ProfileAvatar({}: Props) {
  return (
    <Avatar className='size-40'>
      <AvatarNextImage
        src={profilePic}
        alt='Bogdan-Marius Mosica - Profile picture'
      />
      <AvatarFallback>BMM</AvatarFallback>
    </Avatar>
  );
}

export default ProfileAvatar;
