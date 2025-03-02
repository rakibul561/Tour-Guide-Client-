/* eslint-disable react/jsx-key */

const Blogs = () => {
    return (
        <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-4 gap-2">
            {
                blogs.map((blog) => (
                    <section key={blog.id} className=" mt-10  dark:bg-gray-100 dark:text-gray-800">
                        <div className="    ">
                           
                            <div className="">
                                <article className="flex flex-col dark:bg-gray-50">
                                    <a rel="noopener noreferrer"  aria-label={blog.title}>
                                        <img alt={blog.title} className="object-cover w-full h-52 dark:bg-gray-500" src={blog.image} />
                                    </a>
                                    <div className="flex flex-col flex-1 p-6">
                                        <a rel="noopener noreferrer"  aria-label={blog.title}></a>
                                        <a rel="noopener noreferrer"  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>
                                   
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                            <span>{blog.date}</span>
                                            <span>2.1K views</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>
    );
};

export default Blogs;

const blogs = [
    {
      "id": 1,
      "title": "The Ultimate Travel Guide to Cox’s Bazar",
      "content": "Cox’s Bazar is home to the world's longest sea beach. Find out where to stay, what to eat, and top attractions to visit.",
      "author": "Travel Expert",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/LhsSMhTZ/coxs-bazar-20240928103318.jpg"


    },
    {
      "id": 2,
      "title": "Budget Travel Tips for Exploring Sundarbans",
      "content": "Sundarbans is the world's largest mangrove forest and home to the Royal Bengal Tiger. Here’s how you can explore it on a budget.",
      "author": "Adventure Lover",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/V0p7zY1V/sonddar.webp"
    },
    {
      "id": 3,
      "title": "Top 10 Tips for Traveling Abroad",
      "content": "Learn how to manage your budget, get visas easily, and stay safe while traveling internationally.",
      "author": "Globe Trotter",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/nNBm7nTF/istockphoto-1971796553-2048x2048.jpg"
    },
    {
      "id": 4,
      "title": "A Complete Guide to Trekking in Bandarban",
      "content": "Bandarban is a paradise for trekkers. Discover the best hiking trails, safety tips, and must-visit places.",
      "author": "Mountain Explorer",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/MyDsCvVL/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand-335224-950.jpg"
    },


    {
      "id": 5,
      "title": "How to Plan a Solo Trip in 2025",
      "content": "Solo traveling can be life-changing. Here’s how you can plan your first solo adventure with ease.",
      "author": "Solo Voyager",
      "date": "2025-03-02",
      "image": "    https://i.ibb.co.com/m5SLG4yf/traveler-girl-searching-right-direction-map-while-traveling-hiking-mountain-travel-concept-1150-1915.jpg"
    },
    {
      "id": 6,
      "title": "Best Hidden Travel Destinations in Asia",
      "content": "Avoid the crowds and explore these hidden travel gems in Asia for a unique experience.",
      "author": "Wanderlust Seeker",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/9kfJfJkw/people-portrait-with-plane-flying-sky-23-2149520420.jpg"
    },
    {
      "id": 7,
      "title": "How to Save Money While Traveling",
      "content": "Want to travel more without breaking the bank? Check out these expert money-saving travel tips.",
      "author": "Budget Traveler",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/0pSHr9p2/young-beautiful-traveler-girl-summer-hat-with-backpack-holding-air-tickets-smiling-cheerfully-happy.jpg"
    },
    {
      "id": 8,
      "title": "10 Must-Visit Islands for Your Next Vacation",
      "content": "From the Maldives to Bali, here are the best island destinations to relax and unwind.",
      "author": "Beach Lover",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/jZTmvnY2/next-vacation.jpg"
    },
    {
      "id": 9,
      "title": "Packing Essentials for Your Next Trip",
      "content": "Not sure what to pack? Here’s a complete checklist to ensure you don’t forget anything important.",
      "author": "Travel Organizer",
      "date": "2025-03-02",
      "image": " https://i.ibb.co.com/TDJS7K1y/next-travel-trip.jpg"
    },
   

    {
      "id": 10,
      "title": "How to Experience Local Culture While Traveling",
      "content": "Engage with locals, try traditional foods, and learn about different cultures with these simple tips.",
      "author": "Cultural Explorer",
      "date": "2025-03-02",
      "image": "https://i.ibb.co.com/hxn0Xtv3/female-tourists-hand-have-happy-travel-map-1150-7269.jpg"
    }
]
