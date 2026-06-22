'use client'

export default function Timeline3DButtons({ activeStage, setActiveStage, stageCount }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', height: '40px', alignItems: 'center', zIndex: 10, position: 'relative' }}>
      {Array.from({ length: stageCount }).map((_, i) => {
        const isActive = activeStage === i
        return (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation()
              setActiveStage(i)
            }}
            style={{
              width: isActive ? '14px' : '10px',
              height: isActive ? '14px' : '10px',
              borderRadius: '50%',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: isActive ? '#ff9933' : '#3a5060',
              boxShadow: isActive 
                ? '0 0 15px rgba(255,153,51,0.6), inset 0 2px 4px rgba(255,255,255,0.8)' 
                : 'inset 0 2px 4px rgba(0,0,0,0.5)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              outline: 'none',
              transform: isActive ? 'scale(1.2)' : 'scale(1)',
            }}
            onMouseOver={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = '#4a657a'
              }
            }}
            onMouseOut={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = '#3a5060'
              }
            }}
            aria-label={`Go to stage ${i + 1}`}
          />
        )
      })}
    </div>
  )
}
