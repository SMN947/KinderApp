import { useEffect } from 'react';
import Splash from './componets/Splash';
import LandingGeneral from './componets/LandingGeneral';
import ActivityRepeat from './componets/ActivityRepeat';
import ThemeDemo from './componets/ThemeDemo';
import { useState } from 'react';

export default function App() {
  const pagesMatrix = {
    0: <Splash />,
    1: <LandingGeneral />,
    2: <ActivityRepeat />,
    999: <ThemeDemo />,
  }
  const [activePage, setActivePage] = useState(pagesMatrix[0]);

  useEffect(() => {
    setTimeout(() => {
      setActivePage(pagesMatrix[1]);
    }, 3000);
  }, []);

  return activePage;
}