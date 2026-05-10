import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import Expert from '../models/Expert.js'

await mongoose.connect(process.env.MONGO_URI)

await Expert.deleteMany()

await Expert.insertMany([

  {
    name: 'Priya Singh',
    category: 'Mentor',
    experience: 6,
    rating: 4.9,
    bio: 'Career mentor helping students crack tech interviews.',

    availableSlots: [
      {
        date: '12 May',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM'],
      },
    ],
  },

  {
    name: 'Sneha Roy',
    category: 'Developer',
    experience: 3,
    rating: 4.5,
    bio: 'Frontend React developer specialized in UI systems.',

    availableSlots: [
      {
        date: '10 May',
        slots: ['3:00 PM', '4:00 PM'],
      },
    ],
  },

  {
    name: 'Arjun Patel',
    category: 'Designer',
    experience: 7,
    rating: 4.7,
    bio: 'Senior UI designer with fintech experience.',

    availableSlots: [
      {
        date: '13 May',
        slots: ['12:00 PM', '1:00 PM'],
      },
    ],
  },

  {
    name: 'Karan Mehta',
    category: 'Developer',
    experience: 8,
    rating: 4.9,
    bio: 'Backend Node.js architect and system design mentor.',

    availableSlots: [
      {
        date: '14 May',
        slots: ['5:00 PM', '6:00 PM'],
      },
    ],
  },

  {
    name: 'Neha Kapoor',
    category: 'Mentor',
    experience: 5,
    rating: 4.8,
    bio: 'Resume reviewer and placement preparation coach.',

    availableSlots: [
      {
        date: '11 May',
        slots: ['11:00 AM', '12:00 PM'],
      },
    ],
  },

  {
    name: 'Rohit Das',
    category: 'Developer',
    experience: 2,
    rating: 4.3,
    bio: 'JavaScript and MERN stack trainer.',

    availableSlots: [
      {
        date: '15 May',
        slots: ['9:00 AM', '10:00 AM'],
      },
    ],
  },

  {
    name: 'Anjali Gupta',
    category: 'Designer',
    experience: 6,
    rating: 4.8,
    bio: 'Creative product designer with branding expertise.',

    availableSlots: [
      {
        date: '16 May',
        slots: ['2:00 PM', '3:00 PM'],
      },
    ],
  },

  {
    name: 'Vikram Joshi',
    category: 'Mentor',
    experience: 10,
    rating: 5.0,
    bio: 'Senior software engineer mentoring freshers.',

    availableSlots: [
      {
        date: '12 May',
        slots: ['4:00 PM', '5:00 PM'],
      },
    ],
  },

  {
    name: 'Simran Kaur',
    category: 'Developer',
    experience: 4,
    rating: 4.6,
    bio: 'Full stack engineer and coding educator.',

    availableSlots: [
      {
        date: '10 May',
        slots: ['8:00 PM', '9:00 PM'],
      },
    ],
  },

  {
    name: 'Akash Yadav',
    category: 'Designer',
    experience: 5,
    rating: 4.7,
    bio: 'Mobile app designer with modern UI expertise.',

    availableSlots: [
      {
        date: '17 May',
        slots: ['10:00 AM', '11:00 AM'],
      },
    ],
  },

  {
    name: 'Pooja Nair',
    category: 'Mentor',
    experience: 7,
    rating: 4.9,
    bio: 'DSA and interview preparation mentor.',

    availableSlots: [
      {
        date: '18 May',
        slots: ['1:00 PM', '2:00 PM'],
      },
    ],
  },

  {
    name: 'Aditya Rao',
    category: 'Developer',
    experience: 5,
    rating: 4.5,
    bio: 'MERN stack developer building scalable apps.',

    availableSlots: [
      {
        date: '19 May',
        slots: ['3:00 PM', '4:00 PM'],
      },
    ],
  },

  {
    name: 'Meera Iyer',
    category: 'Designer',
    experience: 9,
    rating: 4.9,
    bio: 'Product designer focused on SaaS platforms.',

    availableSlots: [
      {
        date: '20 May',
        slots: ['5:00 PM', '6:00 PM'],
      },
    ],
  },

  {
    name: 'Sourav Banerjee',
    category: 'Developer',
    experience: 3,
    rating: 4.4,
    bio: 'React and Firebase developer.',

    availableSlots: [
      {
        date: '21 May',
        slots: ['9:00 AM', '10:00 AM'],
      },
    ],
  },

  {
    name: 'Nikita Sharma',
    category: 'Mentor',
    experience: 8,
    rating: 4.8,
    bio: 'Career strategist and HR interview mentor.',

    availableSlots: [
      {
        date: '22 May',
        slots: ['6:00 PM', '7:00 PM'],
      },
    ],
  },

  {
    name: 'Deepak Mishra',
    category: 'Developer',
    experience: 6,
    rating: 4.7,
    bio: 'API and microservices specialist.',

    availableSlots: [
      {
        date: '23 May',
        slots: ['11:00 AM', '12:00 PM'],
      },
    ],
  },

  {
    name: 'Tanvi Kulkarni',
    category: 'Designer',
    experience: 4,
    rating: 4.5,
    bio: 'Creative visual designer and illustrator.',

    availableSlots: [
      {
        date: '24 May',
        slots: ['2:00 PM', '4:00 PM'],
      },
    ],
  },

  {
    name: 'Harsh Agarwal',
    category: 'Mentor',
    experience: 9,
    rating: 5.0,
    bio: 'Tech lead helping students with placements.',

    availableSlots: [
      {
        date: '25 May',
        slots: ['7:00 PM', '8:00 PM'],
      },
    ],
  },
])

console.log('Experts Seeded')

process.exit()