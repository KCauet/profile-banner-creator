import { useState } from 'react'
import './App.css'
import OptionBox from './components/OptionBox/OptionBox'

const avaiableFonts: string[] = [
  'Arial',
  'Roboto',
  'Monospace',
  'Poppins',
  'Montserrat',
  'Inter'
]

const avaiableFontSizes: number[] = [
  14,
  16,
  20,
  24,
  28,
  34
]

function App() {

  const [bannerStyles, setBannerStyle] = useState({
    backgroundColor: 'white',
    textFont: 'Arial',
    textFontSize: 24,
    textContent: 'Your Text here',
    textColor: 'black',
    BoldText: false,
    ItalicText: false
  })
  
  return (
    <>
      <header>
        <div>
          <section>
            <h1>Banner Studio</h1>
          </section>
          
          <section className='optionsSection'>

          </section>
          
        </div>
      </header>

      <main>
        <aside className='sideBar'>
          <div>
            <OptionBox name='Text Options'>

              <h2>Your text</h2>
              <input type='text'
              placeholder={bannerStyles.textContent}
              onChange={(event) => setBannerStyle({
                ...bannerStyles,
                textContent: event.target.value
              })}
              ></input>

              <div className='checkboxDiv' style={{display: 'flex', flexDirection: 'row'}}>
                
                <input type="checkbox" checked={bannerStyles.BoldText} onChange={(event) => (
                  setBannerStyle({
                    ...bannerStyles,
                    BoldText: event.target.checked
                  })
                )}/>

                <label style={{fontWeight: 'bold'}}>Bold</label>
                <input type="checkbox" checked={bannerStyles.ItalicText} onChange={(event) => (
                  setBannerStyle({
                    ...bannerStyles,
                    ItalicText: event.target.checked
                  })
                )}/>
                <label style={{fontStyle: 'italic'}} >Italic</label>
              </div>


              <h2>Select Font</h2>
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

              
              <h2>Select Font Size</h2>
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
            
            <hr />

            <OptionBox name='Color options'>
              <h2>Select Color</h2>
              <input type='color' value={bannerStyles.backgroundColor} onChange={(event) => setBannerStyle({
                ...bannerStyles,
                backgroundColor: event.target.value
              })}></input>

              <h2>Text Color</h2>
              <input type='color' value={bannerStyles.textColor} onChange={(event) => setBannerStyle({
                ...bannerStyles,
                textColor: event.target.value
              })}></input>

            </OptionBox>
            
            <hr />

          </div>
          
        </aside>
        <div className='mainDiv'>

          <section 
          className='banner'
          style={{
            backgroundColor: bannerStyles.backgroundColor
          }}
          >
            <h1 style={{
              fontFamily: `${bannerStyles.textFont}`,
              color: bannerStyles.textColor,
              fontSize: bannerStyles.textFontSize,
              fontWeight: bannerStyles.BoldText ? 'bold' : 'normal',
              fontStyle: bannerStyles.ItalicText ? 'italic' : 'normal'
            }}>{bannerStyles.textContent}</h1>
          </section>

        </div>
      </main>
    </>
  )
}

export default App
