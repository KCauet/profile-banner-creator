import { useState } from 'react'
import './App.css'

import OptionBox from './components/OptionBox/OptionBox'
import AlignmentMiniPreview from './components/AlignmentMiniPreview/AlignmentMiniPreview'
import Banner from './components/Banner/Banner'

import { avaiableFonts } from './constants/fonts'
import { avaiableFontSizes } from './constants/fontSizes'

import type { BannerElements, BaseElement } from './types/BannerTypes'

function App() {

  // Morrendo devagarzin :>
  const [BannerStyles, setBannerStyle] = useState({
    backgroundColor: '#ffffff',
  })

  // Elementos iniciais só pra Testes
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

  // Refatorados >:) )

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

  function updateTextStyles(property: string, changes: string | number) {
    const newList = bannerElements.map(element => {
      if (element.id === selectedId && element.type === 'text') {
        return {
          ...element,
          styles: {
            ...element.styles,
            [property]: changes
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
                  updateTextStyles('fontWeight',event.target.checked ? 'bold' : 'normal')
                }}/>
                <label style={{fontWeight: 'bold'}}>Bold</label>

                <input type="checkbox"
                checked={
                  selectedElement?.type === 'text' &&
                  selectedElement.styles.fontStyle === 'italic'
                }
                onChange={(event) => {
                  updateTextStyles('fontStyle', event.target.checked ? 'italic' : 'normal')
                }}
                />
                <label style={{fontStyle: 'italic'}} >Italic</label>
              </div>


              <h2>Select Font</h2>
              <select 
              value={selectedElement?.type === 'text' ? selectedElement.styles.fontFamily : 'Arial'}
              onChange={(event) => {
                updateTextStyles('fontFamily', event.target.value)
              }}>

                {
                  avaiableFonts.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                  ))
                }
              </select>

              
              <h2>Select Font Size</h2>
              <select
              value={selectedElement?.type === 'text' ? selectedElement.styles.fontSize : 24}
              onChange={(event) => updateTextStyles('fontSize', Number(event.target.value))}>

                {
                  avaiableFontSizes.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                  ))
                }
              </select>

              <h2>Select Text Alignment</h2>
              <AlignmentMiniPreview />

            </OptionBox>
            
            <hr />

            <OptionBox name='Color options'>
              <h2>Select Color</h2>
              <input type='color' value={BannerStyles.backgroundColor} onChange={(event) => setBannerStyle({
                ...BannerStyles,
                backgroundColor: event.target.value
              })}></input>

              <h2>Text Color</h2>
              <input type='color'  onChange={(event) => updateTextStyles('color', event.target.value)}>
              
              </input>

            </OptionBox>
            
            <hr />

          </div>
          
        </aside>
        <div className='mainDiv'>
          
          <Banner
          mainStyles={BannerStyles}
          elementsList={bannerElements}
          onSelect={selectComponent}
          />

        </div>
      </main>
    </>
  )
}

export default App