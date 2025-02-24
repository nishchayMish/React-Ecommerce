import React from "react";
import data from '../Database/data.js'
import Card from '../components/Card.jsx'

const Home = () => {
  return (
    <main className="p-6 bg-gray-50 h-screen overflow-y-auto">
      
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
