import Image from 'next/image'
import '../app/styles/cause.css'

export default function Cause() {
  return (
    <main id='cause' className='cause'>
      <h1 className='cause-head'>Our Causes</h1>
      
      {/* Cause - Dis */}
      <div className='cause-dis'>

        {/* Cards */}
        <div className='cause-card'>
          <Image 
          src={'/images/cause1.jpg'}
          alt='cause'
          width={3000}
          height={3000}
          className='cause-img'
          />

          <div className='cause-content'>
            <h2 className='content-head'>Children Education</h2>
            <p className='content-dis'>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>
            <div className='content-slider'></div>
            <div className='cause-fund'>
              <p><span>Raised: </span> $18,500</p>
              <p><span>Goal: </span> $32,000</p>
            </div>
          </div>
          <p className='cause-button'>Donate Now</p>
        </div>

        {/* Cards */}
        <div className='cause-card'>
          <Image 
          src={'/images/cause2.jpg'}
          alt='cause'
          width={3000}
          height={3000}
          className='cause-img'
          />

          <div className='cause-content'>
            <h2 className='content-head'>Poverty Development</h2>
            <p className='content-dis'>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor</p>
            <div className='content-slider2'></div>
            <div className='cause-fund'>
              <p><span>Raised: </span> $27,600</p>
              <p><span>Goal: </span> $60,000</p>
            </div>
          </div>
          <p className='cause-button'>Donate Now</p>
        </div>

        {/* Cards */}
        <div className='cause-card'>
          <Image 
          src={'/images/cause3.jpg'}
          alt='cause'
          width={3000}
          height={3000}
          className='cause-img'
          />

          <div className='cause-content'>
            <h2 className='content-head'>Supply drinking water</h2>
            <p className='content-dis'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
            <div className='content-slider3'></div>
            <div className='cause-fund'>
              <p><span>Raised: </span> $84,600</p>
              <p><span>Goal: </span> $100,000</p>
            </div>
          </div>
          <p className='cause-button'>Donate Now</p>
        </div>

      </div>
    </main>
  )
}