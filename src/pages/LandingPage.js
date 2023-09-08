import React from 'react'

const profiles = [
  {
    name: 'John',
    id: 'john123',
    avatar: 'logo2.png',
  },
  {
    name: 'Sarah',
    id: 'sarah456',
    avatar: 'logo3.png',
  },
  {
    name: 'Michael',
    id: 'michael789',
    avatar: 'logo5.jpeg',
  },
];

const LandingPage = ({ setProfile }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black'>
      <div className='text-white text-4xl font-bold mb-4'>Who's watching?</div>
      <div className='flex flex-wrap justify-center'>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className='mx-4 my-2 cursor-pointer'
            onClick={() => setProfile(profile)}
          >
            <img
              src={profile.avatar}
              alt={` ${profile.name}`}
              className='rounded-full h-24 w-24 object-cover border-4 border-transparent hover:border-red-500'
            />
            <div className='text-white text-lg font-bold mt-2'>
              {profile.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default LandingPage;