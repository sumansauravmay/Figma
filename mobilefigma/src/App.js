
import { Grid, Stack } from '@chakra-ui/react';
// import './App.css';
import Figmadesign from './component/Navbar';
import Monthlybudget from './component/Monthlybudget';
import Budget from './component/Budget';

function App() {
  return (
    <Stack direction={'column'}
    w="375px"
    h={'818px'}
    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
 <Figmadesign/>
 <Budget/>
 <Monthlybudget/>

    </Stack>

  );
}

export default App;
