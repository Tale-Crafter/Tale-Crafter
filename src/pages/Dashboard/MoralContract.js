// MoralContract.js
import React from 'react';
import { Card, CardContent, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const MoralContract = ({ onAccept, onDecline }) => {
    return (
        <Card style={{ position:"relative", maxWidth: '800px', margin: 'auto', top:50 }}>
            <CardContent style={{ overflowY: 'auto', maxHeight: '500px' }}>
                <Typography variant="h5" component="div" style={{fontSize: 32, fontFamily: 'revert', wordWrap: 'break-word',fontWeight:900}}>
                    Terms and Conditions
                </Typography>
                {/* Insert your terms and conditions text here */}
                <Typography variant="body2" color="text.secondary" >
                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                    <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>1. Introduction</h6>
                    <p style={{fontSize: 10}}>1.1 Welcome to [Your Company Name]! These terms and conditions govern your use of our website, products, and services. By accessing or using our platform, you agree to comply with and be bound by these terms.</p>
                    </section>
                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                    <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>2. User Registration</h6>
                    <p style={{fontSize: 10}}>2.1 To access certain features or services, you may be required to register for an account. You agree to provide accurate and up-to-date information during the registration process and to keep your credentials confidential.</p>
                    </section>
                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                    <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>3. Acceptable Use</h6>
                    <p style={{fontSize: 10}}>3.1 You agree not to use our platform for any unlawful or prohibited purpose. This includes, but is not limited to, violating any applicable laws, infringing on intellectual property rights, and engaging in fraudulent activities.</p>
                    </section>
                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>4. Intellectual Property</h6>
                        <p style={{fontSize: 10}}>4.1 All content and materials on our platform, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] and are protected by intellectual property laws. You may not use, reproduce, or distribute our content without our express written permission.</p>
                    </section>

                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>5. Privacy Policy</h6>
                        <p style={{fontSize: 10}}>5.1 Our Privacy Policy outlines how we collect, use, and disclose your personal information. By using our platform, you consent to the practices described in the Privacy Policy.</p>
                    </section>

                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>6. Disclaimers and Limitations of Liability</h6>
                        <p style={{fontSize: 10, position:"relative"}}>6.1 We make no warranties or representations about the accuracy or completeness of the content on our platform. Your use of our platform is at your own risk.</p>
                        <p style={{fontSize: 10, position:"relative"}}>6.2 To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your access to or use of our platform.</p>
                    </section>

                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>7. Termination</h6>
                        <p style={{fontSize: 10,}}>7.1 We reserve the right to terminate or suspend your account and access to our platform at our sole discretion, without prior notice, for any reason, including if you violate these terms.</p>
                    </section>

                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>8. Governing Law</h6>
                        <p style={{fontSize: 10}}>8.1 These terms and conditions are governed by the laws of [Your Jurisdiction]. Any disputes arising out of or in connection with these terms shall be resolved through arbitration or the courts of [Your Jurisdiction].</p>
                    </section>

                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>9. Changes to Terms</h6>
                        <p style={{fontSize: 10}}>9.1 We reserve the right to modify or update these terms and conditions at any time. Your continued use of our platform after the posting of changes constitutes your acceptance of the modified terms.</p>
                    </section>

                    <section style={{wordWrap: 'break-word', textAlign:"left"}}>
                        <h6 style={{fontSize: 16, fontFamily: 'revert',fontWeight:700, lineHeight:0}}>10. Contact Information</h6>
                        <p style={{fontSize: 10}}>10.1 If you have any questions or concerns about these terms and conditions, please contact us at [Your Contact Information].</p>
                    </section>
                </Typography>
            </CardContent>
            <FormControlLabel
                control={<Checkbox id="termsCheckbox" color="primary" />}
                label="I agree to the terms and conditions"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                <Button variant="contained" color="primary" onClick={onAccept} style={{background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'}}>
                    Agree
                </Button>
                <Button variant="contained" color="secondary" onClick={onDecline} style={{background: 'linear-gradient(90deg, red 0%, #850606 100%)'}}>
                    Disagree
                </Button>
            </div>
        </Card>
    );
};

export default MoralContract;
