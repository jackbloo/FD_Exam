import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ReviewCard from './reviewCards'
import { Provider} from 'react-redux'
import store from '../../store'


describe('Unit Testing of ReviewCard', () => {
    const data = {
        user: 'Test-1',
        published_at: '2 hours ago',
        role:'Director',
        product:{
            rating: 4.3,
            name:'Test',
            description: 'test-1'
        },
        profile:['','','', '19-27'],
        comment:'Test-2w'
    }

    it('Should Render Card match snapshot', ()=>{

     render(
            <Provider store={store}>
                    <ReviewCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('review-card')
        expect(card).toMatchSnapshot()
    }) 
    
    it('Should Render Card without crashing', ()=>{
     render(
            <Provider store={store}>
                    <ReviewCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('review-card')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
        expect(card).toHaveTextContent("TestTest-2wRead MoreTest-1Combination skin, 19-27")
        expect(card).not.toHaveTextContent('Facebook.com')
    })

    
    it('Should Render review image', ()=>{
     render(
            <Provider store={store}>
                    <ReviewCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('review-image')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render review user', ()=>{
        render(
               <Provider store={store}>
                       <ReviewCard data={data}/>
               </Provider>
           )
           const card = screen.getByTestId('review-user')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })

    it('Should Render review comment', ()=>{
     render(
            <Provider store={store}>
                    <ReviewCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('review-comments')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render review description for product', ()=>{
     render(
            <Provider store={store}>
                    <ReviewCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('review-description-product')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })
    
    it('Should Render review description', ()=>{
     render(
            <Provider store={store}>
                    <ReviewCard data={data}/>
            </Provider>
        )
        const card = screen.getByTestId('review-description')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render review name', ()=>{
        render(
               <Provider store={store}>
                       <ReviewCard data={data}/>
               </Provider>
           )
           const card = screen.getByTestId('review-name')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })


})

