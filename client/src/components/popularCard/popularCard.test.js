import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PopularCard from './popularCard'
import { Provider} from 'react-redux'
import store from '../../store'


describe('Unit Testing of PopularCard', () => {
    const data = {
        image:'131231.png',
        title: 'Test',
        author: 'Test-1',
        published_at: '2 hours ago'
    }

    it('Should Render Card match snapshot', ()=>{
 
     render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-card')
        expect(card).toMatchSnapshot()
    })


    it('Should Render Card without crashing', ()=>{
     render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-card')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
        expect(card).toHaveTextContent("Embrace the Curl---May our curls pop and never stop!")
        expect(card).not.toHaveTextContent('Facebook.com')
    })

    
    it('Should Render popular image', ()=>{
     render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-image')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render popular title', ()=>{
     render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-title')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render popular user', ()=>{
     render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-user')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render popular list', ()=>{
     render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-list')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })
    it('Should Render popular comment', ()=>{
        render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-comment')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render popular description', ()=>{
        render(
            <Provider store={store}>
                    <PopularCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('popular-description')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

})

