
import { Grid, Stack } from '@chakra-ui/react';
// import './App.css';
import Figmadesign from './component/Navbar';
import Monthlybudget from './component/Monthlybudget';
import Budget from './component/Budget';
import Details from './component/Details';
import Spent from './component/Spent';
import Line from './component/Line';

function App() {
  return (
    <Stack direction={'column'}
    w="375px"
    h={'818px'}
    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    ml={'100px'}
    >
 <Figmadesign/>
 <Budget/>
 <Monthlybudget/>
 <Details/>
<Spent/>
<Line/>
    </Stack>

  );
}

export default App;
