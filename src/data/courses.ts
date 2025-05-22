export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  ageGroup: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Basic Sailing Course",
    description: "Learn to navigate the wind and waves with our comprehensive introduction to sailing fundamentals.",
    duration: "10 days",
    ageGroup: "Age 10+",
    image: "https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Advanced Sailing Techniques",
    description: "Master sophisticated sailing tactics, racing strategies, and open-water navigation skills.",
    duration: "2 weeks",
    ageGroup: "Age 15+",
    image: "https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Kayaking Adventures",
    description: "Explore the tranquil backwaters of Kerala with our safe, fun kayaking sessions for all skill levels.",
    duration: "Weekend batches",
    ageGroup: "Age 8+",
    image: "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Stand-Up Paddleboarding",
    description: "Improve balance, strength, and enjoy the water with our stand-up paddleboarding lessons.",
    duration: "Flexible schedule",
    ageGroup: "Age 12+",
    image: "https://images.pexels.com/photos/1751550/pexels-photo-1751550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];