import React from 'react';

import { Container, Header, Content } from './styles';

function sobre() {
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
             <h1>Seu Carrinho está vazio</h1>
             <p>CLique Aqui para adicionar mais items</p>
             <div className="oi">
              <a href="/" class="fas fa-shopping-cart"></a>
            </div>
            </Content>
        </Container>
      </>
  );
}

export default sobre;