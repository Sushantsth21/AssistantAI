// pages/index.tsx
import Navbar from '../_components/Navbar';
import Talk from './talk';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Talk />

    </div>
  );
};

export default Homepage;
