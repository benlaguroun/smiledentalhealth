
import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Regular Dental Check-ups',
    content: `
      <p>Regular dental check-ups are crucial for maintaining optimal oral health. These visits allow your dentist to detect potential issues early, preventing them from becoming more severe problems. A standard dental check-up includes an examination of your teeth and gums, a professional cleaning, and sometimes X-rays to uncover any hidden concerns.</p>
      <p>One significant advantage of regular dental check-ups is the early detection and prevention of dental issues such as tooth decay and gum disease. Dentists can remove plaque and tartar build-up that routine brushing and flossing may miss, preventing cavities and gum infections. They can also provide personalized advice on oral hygiene practices to help you maintain healthy teeth and gums at home.</p>
      <p>Moreover, regular check-ups play a vital role in detecting oral cancer early. Dentists are trained to identify early signs of oral cancer, which can be life-saving if caught in time. Dental visits also offer an opportunity to identify other health conditions, such as diabetes and autoimmune diseases, that may manifest in the mouth.</p>
      <p>In conclusion, regular dental check-ups are essential for maintaining overall health. They help in keeping your smile bright and healthy, preventing serious conditions, and ensuring any potential issues are caught early. It is recommended to schedule a dental check-up at least twice a year.</p>
    `,
  },

  {
    id: 2,
    title: 'Tips for Maintaining Healthy Teeth',
    content: `
      <p>Maintaining healthy teeth is vital for a beautiful smile and overall well-being. Here are some essential tips to keep your teeth in top condition:</p>
      <h2>1. Brush Your Teeth Twice a Day</h2>
      <p>Use a soft-bristled toothbrush and fluoride toothpaste to brush your teeth at least twice daily. Brushing helps remove food particles and plaque, preventing tooth decay and gum disease. Be sure to brush for at least two minutes, covering all surfaces of your teeth.</p>
      <h2>2. Floss Daily</h2>
      <p>Flossing is crucial for cleaning the spaces between your teeth where a toothbrush can't reach. It helps remove plaque and food debris, reducing the risk of cavities and gum disease. Make it a habit to floss at least once a day.</p>
      <h2>3. Limit Sugary and Acidic Foods</h2>
      <p>Sugary and acidic foods can erode tooth enamel and increase the risk of cavities. Try to limit your intake of sugary snacks and drinks, and rinse your mouth with water after consuming acidic foods.</p>
      <h2>4. Visit Your Dentist Regularly</h2>
      <p>Regular dental visits are essential for maintaining oral health. Your dentist can detect early signs of dental issues, provide professional cleanings, and offer personalized advice on oral care. Aim to visit your dentist at least twice a year.</p>
      <p>By following these tips, you can maintain healthy teeth and a bright smile. Remember, good oral hygiene practices and regular dental check-ups are key to preventing dental problems and ensuring a lifetime of healthy teeth.</p>
    `,
  },
  {
    id: 3,
    title: 'Understanding Different Types of Dental Treatments',
    content: `
      <p>Dentistry offers a wide range of treatments to address various oral health issues. Understanding these treatments can help you make informed decisions about your dental care. Here are some common dental treatments and what they involve:</p>
      <h2>1. Fillings</h2>
      <p>Fillings are used to treat cavities and restore damaged teeth. Dentists remove the decayed portion of the tooth and fill the cavity with a material like composite resin, amalgam, or porcelain. This process restores the tooth's function and appearance.</p>
      <h2>2. Crowns</h2>
      <p>Crowns, or caps, cover damaged or weakened teeth, restoring their shape, size, and strength. They are often used after a root canal treatment or to protect a tooth with a large filling. Crowns can be made from various materials, including porcelain, metal, or a combination of both.</p>
      <h2>3. Root Canal Treatment</h2>
      <p>A root canal is necessary when the pulp inside a tooth becomes infected or inflamed. The procedure involves removing the infected pulp, cleaning the inside of the tooth, and sealing it with a filling or crown. This treatment can save a tooth that might otherwise need to be extracted.</p>
      <h2>4. Dental Implants</h2>
      <p>Dental implants are a long-term solution for replacing missing teeth. They consist of a titanium post surgically placed into the jawbone, which acts as a foundation for a replacement tooth. Implants are durable and function like natural teeth.</p>
      <p>These are just a few examples of the many dental treatments available. Your dentist can recommend the best treatment for your specific needs based on your oral health condition. Regular dental visits and good oral hygiene are essential for preventing the need for more extensive treatments.</p>
    `,
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <Container className="py-5">
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </Container>
  );
};

export default BlogPost;
