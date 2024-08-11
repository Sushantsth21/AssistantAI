// pages/index.tsx
import Navbar from '../_components/Navbar';
import Add from './add';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Add />

    </div>
  );
};

export default Homepage;
