import React from 'react';
import Column from './footer/column';
import Credits from './footer/credits';
import { footerDetails } from './footer/footerData';
import './footer/footer.css';

function Footer() {
  return (
    <footer>
      <div className='footerDetails'>
        <Column
          name={'Durban'}
          items={footerDetails.Durban.map((it) => {
            return <li>{it}</li>;
          })}
        />
        <Column
          name={'Features'}
          items={footerDetails.Features.map((it) => {
            return <li>{it}</li>;
          })}
        />
        <Column
          name={'Products'}
          items={footerDetails.Products.map((it) => {
            return <li>{it}</li>;
          })}
        />
        <Column
          name={'UseCases'}
          items={footerDetails.UseCases.map((it) => {
            return <li>{it}</li>;
          })}
        />
        <Column
          name={'Company'}
          items={footerDetails.Company.map((it) => {
            return <li>{it}</li>;
          })}
        />
        <Column
          name={'Resources'}
          items={footerDetails.Resources.map((it) => {
            return <li>{it}</li>;
          })}
        />
      </div>
      <Credits />
    </footer>
  );
}

export default Footer;
