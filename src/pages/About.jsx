import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:2/4  text-gray-600'>
          <p>
            At Hermes, we believe fashion is more than just clothing—it's an expression of identity, confidence, and creativity. Founded with a passion for style and quality, our brand is dedicated to crafting timeless and trendsetting pieces that make a statement. 
            Sustainability is at the core of our ethos. We are committed to reducing our environmental footprint by incorporating eco-friendly practices, responsible sourcing, and ethical production methods. At Hermes, we believe that fashion should not only make you look good but also contribute to a better world.
            <br></br>
            <br></br>
            Each design is carefully curated with premium fabrics, attention to detail, and a commitment to sustainability, ensuring that you not only look good but feel good too. Whether you're looking for everyday essentials or bold statement pieces, Hermes is here to elevate your wardrobe with elegance and individuality. Join us on this journey and redefine your style with Hermes.
            <br></br>
            <br></br>
            <br></br>
            <b className='text-xl mt-5 mb-5'>Our Mission</b>
            <br></br>
            
            At Hermes, our mission is to redefine fashion by blending elegance, comfort, and innovation. We are committed to creating high-quality, stylish apparel that empowers individuals to express themselves with confidence. 
            Every piece we design is crafted with precision, using premium materials and sustainable practices to ensure both luxury and responsibility. Our goal is to inspire a fashion-forward community that values authenticity, creativity, and timeless style. At Hermes, we don’t just follow trends—we set them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About