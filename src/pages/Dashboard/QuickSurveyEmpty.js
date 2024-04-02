import React, { useState } from 'react';
import ReactQuill from 'react-quill';  // Importez le composant de l'éditeur de texte enrichi
import 'react-quill/dist/quill.snow.css';  // Importez les styles de l'éditeur de texte enrichi
import countryCallingCode from 'country-calling-code'; // Importer le module pour les codes de pays
import {Link, useParams} from 'react-router-dom';

const QuickSurveyEmpty = () => {
    const { iduser } = useParams();

    return (
        <div className="App1">
            <div style={{width: 310, height: 141, left: 368, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 368, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s5.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 368, top: 1008, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s9.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 1032, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s3.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 1032, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s7.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 700, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 700, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s6.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 700, top: 1008, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s10.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 1364, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s4.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 310, height: 141, left: 1364, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s8.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 420, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Household Consumption<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
            </div>
        </Link>
            <Link to={`/surveydetails/${iduser}`}>
            <div style={{width: 216, height: 54, left: 420, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Leisure and Interests<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
            </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 420, top: 1079, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Education<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 1070, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Automobile<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 1070, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Consumer Foods and Beverages<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 740, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Occupation<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 740, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Video Games and Computer Games<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>

            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 740, top: 1079, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Consumer health<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 1400, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Mass Tourism<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <Link to={`/surveydetails/${iduser}`}>
                <div style={{width: 216, height: 54, left: 1400, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Multimedia<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span>
                </div>
            </Link>
            <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
            </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 380, top: 1016, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 710, top: 1016, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1045, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1045, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1375, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1375, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
        </div>
    );
};

export default QuickSurveyEmpty;
