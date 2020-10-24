import React from 'react';

import Tenis1 from '../../img/tenis1.jpeg';
import Tenis2 from '../../img/tenis2.jpeg';
import Tenis3 from '../../img/tenis3.jpeg';

import { Container, Header, Content } from './styles';

function home() {
  return (
      <>
        <Container>
          <Header>
            <div className="oi"> 
              <h1>e-Virtual</h1>  
              <a href="cart"><i class="fas fa-shopping-cart"></i></a>
            </div> 
          </Header>
          <Content>
            <div className="card">
              <div className="a">
                <img src={Tenis1} className="tenis1" alt="tenis1"/>
                <p className="text">Tenis Nike</p>
                <button className="but">Add</button>
              </div>
              <div className="b">
                <img src={Tenis2} className="tenis2" alt="tenis2"/>
                <p className="text">Tenis Nike</p>
                <button className="but">Add</button>
              </div>
              <div className="c">
                <img src={Tenis3} className="tenis3" alt="tenis3"/>
                <p className="text">Tenis Nike</p>
                <button className="but">Add</button>
              </div>
            
            </div>
          </Content>
        </Container>

      </>
  );
}

export default home;