import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pagination from './pagination';
import { Provider} from 'react-redux'
import store from '../../store'


describe('Unit Testing of Pagination', () => {
  
    it('Should Render Pagination match snapshot', ()=>{

     render(
            <Provider store={store}>
                    <Pagination/>
            </Provider>
        )
        const card = screen.getByTestId('pagination-container')
        expect(card).toMatchSnapshot()
    })


    
    it('Should Render Pagination without crashing', ()=>{
     render(
            <Provider store={store}>
                    <Pagination />
            </Provider>
        )
        const card = screen.getByTestId('pagination-container')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    
    it('Should Render pagination left arrow', ()=>{
     render(
            <Provider store={store}>
                    <Pagination />
            </Provider>
        )
        const card = screen.getByTestId('pagination-left-arrow')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render pagination right arrow', ()=>{
        render(
               <Provider store={store}>
                       <Pagination />
               </Provider>
           )
           const card = screen.getByTestId('pagination-right-arrow')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })

    it('Should Render pagination dots', ()=>{
        render(
               <Provider store={store}>
                       <Pagination />
               </Provider>
           )
           const card = screen.getByTestId('pagination-dots-0')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })

})

