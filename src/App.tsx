import { useState } from 'react'
import './App.css'
import OptionBox from './components/OptionBox/OptionBox'

const avaiableFonts: string[] = [
  'Arial',
  'Roboto',
  'Monospace'
]

const avaiableFontSizes: number[] = [
  10,
  12,
  16,
  20,
  24,
  30
]

function App() {

  const [bannerStyles, setBannerStyle] = useState({
    backgroundColor: 'red',
    textFont: 'Arial',
    textFontSize: 16,
    textContent: 'Your Text here'
  })
  
  return (
    <>
      <header>
        <div>
          <section style={{backgroundColor: 'yellow'}}>
            <h1>App Name Here</h1>
          </section>
          
          <section className='optionsSection'>

          </section>
          
        </div>
      </header>

      <main>
        <aside className='sideBar'>
          <div>
            <OptionBox name='Select Font'>
              <select value={bannerStyles.textFont} onChange={(event) => setBannerStyle({
                ...bannerStyles,
                textFont: event.target.value
              })}>

                {
                  avaiableFonts.map((item, index) => (
                    <option value={item} key={index}>{item}</option> // TALVEZ MUDE ALGO QUANDO FOR SELECIONAR ELE
                  ))
                }
              </select>
            </OptionBox>

            <OptionBox name='Select Color'>
              <input type='color' value={bannerStyles.backgroundColor} onChange={(event) => setBannerStyle({
                ...bannerStyles,
                backgroundColor: event.target.value
              })}></input>
            </OptionBox>

            <OptionBox name='Your text'>
              <input type='text'
              placeholder={bannerStyles.textContent}
              onChange={(event) => setBannerStyle({
                ...bannerStyles,
                textContent: event.target.value
              })}
              ></input>
            </OptionBox>

            <OptionBox name='Select Font Size'>
              <select value={bannerStyles.textFontSize} onChange={(event) => setBannerStyle({
                ...bannerStyles,
                textFontSize: Number(event.target.value)
              })}>

                {
                  avaiableFontSizes.map((item, index) => (
                    <option value={item} key={index}>{item}</option> // TALVEZ MUDE ALGO QUANDO FOR SELECIONAR ELE
                  ))
                }
              </select>
              
            </OptionBox>

          </div>
          
        </aside>
        <div className='mainDiv'>

          <section 
          className='banner'
          style={{
            backgroundColor: bannerStyles.backgroundColor,
            fontSize: bannerStyles.textFontSize
          }}
          >
            <h1 style={{
              fontFamily: `${bannerStyles.textFont}`
            }}>{bannerStyles.textContent}</h1>
          </section>

        </div>
      </main>
    </>
  )
}

export default App
