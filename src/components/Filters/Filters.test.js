import React from 'react';
import '@testing-library/jest-dom'
import { screen, render} from '@testing-library/react'
import Filters from'./Filters'

test('render content', () => { 
    render(<Filters/>)
    screen.getAllByPlaceholderText('Name' , '1900 - 2099')
 })