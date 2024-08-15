import React from 'react';

const Chart = () => {
    // Data for the chart
    const data = [
        { month: '01/01/2023', value: 3000 },
        { month: '06/01/2023', value: 4000 },
        { month: '01/01/2024', value: 2500 },
        { month: '06/01/2024', value: 3500 },
        { month: '12/01/2023', value: 4500 },
        { month: '12/01/2024', value: 3000 }
    ];

    return (
        <div style={{ width: '925px', height: 'auto', position: 'relative',left: 340,top: 700 }}>
            {/* Chart Container */}
            <div style={{ width: 925, height: 322, position: 'absolute', background: 'white', borderRadius: 16, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '2px' }}>
                {/* Y-Axis Labels */}
                {['0K', '1K', '2K', '3K', '4K', '5K'].map((label, index) => (
                    <div
                        key={label}
                        style={{
                            position: 'absolute',
                            left: 15, // Adjust to fit within padding
                            top: 259 - index * 39,
                            color: '#999999',
                            fontSize: 12,
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            lineHeight: '14px',
                            wordWrap: 'break-word'
                        }}
                    >
                        {label}
                    </div>
                ))}

                {/* Grid Lines */}
                {[55, 140, 240, 340, 440, 540, 640].map((left, index) => (
                    <div
                        key={index}
                        style={{
                            width: 1,
                            height: 202,
                            position: 'absolute',
                            left: left,
                            top: 70,
                            background: left % 55 === 0 ? '#CCCCCC' : '#F0F0F0',
                            borderRadius: 20
                        }}
                    />
                ))}

                {/* Bars */}
                {data.map((item, index) => (
                    <div
                        key={item.month}
                        style={{
                            width: 60, // Width for spacing
                            height: (item.value / 50) + 'px', // Scale value for visual representation
                            position: 'absolute',
                            left: 55 + index * 105, // Adjust positioning for spacing
                            bottom: 70,
                            background: '#24A3FF',
                            borderRadius: 8,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}
                    >
                        <div
                            style={{
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                lineHeight: '16px',
                                position: 'absolute',
                                bottom: '-20px',
                                width: '100%'
                            }}
                        >
                            {item.value}
                        </div>
                    </div>
                ))}

                {/* X-Axis Labels */}
                {data.map((item, index) => (
                    <div
                        key={item.month}
                        style={{
                            position: 'absolute',
                            left: 55 + index * 105, // Match bar positions
                            bottom: 0,
                            color: '#666666',
                            fontSize: 10,
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            textAlign: 'center',
                            width: 60
                        }}
                    >
                        {item.month}
                    </div>
                ))}
            </div>

            {/* Title */}
            <div
                style={{
                    width: 389,
                    height: 37,
                    position: 'absolute',
                    left: 19,
                    top: 15,
                    color: '#333333',
                    fontSize: 24,
                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    wordWrap: 'break-word'
                }}
            >
                Participation aux Enquêtes
            </div>

            {/* Legend */}
            <div style={{ position: 'absolute', left: 448, top: 16, fontFamily: 'Open Sans', fontSize: 10, color: '#666666' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    <div style={{ width: 12, height: 12, background: '#24A3FF', borderRadius: '50%', marginRight: 8 }} />
                    Nouveaux participants
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 12.7, height: 12.7, background: '#F8BB1E', borderRadius: '50%', marginRight: 8 }} />
                    Participants récurrents
                </div>
            </div>

            {/* Date Range */}
            <div
                style={{
                    width: 90,
                    position: 'absolute',
                    left: 582,
                    top: 25,
                    textAlign: 'right',
                    color: '#111111',
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    fontWeight: 600,
                    letterSpacing: 0.02,
                    wordWrap: 'break-word'
                }}
            >
                01/01/2023 - 12/01/2024
            </div>

            {/* Rotate Icon */}
            <div
                style={{
                    width: 16,
                    height: 16,
                    position: 'absolute',
                    left: 674,
                    top: 41,
                    transform: 'rotate(-90deg)',
                    transformOrigin: '0 0'
                }}
            >
                <div
                    style={{
                        width: 10,
                        height: 6.18,
                        position: 'absolute',
                        left: 10.18,
                        top: 3,
                        background: '#848A95',
                        transform: 'rotate(90deg)',
                        transformOrigin: '0 0'
                    }}
                />
            </div>
        </div>
    );
};

export default Chart;
