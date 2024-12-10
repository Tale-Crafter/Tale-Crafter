import React, { useState } from 'react';
import ReactQuill from 'react-quill';  // Importez le composant de l'éditeur de texte enrichi
import 'react-quill/dist/quill.snow.css';  // Importez les styles de l'éditeur de texte enrichi
import countryCallingCode from 'country-calling-code'; // Importer le module pour les codes de pays
import {Link, useParams} from 'react-router-dom';

const QuickSurveyEmpty = () => {
    const { iduser } = useParams();

    return (
        <div className="App1" style={{filter:'blur(1px)', position:"relative",top:-50,left:-30}}>
            <div style={{width: 310, height: 160, left: 30, top: 80, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <div style={{width: 22, height: 22, left: 270, top: 10, position: 'absolute', background: '#FF3775', borderRadius: 9999, border: '2px #FF3775 solid', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px'}}>
                    &#10003;
                </div>
                <img src={process.env.PUBLIC_URL + '/qs1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>

            <div style={{width: 310, height: 160, left: 380, top: 80, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <div style={{width: 22, height: 22, left: 270, top: 10, position: 'absolute', background: '#FF3775', borderRadius: 9999, border: '2px #FF3775 solid', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px'}}>
                    &#10003;
                </div>
                <img src={process.env.PUBLIC_URL + '/qs3.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>

            <div style={{width: 310, height: 160, left: 730, top: 80, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <div style={{width: 22, height: 22, left: 270, top: 10, position: 'absolute', background: '#FF3775', borderRadius: 9999, border: '2px #FF3775 solid', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px'}}>
                    &#10003;
                </div>
                <img src={process.env.PUBLIC_URL + '/qs2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>


            <Link to={`/tobacco`}>
                <div style={{width: 216, height: 54, left: 100, top: 180, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Tobacco consumption<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
            </div>
        </Link>
            <Link to={`/TSport`}>
                <div style={{width: 216, height: 54, left: 450, top: 180, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Reading habits of Tunisians<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/TSport`}>
                <div style={{width: 216, height: 54, left: 800, top: 180, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Sports habits of Tunisians<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>

            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 40, top: 90, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
            </div>

    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 390, top: 90, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>

    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 740, top: 90, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>

        </div>
    );
};

export default QuickSurveyEmpty;
