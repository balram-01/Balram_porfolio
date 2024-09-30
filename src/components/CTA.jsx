import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Interested in exploring business opportunities? <br className='sm:block hidden' />
        Let’s connect and make an impact together!
      </p>
      <Link to='/contact' className='btn'>
        Get in Touch
      </Link>
    </section>
  );
};

export default CTA;
