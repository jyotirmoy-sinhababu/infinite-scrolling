import { list } from 'postcss';
import React, { useState, useEffect, useRef } from 'react';

import { MdOutlineArrowUpward } from 'react-icons/md';

const data = {
  1: '. Hello, World!',
  2: '. The quick brown fox jumps over the lazy dog.',
  3: '. Lorem ipsum dolor sit amet.',
  4: '. Coding is fun.',
  5: '. I love JavaScript.',
  6: '. Angular is awesome.',
  7: '. TypeScript provides type safety.',
  8: '. This is a string.',
  9: '. Next.js simplifies server-side rendering.',
  10: '. ShadCN enhances Tailwind CSS.',
  11: '. OpenAI APIs are powerful.',
  12: '. Vercel is great for deployment.',
  13: '. Supabase provides seamless authentication.',
  14: '. Coinflip games on blockchain are interesting.',
  15: '. Smart contracts automate processes.',
  16: '. Block explorers show transaction details.',
  17: '. CSS helps style websites.',
  18: '. Responsive design is essential.',
  19: '. Pixel-perfect execution is key.',
  20: '. Single-page applications (SPA) improve user experience.',
  21: '. Working on an internship project.',
  22: '. Probation periods help evaluate performance.',
  23: '. Internship stipends provide financial support.',
  24: '. Hackathons encourage innovation.',
  25: '. Filters enhance search functionality.',
  26: '. Pagination improves data navigation.',
  27: '. A good UI enhances user experience.',
  28: '. Testing is essential for code quality.',
  29: '. Git helps in version control.',
  30: '. Collaboration tools improve productivity.',
  31: '. Agile methodology increases flexibility.',
  32: '. Blockchain ensures data integrity.',
  33: '. Cryptocurrency is becoming more popular.',
  34: '. Node.js is great for backend development.',
  35: '. ES6 features simplify JavaScript development.',
  36: '. Promises and async/await streamline asynchronous code.',
  37: '. Firebase offers real-time databases.',
  38: '. React is a powerful front-end library.',
  39: '. Working with APIs is essential in modern web development.',
  40: '. GitHub is a great platform for version control.',
  41: '. Mobile-first design is crucial.',
  42: '. Wireframes help plan layouts.',
  43: '. Database normalization reduces redundancy.',
  44: '. Security is a top priority in web applications.',
  45: '. User authentication is necessary for protected routes.',
  46: '. OAuth simplifies third-party logins.',
  47: '. The cloud provides scalability.',
  48: '. WebSockets allow real-time communication.',
  49: '. Machine learning is shaping the future.',
  50: '. Artificial intelligence is transforming industries.',
  51: '. The internet of things (IoT) connects devices.',
  52: '. 5G networks enable faster communication.',
  53: '. Cybersecurity is crucial in the digital age.',
  54: '. Data privacy regulations protect users.',
  55: '. Automation increases efficiency.',
  56: '. Testing frameworks improve code reliability.',
  57: '. Unit tests ensure component correctness.',
  58: '. Code reviews help maintain quality.',
  59: '. Continuous integration streamlines deployments.',
  60: '. Microservices improve application scalability.',
  61: '. DevOps enhances collaboration between teams.',
  62: '. Docker helps containerize applications.',
  63: '. Kubernetes automates container management.',
  64: '. Artificial neural networks simulate the brain.',
  65: '. Deep learning improves AI capabilities.',
  66: '. Natural language processing enhances machine understanding.',
  67: '. Data analytics reveal hidden patterns.',
  68: '. Big data helps organizations make informed decisions.',
  69: '. Cloud computing reduces infrastructure costs.',
  70: '. Edge computing brings processing closer to the source.',
  71: '. Quantum computing will revolutionize tech.',
  72: '. Robotics are automating industries.',
  73: '. AR and VR provide immersive experiences.',
  74: '. Blockchain is transforming supply chains.',
  75: '. NFTs represent digital ownership.',
  76: '. Smart contracts enable trustless transactions.',
  77: '. DApps operate without centralized control.',
  78: '. Web 3.0 is the future of the internet.',
  79: '. Remote work is becoming more common.',
  80: '. Collaboration tools keep teams connected.',
  81: '. Version control systems track code changes.',
  82: '. APIs allow applications to communicate.',
  83: '. JSON is commonly used in API responses.',
  84: '. RESTful APIs are widely adopted.',
  85: '. GraphQL improves data querying.',
  86: '. SaaS products offer subscription-based software.',
  87: '. NoSQL databases handle unstructured data.',
  88: '. SQL databases manage structured data.',
  89: '. Data encryption ensures security.',
  90: '. Load balancers distribute traffic efficiently.',
  91: '. CDNs improve content delivery speed.',
  92: '. Progressive Web Apps (PWA) enhance mobile experiences.',
  93: '. Cross-browser compatibility ensures consistent behavior.',
  94: '. JavaScript frameworks speed up development.',
  95: '. CSS frameworks simplify styling.',
  96: '. HTML5 adds new elements for multimedia.',
  97: '. HTTP/2 improves web performance.',
  98: '. SEO optimization improves search visibility.',
  99: '. Content marketing attracts customers.',
  100: '. User feedback drives product improvement.',
  80: '. Collaboration tools keep teams connected.',
  81: '. Version control systems track code changes.',
  82: '. APIs allow applications to communicate.',
  83: '. JSON is commonly used in API responses.',
  84: '. RESTful APIs are widely adopted.',
  85: '. GraphQL improves data querying.',
  86: '. SaaS products offer subscription-based software.',
  87: '. NoSQL databases handle unstructured data.',
  88: '. SQL databases manage structured data.',
  89: '. Data encryption ensures security.',
  90: '. Load balancers distribute traffic efficiently.',
  91: '. CDNs improve content delivery speed.',
  92: '. Progressive Web Apps (PWA) enhance mobile experiences.',
  93: '. Cross-browser compatibility ensures consistent behavior.',
  94: '. JavaScript frameworks speed up development.',
  95: '. CSS frameworks simplify styling.',
  96: '. HTML5 adds new elements for multimedia.',
  97: '. HTTP/2 improves web performance.',
  98: '. SEO optimization improves search visibility.',
  99: '. Content marketing attracts customers.',
  100: '. User feedback drives product improvement.',
  80: '. Collaboration tools keep teams connected.',
  81: '. Version control systems track code changes.',
  82: '. APIs allow applications to communicate.',
  83: '. JSON is commonly used in API responses.',
  84: '. RESTful APIs are widely adopted.',
  85: '. GraphQL improves data querying.',
  86: '. SaaS products offer subscription-based software.',
  87: '. NoSQL databases handle unstructured data.',
  88: '. SQL databases manage structured data.',
  89: '. Data encryption ensures security.',
  90: '. Load balancers distribute traffic efficiently.',
  91: '. CDNs improve content delivery speed.',
  92: '. Progressive Web Apps (PWA) enhance mobile experiences.',
  93: '. Cross-browser compatibility ensures consistent behavior.',
  94: '. JavaScript frameworks speed up development.',
  95: '. CSS frameworks simplify styling.',
  96: '. HTML5 adds new elements for multimedia.',
  97: '. HTTP/2 improves web performance.',
  98: '. SEO optimization improves search visibility.',
  99: '. Content marketing attracts customers.',
  100: '. User feedback drives product improvement.',
  80: '. Collaboration tools keep teams connected.',
  81: '. Version control systems track code changes.',
  82: '. APIs allow applications to communicate.',
  83: '. JSON is commonly used in API responses.',
  84: '. RESTful APIs are widely adopted.',
  85: '. GraphQL improves data querying.',
  86: '. SaaS products offer subscription-based software.',
  87: '. NoSQL databases handle unstructured data.',
  88: '. SQL databases manage structured data.',
  89: '. Data encryption ensures security.',
  90: '. Load balancers distribute traffic efficiently.',
  91: '. CDNs improve content delivery speed.',
  92: '. Progressive Web Apps (PWA) enhance mobile experiences.',
  93: '. Cross-browser compatibility ensures consistent behavior.',
  94: '. JavaScript frameworks speed up development.',
  95: '. CSS frameworks simplify styling.',
  96: '. HTML5 adds new elements for multimedia.',
  97: '. HTTP/2 improves web performance.',
  98: '. SEO optimization improves search visibility.',
  99: '. Content marketing attracts customers.',
  100: '. User feedback drives product improvement.',
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state
  const [hasMore, setHasMore] = useState(true); // checks if their are more items to load
  const [showGoToTop, setShowGoToTop] = useState(false); // State for Go to Top button visibility
  const listContainerRef = useRef(null);

  const itemsPerPage = 10;

  // Load initial items
  useEffect(() => {
    loadMoreItems();
  }, []);

  // Scroll event listener to detect when to load more items
  useEffect(() => {
    const handleScroll = () => {
      const container = listContainerRef.current;
      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight &&
        !loading &&
        hasMore
      ) {
        loadMoreItems();
      }

      if (container.scrollTop > 100) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    const container = listContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [items, loading, hasMore]);

  const loadMoreItems = () => {
    if (loading || !hasMore) return; // Prevent multiple loads at the same time
    setLoading(true);

    setTimeout(() => {
      const newItems = Object.values(data).slice(
        items.length,
        items.length + itemsPerPage
      );
      setItems((prevItems) => [...prevItems, ...newItems]);

      if (items.length + newItems.length >= Object.keys(data).length) {
        setHasMore(false); // No more items to load
      }

      setPage((prevPage) => prevPage + 1);
      setLoading(false); // Stop loading after new items are added
    }, 1000); // Simulating network request with a delay
  };

  const scrollToTop = () => {
    listContainerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex flex-col justify-center items-center mt-[8%] gap-14'>
      <h1 className='text-gray-200 font-abril text-4xl'>
        Infinite Scrolling List
      </h1>
      <div
        ref={listContainerRef}
        className='border-2 rounded-md sm:w-[50%] w-[80%] pl-[110px]  '
        style={{
          height: '500px',
          overflowY: 'scroll',
          padding: '10px',
        }}
      >
        <p id='lists' className='font-vollkorn text-2xl text-gray-400 mb-4 p-4'>
          Lists of items ...
        </p>
        <ul className='p-4'>
          {items.map((item, index) => (
            <li
              className='font-vollkorn text-2xl text-gray-400 mb-2'
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        {loading && (
          <p className='text-xl text-rose-700'>Loading more items...</p>
        )}
      </div>
      <div className='  sm:w-[50%] w-[80%] flex justify-end'>
        {showGoToTop && (
          <button
            onClick={scrollToTop}
            className='animate-bounce border-2 w-[60px] h-[60px] flex justify-center items-center rounded-[50%]'
          >
            <MdOutlineArrowUpward className='text-4xl text-white' />
          </button>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollList;
