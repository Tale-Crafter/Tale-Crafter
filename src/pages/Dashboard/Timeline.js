// Timeline.js
import React from 'react';

const Timeline = ({ level }) => {
    const steps = [
        { title: "Survey Initiation", activeColor: '#00BDA9' },
        { title: "Question Development", activeColor: '#00BDA9' },
        { title: "Review and Preview", activeColor: '#00BDA9' },
        { title: "Targeting and Parameters", activeColor: '#00BDA9' },
        { title: "Payment and Finalization", activeColor: '#00BDA9' },
    ];

    return (
        <div>
            <div style={{ left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontWeight: '700' }}>Creating a new survey</div>
            {steps.map((step, index) => {
                const isActive = index === level;
                const color = isActive ? step.activeColor : '#CCCCCC';

                return (
                    <React.Fragment key={index}>
                        {/* Step Title */}
                        <div style={{
                            width: 160,
                            left: 150 + (index * 175),
                            top: 193,
                            position: 'absolute',
                            color,
                            fontSize: 14,
                            fontWeight: isActive ? '600' : '400'
                        }}>
                            {step.title.split('<br/>').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Step Circle */}
                        <div style={{
                            width: 24,
                            height: 24,
                            left: 190 + (index * 175),
                            top: 161,
                            position: 'absolute'
                        }}>
                            <div style={{
                                width: 24,
                                height: 24,
                                background: isActive ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : '#DDDDDD',
                                borderRadius: '50%'
                            }} />
                            {isActive && (
                                <div style={{
                                    width: 12,
                                    height: 12,
                                    left: 6,
                                    top: 6,
                                    position: 'absolute',
                                    background: 'white',
                                    borderRadius: '50%'
                                }} />
                            )}
                        </div>

                        {/* Connecting Line */}
                        {index < steps.length - 1 && (
                            <div style={{
                                width: 143,
                                height: 0,
                                left: 215 + (index * 175),
                                top: 171,
                                position: 'absolute',
                                border: '1px solid #DDDDDD'
                            }} />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Timeline;
