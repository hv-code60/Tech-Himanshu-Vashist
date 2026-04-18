import { Link } from 'react-router-dom';
import CardNav from '../CardNav';
import logo from '../../assets/4.jpg';

export default function Navbar() {
  return (
    <CardNav
      logo={logo}
      pages={[
        { label: 'Home', path: '/' },
        {
          label: 'Services',
          submenu: [
            { label: 'Custom Software Development', path: '/services/custom-software-development' },
            { label: 'Web & Portal Development', path: '/services/web-portal-development' },
            { label: 'Mobile Applications', path: '/services/mobile-applications' },
            { label: 'AI & Automation', path: '/services/ai-automation' },
            { label: 'Cloud & DevOps', path: '/services/cloud-devops' },
            { label: 'UI/UX Design', path: '/services/ui-ux-design' },
          ],
        },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ]}
    />
  );
}
