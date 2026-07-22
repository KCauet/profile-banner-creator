import { useState } from 'react'
import './App.css'

import OptionBox from './components/OptionBox/OptionBox'
import AlignmentMiniPreview from './components/AlignmentMiniPreview/AlignmentMiniPreview'
import Banner from './components/Banner/Banner'

import { avaiableFonts } from './constants/fonts'
import { avaiableFontSizes } from './constants/fontSizes'

type BannerElement = TextElement | RectangleElement

interface BaseElement {
  id: number;
  type: 'text' | 'rectangle' | 'image';
  x: number;
  y: number;
}

interface TextElement extends BaseElement {
  type: 'text';
  text: string;
  color: string;
  fontStyle: string;
  fontWeight: string;
  fontSize: number;
}

interface RectangleElement extends BaseElement {
  type: 'rectangle';
  backgroundColor: 'grey';
  borderColor: 'black';
}

function App() {

  const [bannerStyles, setBannerStyle] = useState({
    backgroundColor: '#ffffff',
    textFont: 'Arial',
    textFontSize: 24,
    textContent: 'Your Text here',
    textColor: '#000000',
    BoldText: false,
    ItalicText: false
  })

  const bannerTextStyles = {
    fontFamily: bannerStyles.textFont,
    color: bannerStyles.textColor,
    fontSize: bannerStyles.textFontSize,
    fontWeight: bannerStyles.BoldText ? "Bold" : 'normal',
    fontStyle: bannerStyles.ItalicText ? "italic" : 'normal'
  }

  const [bannerElements, setElements] = useState<BannerElement[]>([
    {
      id: 0,
      type: 'text',
      text: 'youtube',
      x: 10,
      y: 10,
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24
    },
    {
      id: 0,
      type: 'text',
      text: 'you',
      x: 10,
      y: 10,
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24
    }
  ])
  
  return (
    <>
      <header>
        <div>
          <section>
            <h1>Banner Studio</h1>
          </section>
          
          <section className='optionsSection'>
            {/* usaremos isso em breve */}
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

              <h2>Select Text Alignment</h2>
              <AlignmentMiniPreview />

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
          
          <Banner mainStyles={bannerStyles} textStyles={bannerTextStyles}>
            {bannerElements.map((element, index) => {
              switch(element.type) {
                case "text":
                  return <h1 key={index}>{element.text}</h1>
                case "rectangle":
                  return <div key={index} style={{width: '50px', height: '50px'}} ></div>
              }
            })}
          </Banner>

        </div>
      </main>
    </>
  )
}

export default App