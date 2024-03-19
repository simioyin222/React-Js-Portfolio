import React, { useState, useEffect } from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: `To whom it may concern,

I am writing to enthusiastically recommend Similoluwa Oyinkolade as a competent software engineer that has proven their mettle through our program. As the Director of Teaching and Curriculum at Epicodus, I had the pleasure of personally mentoring Similoluwa during his time as a student in our program.

Throughout his tenure in our bootcamp, Similoluwa consistently impressed me with his dedication, passion, and aptitude for software development. He excelled in mastering our curriculum concepts and technologies such as JavaScript, HTML, CSS, and additional advanced concepts like NPM, Jest testing and TDD, React, Redux, Firebase, C#/.NET ASP.NET MVC and API applications, MySQL database management, and user authorization and authentication, and much more. Beyond that, he also demonstrated a remarkable capacity for continued learning and self-improvement beyond the confines of the curriculum through further exploration. His proactive approach to expanding his skill set, leading with a growth mindset, and delving deeper into complex concepts sets him apart as a motivated and self-driven individual.

What stands out about Similoluwa is his commitment to excellence in his projects. Similoluwa has proven himself to be a resilient and resourceful learner, actively seeking out opportunities to enhance his knowledge and expertise in software development. His determination to overcome challenges and his willingness to go above and beyond expectations are admirable traits that will serve Similoluwa well in any professional endeavor.

In addition to Similoluwa’s technical proficiency, he possesses excellent communication skills and works effectively both independently and as part of a team, as our curriculum is designed around pair programming in cohort with solo projects. His collaborative spirit, coupled with Similoluwa’s strong work ethic, makes him a valuable asset to any team.

Overall, I have the utmost confidence in Similoluwa's ability to thrive as an engineer and contribute positively to the culture and community. I wholeheartedly recommend Similoluwa without reservation and am certain that he will make significant contributions to any endeavor he undertakes.

Please feel free to contact me if you need any further information or clarification regarding Similoluwa's qualifications.

Sincerely,
Erik Irgens
Director of Teaching and Curriculum
erik@epicodus.com`,
      author: 'Erik Irgens',
      position: 'Director of Teaching and Curriculum at Epicodus'
    }
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h1>Testimonials</h1>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <p>{testimonial.text}</p>
          <p>— {testimonial.author}, {testimonial.position}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;