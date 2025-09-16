import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Pregnancy Tracker - Track Your Journey Week by Week';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fef7f0',
          backgroundImage: 'linear-gradient(135deg, #fef7f0 0%, #fce7f3 100%)',
          fontSize: 32,
          fontWeight: 600,
          padding: '40px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
            backgroundColor: '#ec4899',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px',
            fontSize: '40px',
          }}
        >
          👶
        </div>
        <div
          style={{
            color: '#1f2937',
            fontSize: '48px',
            fontWeight: 'bold',
          }}
        >
          Pregnancy Tracker
        </div>
      </div>
      
      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            margin: '0 0 20px 0',
          }}
        >
          Track Your Journey
        </h1>
        <h2
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#1f2937',
            margin: '0 0 30px 0',
          }}
        >
          Week by Week
        </h2>
        <p
          style={{
            fontSize: '24px',
            color: '#6b7280',
            lineHeight: 1.4,
            margin: '0',
          }}
        >
          Simple and intuitive pregnancy tracking app. Monitor your baby&apos;s growth,
          track symptoms, and stay informed about your pregnancy journey.
        </p>
      </div>
      
      {/* Features */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#374151',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              marginBottom: '8px',
            }}
          >
            📅
          </div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Weekly Tracking
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#374151',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              marginBottom: '8px',
            }}
          >
            📊
          </div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Symptom Tracking
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#374151',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              marginBottom: '8px',
            }}
          >
            💡
          </div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Partner Tips
          </div>
        </div>
      </div>
    </div>
  ),
  {
    ...size,
  }
);
}