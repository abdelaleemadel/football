/* eslint-disable no-unused-vars */
import EU from '../../../src/assets/images/continents/EU.svg';
/* Other continents */
import AF from '../../../src/assets/images/continents/AF.svg';
import SA from '../../../src/assets/images/continents/SA.svg';
import NA from '../../../src/assets/images/continents/NA.svg';
import OC from '../../../src/assets/images/continents/OC.svg';
import AS from '../../../src/assets/images/continents/AS.svg';
import { Link } from 'react-router-dom';

function Continent({ continent }) {
    const images = { EU, AF, SA, NA, OC, AS }
    console.log(continent.code);
    return (<>
        <Link to={`/countries/${continent.id}`} className='text-decoration-none'>
            <img src={images[continent.code]} alt={continent.name} className=' w-50' />
            <p className='text-center mx-auto text-white fw-bold fs-3 w-50 '>{continent.name}</p>
        </Link>


    </>);
}

export default Continent;
/* OTHER Continents */
/* 
<div className='container row border mx-auto'>
                <div className="col-6 boder">
                    <img src={AF} alt="EU" className='w-100' />
                </div>
            </div>
            <div className='container row border mx-auto'>
                <div className="col-6 boder">
                    <img src={SA} alt="EU" className='w-100' />
                </div>
            </div>
            <div className='container row border mx-auto'>
                <div className="col-6 boder">
                    <img src={NA} alt="EU" className='w-100' />
                </div>
            </div>
            <div className='container row border mx-auto'>
                <div className="col-6 boder">
                    <img src={OC} alt="EU" className='w-100' />
                </div>
            </div>
            <div className='container row border mx-auto'>
                <div className="col-6 boder">
                    <img src={AS} alt="EU" className='w-100' />
                </div>
            </div>
 */