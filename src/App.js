import Navbar from './screens/Navbar/Navbar';
import Home from './screens/Home/Home';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import './App.scss';
import WorkPage from './screens/WorkPage/WorkPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={'/ndg'}>
            <WorkPage 
              color={0}
              icon={'/icons/ndg.png'}
              title={'NATURE Design Group® Portal Website'}
              images={[
                'https://imgur.com/GjrSRij.png',
                'https://imgur.com/gGxjldW.png',
                'https://imgur.com/b5WQHeD.png',
                'https://imgur.com/Aa0NAWx.png',
                'https://imgur.com/5Ksd3kY.png',
                'https://imgur.com/DR1cxfY.png',
                'https://imgur.com/peJvHE7.png',
                'https://imgur.com/8MCBKCN.png',
                'https://imgur.com/IMEPXyE.png'
                ]}
              titles={[
                {title: 'MERN', descr: 'Stack'},
                {title: '5 Months', descr: 'Time for Completion'},
                {title: 'NDG', descr: 'Company'}
              ]}
              paragraphs={[
                `My very first solo endeavor. I was tasked with delivering this portal website, along with its content management, as a solo developer.
                I worked full time for 6 months as a contractor for the company, and I can honestly say it was a great experience.`,

                `The pressure of building an entire (albeit minimal) content management system was, in my eyes, tremendous. From conceptualizing, to
                UI Design, to testing and submitting, it was a long and tiring process, but a well worthwhile one. I needed something like this to help aid
                fuel my passion for web development and design.`,

                `The project was made using the MERN stack. It consisted of a website and an admin dashboard. I talk more about the dashboard here. 
                It focused heavily on showcasing the consultancy's portfolio, so I had to have a huge emphasis on presenting the projects in a 
                fascinating manner. I had to ask for a lot of extra information.`,

                `I was also tasked with data entry at the end of the project's development, which I used as an opportunity to practice my 
                JavaScript-script writing.`
              ]}
            />
          </Route>
          <Route path={'/emall'}>
            <WorkPage 
              color={1}
              icon={'/icons/emall.png'}
              title={'E-Mall, the eCommerce Platform'}
              images={[
                'https://imgur.com/dvK6usO.png',
                'https://imgur.com/0CVY2CN.png',
                'https://imgur.com/FsoZJX6.png',
                'https://imgur.com/bBXWVIj.png',
                'https://imgur.com/9Un3LkF.png',
                'https://imgur.com/DWqYLwZ.png',
                'https://imgur.com/O24zVcs.png',
                'https://imgur.com/HmO1BEh.png',
                'https://imgur.com/dxWX6Yi.png',
                'https://imgur.com/ZZM0rPj.png',
                'https://imgur.com/wJ0PvoN.png',
                'https://imgur.com/WGNYTtY.png',
                'https://imgur.com/zstVr3d.png',
                'https://imgur.com/b91EQac.png'
                ]}
              titles={[
                {title: 'MERN', descr: 'Stack'},
                {title: '5 Months', descr: 'Time for Completion'},
                {title: 'NDG', descr: 'Company'}
              ]}
              paragraphs={[
                `My very first solo endeavor. I was tasked with delivering this portal website, along with its content management, as a solo developer.
                I worked full time for 6 months as a contractor for the company, and I can honestly say it was a great experience.`,

                `The pressure of building an entire (albeit minimal) content management system was, in my eyes, tremendous. From conceptualizing, to
                UI Design, to testing and submitting, it was a long and tiring process, but a well worthwhile one. I needed something like this to help aid
                fuel my passion for web development and design.`,

                `The project was made using the MERN stack. It consisted of a website and an admin dashboard. I talk more about the dashboard here. 
                It focused heavily on showcasing the consultancy's portfolio, so I had to have a huge emphasis on presenting the projects in a 
                fascinating manner. I had to ask for a lot of extra information.`,

                `I was also tasked with data entry at the end of the project's development, which I used as an opportunity to practice my 
                JavaScript-script writing.`
              ]}
            />
          </Route>
          <Route path={'/'} component={Home} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;