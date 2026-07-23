import { useState } from 'react'
import './App.css'

import OptionBox from './components/OptionBox/OptionBox'
import AlignmentMiniPreview from './components/AlignmentMiniPreview/AlignmentMiniPreview'
import Banner from './components/Banner/Banner'

import { avaiableFonts } from './constants/fonts'
import { avaiableFontSizes } from './constants/fontSizes'

import type { BannerElements, BaseElement, TextElement } from './types/BannerTypes'

function App() {

  // Morrendo devagarzin :>
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
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontSize: 24,
        fontStyle: 'normal'
      }
    },
    {
      id: 1,
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
    },
    {
      id: 2,
      selected: false,
      type: 'text',
      text: 'youtube',
      x: 10,
      y: 10,
      styles: {
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontSize: 24,
        fontStyle: 'normal'
      }
    }
  ])

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedElement = bannerElements.find(element => element.id === selectedId)

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
            color: 'black',
            fontFamily: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            fontStyle: 'normal'
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

  function selectComponent(id: number) {
    setSelectedId(id)
  }

  // Funções pra atualizar o estado dos items (Feitos só os de texto e ainda tá uma bagunça :<)

  function updateText(changes: string) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          text: changes
        }
      }

      return element
    })

    setElements(newList)
  }

  function updateTextColor(changes: string) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          styles: {
            ...element.styles,
            color: changes
          }
        }
      }

      return element
    })

    setElements(newList)
  }

  function updateFont(changes: string) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          styles: {
            ...element.styles,
            fontFamily: changes
          }
        }
      }

      return element
    })

    setElements(newList)
  }

  function updateItalicFont(changes: string) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          styles: {
            ...element.styles,
            fontStyle: changes
          }
        }
      }

      return element
    })

    setElements(newList)
  }

  function updateFontSize(changes: number) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          styles: {
            ...element.styles,
            fontSize: changes
          }
        }
      }

      return element
    })

    setElements(newList)
  }

  function updateBoldFont(changes: string) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          styles: {
            ...element.styles,
            fontWeight: changes
          }
        }
      }

      return element
    })

    setElements(newList)
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
              value={selectedElement?.type === 'text' ? selectedElement.text : ''}
              placeholder={selectedElement?.type === 'text' ? selectedElement.text : ''}
              onChange={(event) => {
                updateText(event.target.value)
              }}
              ></input>

              <div className='checkboxDiv' style={{display: 'flex', flexDirection: 'row'}}>
                
                <input type="checkbox"
                // Aqui embaixo ele vai fazer uma verificação pra saber se é texto e tbm tem uma adaptação pra esse caso pq fontWeight é uma string e o checked só aceita boolean
                checked={
                  selectedElement?.type === 'text' &&
                  selectedElement.styles.fontWeight === 'bold'
                }
                onChange={(event) => {
                  updateBoldFont(event.target.checked ? 'bold' : 'normal')
                }}/>
                <label style={{fontWeight: 'bold'}}>Bold</label>

                <input type="checkbox"
                checked={
                  selectedElement?.type === 'text' &&
                  selectedElement.styles.fontStyle === 'italic'
                }
                onChange={(event) => {
                  updateItalicFont(event.target.checked ? 'italic' : 'normal')
                }}
                />
                <label style={{fontStyle: 'italic'}} >Italic</label>
              </div>


              <h2>Select Font</h2>
              <select 
              value={selectedElement?.type === 'text' ? selectedElement.styles.fontFamily : 'Arial'}
              onChange={(event) => {
                updateFont(event.target.value)
              }}>

                {
                  avaiableFonts.map((item, index) => (
                    <option value={item} key={index}>{item}</option> // TALVEZ MUDE ALGO QUANDO FOR SELECIONAR ELE
                  ))
                }
              </select>

              
              <h2>Select Font Size</h2>
              <select
              value={selectedElement?.type === 'text' ? selectedElement.styles.fontSize : 24}
              onChange={(event) => updateFontSize(Number(event.target.value))}>

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
              <input type='color'  onChange={(event) => updateTextColor(event.target.value)}>
              
              </input>

            </OptionBox>
            
            <hr />

          </div>
          
        </aside>
        <div className='mainDiv'>
          
          <Banner
          mainStyles={curBannerStyles}
          elementsList={bannerElements}
          onSelect={selectComponent}
          />

        </div>
      </main>
    </>
  )
}

export default App