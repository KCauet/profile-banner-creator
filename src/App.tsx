import { useState } from 'react'
import './App.css'

import OptionBox from './components/OptionBox/OptionBox'
import AlignmentMiniPreview from './components/AlignmentMiniPreview/AlignmentMiniPreview'
import Banner from './components/Banner/Banner'

import { avaiableFonts } from './constants/fonts'
import { avaiableFontSizes } from './constants/fontSizes'

import type { BannerElements, BaseElement } from './types/BannerTypes'

function App() {

  const [curBannerStyles, setCurBannerStyle] = useState({
    backgroundColor: '#ffffff',
    BoldText: false,
    ItalicText: false
  })

  const [curTextStyles, setCurTextStyles] = useState({
    textContent: 'Your Text here',
    fontFamily: 'Arial',
    color: '#000000',
    fontSize: 24,
    fontWeight: curBannerStyles.BoldText ? "Bold" : 'normal',
    fontStyle: curBannerStyles.ItalicText ? "italic" : 'normal'
  })

  const [bannerElements, setElements] = useState<BannerElements[]>([
    {
      id: 0,
      selected: false,
      type: 'text',
      text: 'youtube',
      x: 10,
      y: 10,
      styles: {
        color: 'black',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24
      }
    },
    {
      id: 0,
      selected: false,
      type: 'rectangle',
      x: 10,
      y: 10,
      styles: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        border: '1px solid'
      }
    }
  ])

  function addComponent(type: BaseElement['type']) {
    const templateElement = createComponentTemplate(type, 1)
    setElements([...bannerElements, templateElement])
  }

  function createComponentTemplate(type: BaseElement['type'], id: number): BannerElements {
    switch(type) {
      case 'text':
        return {
          id: id,
          selected: false,
          type: 'text',
          text: 'Example Text',
          x: 10,
          y: 10,
          styles: {
            color: 'white',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 24
          }
          
        }
      case 'rectangle':
        return {
          id: id,
          selected: false,
          type: 'rectangle',
          x: 10,
          y: 10,
          styles: {
            width: 20,
            height: 20,
            backgroundColor: 'red',
            border: '1px solid'
          }
        }
    }
  }
  
  return (
    <>
      <header>
        <div>
          <section>
            <h1>Banner Studio</h1>
          </section>
          
          <section className='optionsSection'>

            <OptionBox name='Add components'>

              <button onClick={() => addComponent('text')}>Text</button>
              <button onClick={() => addComponent('rectangle')}>Rectangle</button>

            </OptionBox>

          </section>
          
        </div>
      </header>

      <main>
        <aside className='sideBar'>
          <div>
            <OptionBox name='Text Options'>

              <h2>Your text</h2>
              <input type='text'
              placeholder={curTextStyles.textContent}
              onChange={(event) => setCurTextStyles({
                ...curTextStyles,
                textContent: event.target.value
              })}
              ></input>

              <div className='checkboxDiv' style={{display: 'flex', flexDirection: 'row'}}>
                
                <input type="checkbox" checked={curBannerStyles.BoldText} onChange={(event) => (
                  setCurBannerStyle({
                    ...curBannerStyles,
                    BoldText: event.target.checked
                  })
                )}/>

                <label style={{fontWeight: 'bold'}}>Bold</label>
                <input type="checkbox" checked={curBannerStyles.ItalicText} onChange={(event) => (
                  setCurBannerStyle({
                    ...curBannerStyles,
                    ItalicText: event.target.checked
                  })
                )}/>
                <label style={{fontStyle: 'italic'}} >Italic</label>
              </div>


              <h2>Select Font</h2>
              <select value={curTextStyles.fontFamily} onChange={(event) => setCurTextStyles({
                ...curTextStyles,
                fontFamily: event.target.value
              })}>

                {
                  avaiableFonts.map((item, index) => (
                    <option value={item} key={index}>{item}</option> // TALVEZ MUDE ALGO QUANDO FOR SELECIONAR ELE
                  ))
                }
              </select>

              
              <h2>Select Font Size</h2>
              <select value={curTextStyles.fontSize} onChange={(event) => setCurTextStyles({
                ...curTextStyles,
                fontSize: Number(event.target.value)
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
              <input type='color' value={curBannerStyles.backgroundColor} onChange={(event) => setCurBannerStyle({
                ...curBannerStyles,
                backgroundColor: event.target.value
              })}></input>

              <h2>Text Color</h2>
              <input type='color' value={curTextStyles.color} onChange={(event) => setCurTextStyles({
                ...curTextStyles,
                color: event.target.value
              })}></input>

            </OptionBox>
            
            <hr />

          </div>
          
        </aside>
        <div className='mainDiv'>
          
          <Banner
          mainStyles={curBannerStyles}
          textStyles={curTextStyles}
          elementsList={bannerElements}
          />

        </div>
      </main>
    </>
  )
}

export default App