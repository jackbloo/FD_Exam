import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditorCard from './editorCard'
import { Provider} from 'react-redux'
import store from '../../store'


describe('Unit Testing of EditorCard', () => {
    const data = {
        editor: 'Test-1',
        published_at: '2 hours ago',
        role:'Director',
        product:{
            rating: 4.3,
            name:'Test',
            description: 'test-1'
        }
    }

    it('Should Render Card match snapshot when editor is true', ()=>{

     render(
            <Provider store={store}>
                    <EditorCard data={data} isEditor={true}/>
            </Provider>
        )
        const card = screen.getByTestId('editor-card')
        expect(card).toMatchSnapshot()
    })


    it('Should Render Card match snapshot when editor is false', ()=>{

        render(
               <Provider store={store}>
                       <EditorCard data={data} isEditor={false}/>
               </Provider>
           )
           const card = screen.getByTestId('editor-card')
           expect(card).toMatchSnapshot()
       })
   

    
    it('Should Render Card without crashing', ()=>{
     render(
            <Provider store={store}>
                    <EditorCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('editor-card')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
        expect(card).toHaveTextContent("4.3(7)Testtest-1")
        expect(card).not.toHaveTextContent('Facebook.com')
    })

    
    it('Should Render editor image', ()=>{
     render(
            <Provider store={store}>
                    <EditorCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('editor-image')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render editor title when isEditor true', ()=>{
     render(
            <Provider store={store}>
                    <EditorCard data={data} isEditor={true}/>
            </Provider>
        )
        const card = screen.getByTestId('editor-role')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render editor editor when isEditor true', ()=>{
     render(
            <Provider store={store}>
                    <EditorCard data={data} isEditor={true}/>
            </Provider>
        )
        const card = screen.getByTestId('editor-editor')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })
    
    it('Should Render editor description', ()=>{
     render(
            <Provider store={store}>
                    <EditorCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('editor-description')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render editor name', ()=>{
        render(
               <Provider store={store}>
                       <EditorCard data={data}/>
               </Provider>
           )
           const card = screen.getByTestId('editor-name')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })


})

