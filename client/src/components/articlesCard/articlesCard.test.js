import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ArticlesCard from './articlesCard'
import { Provider} from 'react-redux'
import store from '../../store'


describe('Test ArticlesCard', () => {
    const data = {
        image:'131231.png',
        title: 'Test',
        author: 'Test-1',
        published_at: '2 hours ago'
    }
    it('Should Render Card match snapshot', ()=>{

     render(
            <Provider store={store}>
                    <ArticlesCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('article-card')
        expect(card).toMatchSnapshot()
    })


    it('Should Render Card without crashing', ()=>{

     render(
            <Provider store={store}>
                    <ArticlesCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('article-card')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
        expect(card).toHaveTextContent("TestTest-1 |2 hours ago")
        expect(card).not.toHaveTextContent('Facebook.com')
    })

    
    it('Should Render article image', ()=>{

     render(
            <Provider store={store}>
                    <ArticlesCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('article-image')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render article title', ()=>{

     render(
            <Provider store={store}>
                    <ArticlesCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('article-title')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render article username', ()=>{

     render(
            <Provider store={store}>
                    <ArticlesCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('article-username')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render article published', ()=>{

     render(
            <Provider store={store}>
                    <ArticlesCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('article-username')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })


})

