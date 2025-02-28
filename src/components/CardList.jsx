import React from 'react';
import Card from './Card';

// Array of resource objects containing information about each resource
const resources = [
  {
    title: 'Tennis Techniques for Beginners',
    description: 'Learn the basics of tennis techniques to get started.',
    link: 'https://blog.davidlloyd.co.uk/racquets/tennis/learning-tennis-techniques/',
    image: 'https://magazine.fortevillageresort.com/wp-content/uploads/2022/01/tennis.jpg'
  },
  {
    title: 'Advanced Tennis Strategies',
    description: 'Explore advanced strategies to improve your game.',
    link: 'https://www.masterclass.com/articles/advanced-tennis-techniques-to-raise-your-tennis-skill-level',
    image: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_4810,w_7215/c_fill,w_800,h_501/q_auto,f_auto/redbullcom/2025/1/21/ieuujwn0txjvgfwkr8fy/emma-navarro'
  },
  {
    title: 'Top 10 Tennis Drills',
    description: 'Discover the top drills to enhance your skills.',
    link: 'https://coachtube.com/tennis/articles/10-essential-tennis-drills-every-coach-should-know',
    image: 'https://www.imgacademy.com/sites/default/files/2020-02/Tennis%20-%20coaching.jpg'
  },
  {
    title: 'Understanding Tennis Scoring',
    description: 'A guide to understanding how scoring works in tennis.',
    link: 'https://www.usta.com/en/home/improve/tips-and-instruction/national/tennis-scoring-rules.html',
    image: 'https://cdn.prod.website-files.com/66842e04d18971242a294872/66f8979892d54c5a940f47e0_Scoring_System_in_Tennis.png'
  },
  {
    title: 'Improving Your Serve',
    description: 'Tips and techniques to improve your serve.',
    link: 'https://tennisevolution.com/11-steps-to-hit-a-perfect-tennis-serve/',
    image: 'https://fm-tennis.com/wp-content/uploads/2020/02/ivanovic.jpg'
  },
  {
    title: 'Footwork Fundamentals',
    description: 'Learn the importance of footwork in tennis.',
    link: 'http://www.tennisnation.com/lessons-classes/ultimate-tennis-footwork-guide/',
    image: 'https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/5062abf9-0d7f-4610-894d-721ca213067f/tennis_drills_for_beginners.jpg'
  },
  {
    title: 'Mental Toughness in Tennis',
    description: 'Strategies to develop mental toughness on the court.',
    link: 'https://www.head.com/en_US/rs/stories/how-to-improve-your-tennis-mental-game',
    image: 'https://www.thetennistribe.com/wp-content/uploads/2019/03/Mental-Toughness-Checklist-for-Tennis-Players-1.jpg'
  },
  {
    title: 'Tennis Equipment Guide',
    description: 'A comprehensive guide to choosing the right equipment.',
    link: 'https://www.tennis.com/baseline/articles/gear-101-a-beginner-s-guide-to-the-essential-equipment-needed-to-play-tennis',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_vIW0qSWrP-UQgOkqmdBZHCCMw9DVYyaRg&s'
  },
  {
    title: 'Nutrition for Tennis Players',
    description: 'Learn about the best nutrition for optimal performance.',
    link: 'https://www.usta.com/en/home/improve/tips-and-instruction/national/nutrition-for-tennis--eat-to-win-.html',
    image: 'https://www.stack.com/wp-content/uploads/2013/08/Tennis-Nutrition2-629x459.jpg'
  },
  {
    title: 'Injury Prevention in Tennis',
    description: 'Tips to prevent injuries while playing tennis.',
    link: 'https://www.betterhealth.vic.gov.au/health/healthyliving/tennis-preventing-injury',
    image: 'https://www.massgeneralbrigham.org/content/mgb-global/global/en/about/newsroom/articles/tennis-injuries/_jcr_content/root/container_1214295969/image.coreimg.jpeg/1691435225650/tennis-injury-2200.jpeg'
  }
];

const CardList = () => {
  return (
    <div className="card-list">
      {/* Map through the resources array and render a Card component for each resource */}
      {resources.map((resource, index) => (
        <Card 
          key={index} 
          title={resource.title} 
          description={resource.description} 
          link={resource.link} 
          image={resource.image} 
        />
      ))}
    </div>
  );
};

export default CardList;