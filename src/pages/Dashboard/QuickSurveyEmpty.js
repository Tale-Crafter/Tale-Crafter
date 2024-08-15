import React, { useState } from 'react';
import ReactQuill from 'react-quill';  // Importez le composant de l'éditeur de texte enrichi
import 'react-quill/dist/quill.snow.css';  // Importez les styles de l'éditeur de texte enrichi
import countryCallingCode from 'country-calling-code'; // Importer le module pour les codes de pays
import {Link, useParams} from 'react-router-dom';

const QuickSurveyEmpty = () => {
    const { iduser } = useParams();

    return (
        <div className="App1">
            <div style={{width: 310, height: 160, left: 368, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 368, top: 870, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs5.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 368, top: 1048, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs9.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 368, top: 1228, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs13.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 1032, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs3.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 1032, top: 870, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs7.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 700, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 700, top: 870, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs6.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 700, top: 1048, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs10.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 700, top: 1228, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs14.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 1032, top: 1048, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs11.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 1364, top: 1048, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs12.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 1364, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs4.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 160, left: 1364, top: 870, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/qs8.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <Link to={`/tobacco`}>
                <div style={{width: 216, height: 54, left: 440, top: 790, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Tobacco consumption<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
            </div>
        </Link>
            <Link to={`/surveydetails/${iduser}`}>
            <div style={{width: 216, height: 54, left: 440, top: 970, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Job/job seeker<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
            </div>
            </Link>
            <Link to={`/education`}>
                <div style={{width: 216, height: 54, left: 440, top: 1150, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Education and formation<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/habits`}>
                <div style={{width: 216, height: 54, left: 440, top: 1330, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Consumption habits<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/Entertainment`}>
                <div style={{width: 216, height: 54, left: 770, top: 1330, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Entertainment for Tunisians<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/TSport`}>
                <div style={{width: 216, height: 54, left: 1100, top: 790, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Reading habits of Tunisians<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/tconsumptionb`}>
                <div style={{width: 216, height: 54, left: 1100, top: 970, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Tunisian consumption budget<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/television`}>
                <div style={{width: 216, height: 54, left: 1100, top: 1150, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>The look of television<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/TSport`}>
                <div style={{width: 216, height: 54, left: 770, top: 790, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Sports habits of Tunisians<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/tactiv`}>
                <div style={{width: 216, height: 54, left: 770, top: 970, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Tunisian car driving<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>

            <Link to={`/studies`}>
                <div style={{width: 216, height: 54, left: 770, top: 1150, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>The studies<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/tactiv`}>
                <div style={{width: 250, height: 54, left: 1400, top: 790, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Active/non-active women in Tunisia<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/travelhabitst`}>
                <div style={{width: 216, height: 54, left: 1430, top: 970, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Travel habits of Tunisians<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/socialnet`}>
                <div style={{width: 216, height: 54, left: 1430, top: 1150, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Use of social networks<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 702, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
            </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 879, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 1056, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1045, top: 1056, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>  <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1375, top: 1056, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 1235, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
            </div>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 1235, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
            </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 702, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 879, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 1056, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1045, top: 702, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1045, top: 879, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1375, top: 702, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1375, top: 879, position: 'absolute', background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
        </div>
    );
};

export default QuickSurveyEmpty;
