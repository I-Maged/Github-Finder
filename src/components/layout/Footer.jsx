import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer p-5 bg-gray-700 text-neutral-content footer-center'>
      <div>
        <p>
          Created By{' '}
          <a href='https://github.com/I-Maged' target='_blank' rel='noreferrer'>
            Maged <FaGithub className='inline pl-1 text-2xl' />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
