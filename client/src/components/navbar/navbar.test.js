import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from './navbar';
import { Provider} from 'react-redux'
import store from '../../store'


describe('Unit Testng of Navbar', () => {
    it('Should Render Navbar match snapshot', ()=>{

     render(
            <Provider store={store}>
                    <Navbar/>
            </Provider>
        )
        const card = screen.getByTestId('navbar-container')
        expect(card).toMatchSnapshot()
    })


    
    it('Should Render Navbar without crashing', ()=>{
     render(
            <Provider store={store}>
                    <Navbar/>
            </Provider>
        )
        const card = screen.getByTestId('navbar-container')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
        expect(card).toHaveTextContent("LOGIN/SIGNUPSKINCAREMAKE UPBODYHAIRFRAGRANCENAILSTOOLSBRANDS")
        expect(card).not.toHaveTextContent('Facebook.com')
    })

    
    it('Should Render navbar burgerbar', ()=>{
     render(
            <Provider store={store}>
                 <Navbar/>
            </Provider>
        )
        const card = screen.getByTestId('navbar-burgerbar')
        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('Should Render navbar Female Daily logo', ()=>{
        render(
               <Provider store={store}>
                      <Navbar/>
               </Provider>
           )
           const card = screen.getByTestId('navbar-fdlogo')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })

       it('Should Render navbar Search icon', ()=>{
        render(
               <Provider store={store}>
                      <Navbar/>
               </Provider>
           )
           const card = screen.getByTestId('navbar-search-icon')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })

       it('Should Render navbar Search Bar', ()=>{
        render(
               <Provider store={store}>
                 <Navbar/>
               </Provider>
           )
           const card = screen.getByTestId('navbar-searchbar')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })

       it('Should Render navbar login and signup', ()=>{
        render(
               <Provider store={store}>
               <Navbar/>
               </Provider>
           )
           const card = screen.getByTestId('navbar-login-signup')
           expect(card).toBeInTheDocument()
           expect(card).toBeVisible()
       })


})

